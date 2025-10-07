import React, { createContext, useContext, useState, useEffect } from 'react';
import iotaWalletService from '../services/iotaWallet';

const WalletContext = createContext();

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

export const WalletProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(0);
  const [error, setError] = useState(null);

  // Check if wallet was previously connected
  useEffect(() => {
    const checkExistingConnection = async () => {
      const status = iotaWalletService.getStatus();
      if (status.isConnected && status.account) {
        setIsConnected(true);
        setAccount(status.account);
        // Refresh balance
        await refreshBalance();
      }
    };

    checkExistingConnection();
  }, []);

  const refreshBalance = async () => {
    try {
      const walletInfo = await iotaWalletService.getWalletInfo();
      setBalance(walletInfo.balance);
      setAccount(walletInfo.account);
    } catch (error) {
      console.error('Error refreshing balance:', error);
    }
  };

  const connectWallet = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await iotaWalletService.connect();
      
      if (result.success) {
        setIsConnected(true);
        setAccount(result.account);
        await refreshBalance();
      } else {
        setError(result.error || 'Failed to connect wallet');
      }
    } catch (error) {
      console.error('Wallet connection error:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const disconnectWallet = async () => {
    setIsLoading(true);
    try {
      const result = await iotaWalletService.disconnect();
      if (result.success) {
        setIsConnected(false);
        setAccount(null);
        setBalance(0);
        setError(null);
      }
    } catch (error) {
      console.error('Wallet disconnection error:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const generateAddress = async () => {
    try {
      return await iotaWalletService.generateAddress();
    } catch (error) {
      console.error('Error generating address:', error);
      throw error;
    }
  };

  const sendTransaction = async (recipientAddress, amount, options = {}) => {
    try {
      return await iotaWalletService.sendTransaction(recipientAddress, amount, options);
    } catch (error) {
      console.error('Error sending transaction:', error);
      throw error;
    }
  };

  const storeData = async (data, tag = 'OLIVIUM') => {
    try {
      return await iotaWalletService.storeData(data, tag);
    } catch (error) {
      console.error('Error storing data:', error);
      throw error;
    }
  };

  const value = {
    isConnected,
    isLoading,
    account,
    balance,
    error,
    connectWallet,
    disconnectWallet,
    generateAddress,
    sendTransaction,
    storeData,
    refreshBalance
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
};