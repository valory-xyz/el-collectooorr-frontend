import Web3 from 'web3';
import {
  BASKET_ADDRESS,
  BASKET_CONTRACT,
  VAULT_ADDRESS,
  VAULT_CONTRACT,
  ART_BLOCK_ADDRESS,
  ART_BLOCK_CONTRACT,
} from 'common-util/AbiAndAddresses';

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

export const getArtBlockContract = () => {
  window.ethereum.enable();
  const web3 = new Web3(window.web3.currentProvider);
  const contract = new web3.eth.Contract(
    ART_BLOCK_CONTRACT.abi,
    ART_BLOCK_ADDRESS,
  );
  return contract;
};
