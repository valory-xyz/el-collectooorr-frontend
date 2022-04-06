import { getBasketContract } from 'common-util/Contracts';
import { sortBy, map } from 'lodash';
import axios from 'axios';

export const sortByKeys = (object) => {
  const keys = Object.keys(object);
  const sortedKeys = sortBy(keys);
  return map(sortedKeys, (key) => [key, object[key]]);
};

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

export const getBaskets = async (token) => new Promise((resolve, reject) => {
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
