// utils/transactionStorage.js
import web3 from './web3';
// import TransactionStorage from '../../../blockchain/artifacts/contracts/TransactionStorage.sol/TransactionStorage.json';
import TransactionStorage from '../blockchain/artifacts/contracts/TransactionStorage.sol/TransactionStorage.json'

const address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const instance = new web3.eth.Contract(
  TransactionStorage.abi,
  address
);

export default instance;
