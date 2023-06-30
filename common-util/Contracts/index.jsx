import Web3 from 'web3';
import {
  BASKET_ADDRESS,
  BASKET_CONTRACT,
  VAULT_ADDRESS,
  VAULT_CONTRACT,
  ARTBLOCKS_ADDRESS,
  ARTBLOCKS_CONTRACT,
  BASKET_FACTORY_ADDRESS,
  BASKET_FACTORY_CONTRACT,
  VAULT_FACTORY_ADDRESS,
  VAULT_FACTORY_CONTRACT,
  SAFE_CONTRACT_ADDRESS,
  SAFE_CONTRACT,
} from 'common-util/AbiAndAddresses';

export const getSafeContract = (address = SAFE_CONTRACT_ADDRESS) => {
  const web3 = new Web3(window.web3.currentProvider);
  const contract = new web3.eth.Contract(SAFE_CONTRACT.abi, address);
  return contract;
};

export const getArtBlocksContract = (address = ARTBLOCKS_ADDRESS) => {
  const web3 = new Web3(window.web3.currentProvider);
  const contract = new web3.eth.Contract(ARTBLOCKS_CONTRACT.abi, address);
  return contract;
};

export const getBasketContract = (basketAddress = BASKET_ADDRESS) => {
  const web3 = new Web3(window.web3.currentProvider);
  const contract = new web3.eth.Contract(BASKET_CONTRACT.abi, basketAddress);
  return contract;
};

export const getBasketFactoryContract = (basketFactoryContract = BASKET_FACTORY_ADDRESS) => {
  const web3 = new Web3(window.web3.currentProvider);
  const contract = new web3.eth.Contract(BASKET_FACTORY_CONTRACT.abi, basketFactoryContract);
  return contract;
};

export const getVaultContract = (vaultAddress = VAULT_ADDRESS) => {
  const web3 = new Web3(window.web3.currentProvider);
  const contract = new web3.eth.Contract(VAULT_CONTRACT.abi, vaultAddress);
  return contract;
};

export const getVaultFactoryContract = (vaultFactoryAddress = VAULT_FACTORY_ADDRESS) => {
  const web3 = new Web3(window.web3.currentProvider);
  const contract = new web3.eth.Contract(VAULT_FACTORY_CONTRACT.abi, vaultFactoryAddress);
  return contract;
};

export const rpc = {
  1: process.env.NEXT_PUBLIC_MAINNET_URL,
};
