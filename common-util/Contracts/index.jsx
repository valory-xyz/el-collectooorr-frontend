import Web3 from 'web3';
import {
  TOKEN_VAULT_ADDRESS,
  TOKEN_VAULT_CONTRACT,
  BASKET_ADDRESS,
  BASKET_CONTRACT,
} from 'common-util/AbiAndAddresses';

export const getBasketContract = () => {
  window.ethereum.enable();
  const web3 = new Web3(window.web3.currentProvider);
  const contract = new web3.eth.Contract(BASKET_CONTRACT.abi, BASKET_ADDRESS);
  return contract;
};

export const getTokenVaultContract = () => {
  window.ethereum.enable();
  const web3 = new Web3(window.web3.currentProvider);
  const contract = new web3.eth.Contract(
    TOKEN_VAULT_CONTRACT.abi,
    TOKEN_VAULT_ADDRESS,
  );
  return contract;
};
