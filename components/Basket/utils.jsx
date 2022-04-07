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

export const getBaskets = async (basketToken) => {
  const contract = getBasketContract(basketToken);
  const depositedNfts = await contract.getPastEvents('DepositERC721', {
    fromBlock: 0,
    toBlock: 'latest',
  });

  const withdrawnNfts = await contract.getPastEvents('WithdrawERC721', {
    fromBlock: 0,
    toBlock: 'latest',
  });

  const filteredNts = depositedNfts.filter((depositedNft) => {
    const isWithdrawn = withdrawnNfts.find(
      (nft) => nft.returnValues.tokenId === depositedNft.returnValues.tokenId,
    );

    return !isWithdrawn;
  });

  return new Promise((resolve, reject) => {
    try {
      const promises = [];
      for (let i = 0; i < filteredNts.length; i += 1) {
        const { token, tokenId } = filteredNts[i].returnValues;
        const currentContract = getBasketContract(token);
        const result = currentContract.methods.tokenURI(tokenId).call();
        promises.push(result);
      }

      Promise.all(promises).then(async (list) => {
        const results = await Promise.all(
          list.map(async (url) => {
            const result = await getJsonData(url);
            return result;
          }),
        );
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
};
