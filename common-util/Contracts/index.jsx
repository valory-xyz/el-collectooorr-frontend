import Web3 from 'web3';
import {
  BASKET_ADDRESS,
  BASKET_CONTRACT,
  VAULT_ADDRESS,
  VAULT_CONTRACT,
  ARTBLOCK_ADDRESS,
  ARTBLOCK_CONTRACT,
} from 'common-util/AbiAndAddresses';

export const getArtblockContract = (address = ARTBLOCK_ADDRESS) => {
  window.ethereum.enable();
  const web3 = new Web3(window.web3.currentProvider);
  const contract = new web3.eth.Contract(ARTBLOCK_CONTRACT.abi, address);
  return contract;
};

export const getBasketContract = (basketAddress = BASKET_ADDRESS) => {
  window.ethereum.enable();
  const web3 = new Web3(window.web3.currentProvider);
  const contract = new web3.eth.Contract(BASKET_CONTRACT.abi, basketAddress);
  return contract;
};

export const getVaultContract = () => {
  window.ethereum.enable();
  const web3 = new Web3(window.web3.currentProvider);
  const contract = new web3.eth.Contract(VAULT_CONTRACT.abi, VAULT_ADDRESS);
  return contract;
};
