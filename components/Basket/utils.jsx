import { getBasketContract, getVaultContract } from 'common-util/Contracts';
import { sortBy, map } from 'lodash';
import axios from 'axios';

export const sortByKeys = (object) => {
  const keys = Object.keys(object);
  const sortedKeys = sortBy(keys);
  return map(sortedKeys, (key) => [key, object[key]]);
};

// helper functions for fetching NFT
const getJsonData = (url) => new Promise((resolve, reject) => {
  axios
    .get(url)
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => {
      reject(error);
    });
});

const getOwnerOf = (token, id) => new Promise((resolve, reject) => {
  const contract = getBasketContract(token);

  contract.methods
    .ownerOf(id)
    .call()
    .then((response) => {
      resolve(response);
    })
    .catch((e) => {
      console.error(e);
      reject(e);
    });
});

// -------------- BASKET--------------
const getFilteredNfts = async (basketToken) => {
  const contract = getBasketContract(basketToken);
  const depositedNfts = await contract.getPastEvents('DepositERC721', {
    fromBlock: 0,
    toBlock: 'latest',
  });

  const withdrawnNfts = await contract.getPastEvents('WithdrawERC721', {
    fromBlock: 0,
    toBlock: 'latest',
  });

  const nfts = depositedNfts.filter((depositedNft) => {
    const isWithdrawn = withdrawnNfts.find(
      (nft) => nft.returnValues.tokenId === depositedNft.returnValues.tokenId,
    );

    return !isWithdrawn;
  });

  return nfts;
};

export const getBaskets = async (basketToken) => {
  const filteredNfts = getFilteredNfts(basketToken);

  return new Promise((resolve, reject) => {
    try {
      const promises = [];
      for (let i = 0; i < filteredNfts.length; i += 1) {
        const { token, tokenId } = filteredNfts[i].returnValues;
        const currentContract = getBasketContract(token);
        const result = currentContract.methods.tokenURI(tokenId).call();
        promises.push(result);
      }

      Promise.all(promises).then(async (list) => {
        const results = await Promise.all(
          list.map(async (url, i) => {
            const { token, tokenId } = filteredNfts[i].returnValues;
            const result = await getJsonData(url);
            const txn = await getOwnerOf(token, tokenId);
            return { ...result, txn };
          }),
        );
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
};

// -------------- VAULT --------------
export const getInfo = (functionName) => new Promise((resolve, reject) => {
  const contract = getVaultContract();

  contract.methods[functionName()]
    .call()
    .then((response) => {
      resolve(response);
    })
    .catch((e) => {
      console.error(e);
      reject(e);
    });
});

export const getVaultStatus = () => new Promise((resolve, reject) => {
  const contract = getVaultContract();

  contract.methods
    .auctionState()
    .call()
    .then((response) => {
      resolve(response);
    })
    .catch((e) => {
      console.error(e);
      reject(e);
    });
});

// export const getVaultReservePrice = () => new Promise((resolve, reject) => {
//   const contract = getVaultContract();

//   contract.methods
//     .reservePrice()
//     .call()
//     .then((response) => {
//       resolve(response);
//     })
//     .catch((e) => {
//       console.error(e);
//       reject(e);
//     });
// });

export const getVaultReservePrice = () => getInfo('reservePrice');
