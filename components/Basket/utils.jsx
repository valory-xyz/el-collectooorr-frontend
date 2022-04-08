import { getBasketContract } from 'common-util/Contracts';
import { toNumber, sortBy, map } from 'lodash';
import axios from 'axios';

export const sortByKeys = (object) => {
  const keys = Object.keys(object);
  const sortedKeys = sortBy(keys);
  return map(sortedKeys, (key) => [key, object[key]]);
};

/*
export const dummyData = () => new Promise((resolve, reject) => {
  try {
    const results = Promise.all(
      [...Array(10).keys()].map(async (_e, index) => {
        const id = `${index + 1}`;
        const response = await axios.get(
          `https://kinesis.art/api/metadata/${id}`,
        );
        return response.data;
      }),
    );
    resolve(results);
  } catch (error) {
    reject(error);
  }
});
*/

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

export const getBaskets = () => new Promise((resolve, reject) => {
  const contract = getBasketContract();

  contract.methods
    .totalSupply()
    .call()
    .then(async (total) => {
      const maxUriToShow = Math.min(toNumber(total), 10);

      const results = await Promise.all(
        [...Array(maxUriToShow).keys()].map(async (_e, index) => {
          const id = `${index + 1}`;
          const urlToFetchMetadata = await getTokenUri(id);
          const data = await getJsonData(urlToFetchMetadata);
          return data;
        }),
      );

      const sortedResult = sortByKeys({ ...results }).map((e) => e[1]);
      resolve(sortedResult);
    })
    .catch((e) => {
      console.error(e);
      reject(e);
    });

  return null;
});
