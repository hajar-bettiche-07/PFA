// src/services/iotaWallet.js
import { Wallet, CoinType } from '@iota/sdk';

class IotaWalletService {
  constructor() {
    this.wallet = null;
    this.account = null;
    this.isConnected = false;
    
    // Use environment variables
    this.nodeUrl = process.env.REACT_APP_IOTA_NODE_URL || 'https://api.testnet.shimmer.network';
    this.network = process.env.REACT_APP_NETWORK || 'testnet';
    this.coinType = parseInt(process.env.REACT_APP_COIN_TYPE) || CoinType.Shimmer;
  }

  // Initialize wallet
  async initializeWallet() {
    try {
      // For development, we'll use a simpler approach without Stronghold
      // In production, you should implement proper secret management
      const walletOptions = {
        storagePath: process.env.REACT_APP_WALLET_STORAGE_PATH || './iota-wallet-db',
        clientOptions: {
          nodes: [this.nodeUrl],
          localPow: true,
        },
        coinType: this.coinType,
      };

      console.log('Initializing IOTA wallet with options:', {
        node: this.nodeUrl,
        coinType: this.coinType
      });

      this.wallet = await Wallet.create(walletOptions);
      
      // Create or get account
      const accounts = await this.wallet.getAccounts();
      if (accounts.length > 0) {
        this.account = await this.wallet.getAccount(accounts[0].index);
        console.log('Using existing account:', accounts[0].alias);
      } else {
        this.account = await this.wallet.createAccount({
          alias: 'Olivium Supply Chain',
        });
        console.log('Created new account:', this.account.getMetadata().alias);
      }

      this.isConnected = true;
      const metadata = this.account.getMetadata();
      
      console.log('IOTA Wallet initialized successfully:', {
        alias: metadata.alias,
        index: metadata.index,
        publicAddresses: metadata.publicAddresses.length
      });
      
      return {
        success: true,
        account: metadata,
        accountIndex: metadata.index
      };
    } catch (error) {
      console.error('Error initializing IOTA wallet:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Connect wallet
  async connect() {
    if (this.isConnected && this.account) {
      return await this.getWalletInfo();
    }

    return await this.initializeWallet();
  }

  // Disconnect wallet
  async disconnect() {
    try {
      if (this.wallet) {
        // Backup any important data before destroying
        await this.wallet.backup('./wallet-backup.json', 'backup-password');
        await this.wallet.destroy();
      }
      this.wallet = null;
      this.account = null;
      this.isConnected = false;
      return { success: true };
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
      return { success: false, error: error.message };
    }
  }

  // Get wallet information
  async getWalletInfo() {
    if (!this.isConnected || !this.account) {
      throw new Error('Wallet not connected');
    }

    try {
      const balance = await this.account.sync();
      const updatedBalance = await this.account.getBalance();
      const addresses = await this.account.addresses();
      
      return {
        account: this.account.getMetadata(),
        balance: updatedBalance.baseCoin.total,
        availableBalance: updatedBalance.baseCoin.available,
        addresses: addresses.map(addr => ({
          address: addr.address,
          balance: addr.balance,
          keyIndex: addr.keyIndex,
          internal: addr.internal
        })),
        nativeTokens: updatedBalance.nativeTokens,
        network: this.network
      };
    } catch (error) {
      console.error('Error getting wallet info:', error);
      throw error;
    }
  }

  // Generate new address
  async generateAddress() {
    if (!this.isConnected || !this.account) {
      throw new Error('Wallet not connected');
    }

    try {
      const address = await this.account.generateEd25519Address();
      return {
        address: address.address,
        keyIndex: address.keyIndex,
        internal: address.internal
      };
    } catch (error) {
      console.error('Error generating address:', error);
      throw error;
    }
  }

  // Send transaction
  async sendTransaction(recipientAddress, amount, options = {}) {
    if (!this.isConnected || !this.account) {
      throw new Error('Wallet not connected');
    }

    try {
      // Sync account before sending
      await this.account.sync();

      const transaction = await this.account.send(
        amount,
        recipientAddress,
        options
      );

      return {
        transactionId: transaction.transactionId,
        blockId: transaction.blockId,
        amount,
        recipient: recipientAddress
      };
    } catch (error) {
      console.error('Error sending transaction:', error);
      throw error;
    }
  }

  // Get transaction history
  async getTransactions() {
    if (!this.isConnected || !this.account) {
      throw new Error('Wallet not connected');
    }

    try {
      const transactions = await this.account.transactions();
      return transactions;
    } catch (error) {
      console.error('Error getting transactions:', error);
      throw error;
    }
  }

  // Store data on Tangle (for supply chain records)
  async storeData(data, tag = 'OLIVIUM') {
    if (!this.isConnected || !this.account) {
      throw new Error('Wallet not connected');
    }

    try {
      // Convert data to JSON string
      const dataString = typeof data === 'string' ? data : JSON.stringify(data);
      
      // Generate a new address for receiving the data
      const address = await this.generateAddress();
      
      // Prepare and send transaction with data
      const message = await this.account.prepareOutput({
        recipientAddress: address.address,
        amount: '0', // No value transfer, just data
        features: [{
          type: 'Tag',
          tag: tag
        }, {
          type: 'Metadata',
          data: Buffer.from(dataString).toString('hex')
        }]
      });

      const transaction = await this.account.send(message);
      
      return {
        transactionId: transaction.transactionId,
        messageId: transaction.messageId,
        tag,
        data: dataString,
        address: address.address
      };
    } catch (error) {
      console.error('Error storing data on Tangle:', error);
      throw error;
    }
  }

  // Get current connection status
  getStatus() {
    return {
      isConnected: this.isConnected,
      account: this.account ? this.account.getMetadata() : null,
      network: this.network
    };
  }

  // Backup wallet (important for development)
  async backupWallet(password = 'backup-password') {
    if (!this.wallet) {
      throw new Error('Wallet not initialized');
    }

    try {
      await this.wallet.backup('./wallet-backup.json', password);
      return { success: true, path: './wallet-backup.json' };
    } catch (error) {
      console.error('Error backing up wallet:', error);
      throw error;
    }
  }
}

// Create singleton instance
const iotaWalletService = new IotaWalletService();

export default iotaWalletService;