// src/iota.js
// Mock IOTA wallet for development purposes

const mockWallet = {
  isConnected: false,
  address: null,

  async connect() {
    console.log("Mock wallet connected!");
    this.isConnected = true;
    this.address = "atoi1qpseudoaddress000000000000000000000000000000";
    return { address: this.address };
  },

  async disconnect() {
    console.log("Mock wallet disconnected!");
    this.isConnected = false;
    this.address = null;
    return true;
  },

  async getAddress() {
    if (!this.isConnected) throw new Error("Wallet not connected");
    return this.address;
  },

  async sendTokens(receiver, amount) {
    if (!this.isConnected) throw new Error("Wallet not connected");
    console.log(`Mock transaction: Sent ${amount} IOTA to ${receiver}`);
    return {
      transactionId: `mock_tx_${Math.random().toString(36).substring(2, 10)}`,
      receiver,
      amount,
      timestamp: new Date().toISOString(),
    };
  },
};

export default mockWallet;
