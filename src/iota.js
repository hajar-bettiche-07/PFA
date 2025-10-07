// src/iota.js
import { SingleNodeClient, Wallet } from '@iota/sdk';

// Create a wallet instance (use your own storage path)
const wallet = new Wallet({
  clientOptions: {
    nodes: ['https://api.testnet.shimmer.network'],
  },
  storagePath: './firefly-database', // local storage
});

export default wallet;
