import { getBasketContract, getVaultContract } from 'common-util/Contracts';
import { sortBy, map } from 'lodash';
import axios from 'axios';
import Web3 from 'web3';

export const sortByKeys = (object) => {
  const keys = Object.keys(object);
  const sortedKeys = sortBy(keys);
  return map(sortedKeys, (key) => [key, object[key]]);
};

export const getVault = () => new Promise((resolve, reject) => {
  const contract = getVaultContract();

  contract.methods
    .id()
    .call()
    .then((response) => {
      resolve(response);
    })
    .catch((e) => {
      console.error(e);
      reject(e);
    });
});

export const getReservePrice = () => new Promise((resolve, reject) => {
  const contract = getVaultContract();

  contract.methods
    .reservePrice()
    .call()
    .then((response) => {
      const inEther = Web3.utils.fromWei(response, 'ether');
      resolve(inEther);
    })
    .catch((e) => {
      console.error(e);
      reject(e);
    });
});

// helper functions for fetching NFT
export const getJsonData = (url) => new Promise((resolve, reject) => {
  axios
    .get(url)
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => {
      reject(error);
    });
});

export const getToken = () => new Promise((resolve, reject) => {
  const contract = getBasketContract();

  contract.methods
    .token()
    .call()
    .then((response) => {
      resolve(response);
    })
    .catch((e) => {
      console.error(e);
      reject(e);
    });
});

export const getTokenUri = (id) => new Promise((resolve, reject) => {
  const contract = getBasketContract();

  contract.methods
    .tokenURI(id)
    .call()
    .then((response) => {
      resolve(response);
    })
    .catch((e) => {
      console.error(e);
      reject(e);
    });
});

export const getBaskets = async () => {
  const token = await getVault();

  return new Promise((resolve, reject) => {
    const contract = getBasketContract();
    contract.methods
      .tokenURI(token)
      .call()
      .then(async (response) => {
        const data = await getJsonData(response);
        resolve([data]);
      })
      .catch((e) => {
        console.error(e);
        reject(e);
      });
  });
};
