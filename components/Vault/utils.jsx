import Web3 from 'web3';
import axios from 'axios';
import { ethers } from 'ethers';
import { notification } from 'antd/lib';
import {
  map, sortBy, toInteger, get,
} from 'lodash';
import { METAMASK_ERROR_MSG } from 'util/constants';
import { COLOR } from 'util/theme';
import { ARTBLOCKS_ADDRESS } from 'common-util/AbiAndAddresses/artBlocksContract';
import {
  getArtBlocksContract,
  getBasketContract,
  getBasketFactoryContract,
  getVaultContract,
  getVaultFactoryContract,
} from 'common-util/Contracts';
import { SAFE_CONTRACT_ADDRESS } from 'common-util/AbiAndAddresses';

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

// -------------- BASKET--------------
const handleNftData = (nfts, basketAddress) => nfts.map((nft) => {
  const txn = basketAddress; // the owner is always the basket
  return {
    url: nft.image,
    ...nft,
    txn,
  };
});

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
      (nft) => get(nft, 'returnValues.tokenId') === get(depositedNft, 'returnValues.tokenId'),
    );

    return !isWithdrawn;
  });

  return nfts;
};

/**
 * THIS FUNCTION SHOULD BE USED FOR DEMO PURPOSES ONLY!
 */
export const mockGetNfts = async (basketAddress) => {
  console.warn('mockGetNfts should only be used for demos.');
  const filteredNfts = await getFilteredNfts(basketAddress);

  return new Promise((resolve, reject) => {
    try {
      const promises = [];
      for (let i = 0; i < filteredNfts.length; i += 1) {
        const { tokenId } = filteredNfts[i].returnValues;
        const url = `https://token.artblocks.io/${tokenId}`;
        const result = getJsonData(url);
        promises.push(result);
      }

      Promise.all(promises)
        .then((list) => resolve(handleNftData(list, basketAddress)));
    } catch (error) {
      reject(error);
    }
  });
};

export const getNfts = async (basketAddress) => {
  const filteredNfts = await getFilteredNfts(basketAddress);

  return new Promise((resolve, reject) => {
    try {
      const promises = [];
      for (let i = 0; i < filteredNfts.length; i += 1) {
        const {
          token,
          tokenId,
        } = filteredNfts[i].returnValues;
        const currentContract = getArtBlocksContract(token);
        const result = currentContract.methods.tokenURI(tokenId)
          .call();
        promises.push(result);
      }

      Promise.all(promises)
        .then((list) => resolve(handleNftData(list, basketAddress)));
    } catch (error) {
      reject(error);
    }
  });
};


export const getNftsInfo = async (totalNft) => {
  const web3 = new Web3(window.web3.currentProvider);
  const contract = getBasketContract(ARTBLOCKS_ADDRESS);

  const blockNum = await web3.eth.getBlockNumber();
  const list = await contract.getPastEvents('Mint', {
    fromBlock: Math.max(0, blockNum - 10000),
  });

  const getMetadata = () => new Promise((resolve, reject) => {
    const artBlocksContract = getArtBlocksContract();
    try {
      const promises = [];
      for (let i = 0; i < totalNft; i += 1) {
        const { _projectId: pid } = list[i].returnValues;
        const result = artBlocksContract.methods.projectDetails(pid)
          .call();
        promises.push(result);
      }

      Promise.all(promises)
        .then(async (array) => {
          const results = await Promise.all(
            array.map(async (info, i) => {
              const { value } = await web3.eth.getTransaction(
                list[i].transactionHash,
              ); // wei
              const valueInEther = Web3.utils.fromWei(value, 'ether');

              return {
                artist: info.artist,
                bought: valueInEther,
                date: null,
                txn: list[i].transactionHash,
              };
            }),
          );
          resolve(results);
        });
    } catch (error) {
      reject(error);
    }
  });

  const data = await getMetadata();
  return data;
};

// -------------- VAULT --------------
export const getVaultStatus = (vaultAddress) => new Promise((resolve, reject) => {
  const contract = getVaultContract(vaultAddress);

  contract.methods
    .vaultClosed()
    .call()
    .then((response) => {
      resolve(response);
    })
    .catch((e) => {
      console.error(e);
      reject(e);
    });
});

export const getVaultReservePrice = (vaultAddress) => new Promise((resolve, reject) => {
  const contract = getVaultContract(vaultAddress);

  contract.methods
    .reservePrice()
    .call()
    .then((response) => {
      const inEth = Web3.utils.fromWei(response, 'ether');
      resolve(inEth);
    })
    .catch((e) => {
      console.error(e);
      reject(e);
    });
});

export const getVaultTotalSupply = (vaultAddress) => new Promise((resolve, reject) => {
  const contract = getVaultContract(vaultAddress);

  contract.methods
    .totalSupply()
    .call()
    .then((response) => {
      resolve(toInteger(response));
    })
    .catch((e) => {
      console.error(e);
      reject(e);
    });
});

export const getVaultSymbol = (vaultAddress) => new Promise((resolve, reject) => {
  const contract = getVaultContract(vaultAddress);

  contract.methods
    .symbol()
    .call()
    .then((response) => {
      resolve(response);
    })
    .catch((e) => {
      console.error(e);
      reject(e);
    });
});

export const getBalanceOf = (account, vaultAddress) => new Promise((resolve, reject) => {
  const contract = getVaultContract(vaultAddress);

  contract.methods
    .balanceOf(account)
    .call()
    .then((response) => {
      resolve(toInteger(response));
    })
    .catch((e) => {
      console.error(e);
      reject(e);
    });
});

export const getBasketAddress = (vaultAddress) => new Promise((resolve, reject) => {
  const contract = getVaultContract(vaultAddress);

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


// -------------- OTHERS --------------
const key = 'addFundsToast';

export const addFunds = async ({ ether }) => {
  try {
    if (!window.ethereum) {
      throw new Error(METAMASK_ERROR_MSG);
    }

    await window.ethereum.send('eth_requestAccounts');
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const tx = await signer.sendTransaction({
      to: SAFE_CONTRACT_ADDRESS,
      value: ethers.utils.parseEther(ether),
    });

    /**
     * toast will be shown if the transaction is in pending state
     */
    notification.warning({
      key,
      message: 'Transaction Pending',
      duration: null,
      style: { border: `1px solid ${COLOR.ANTD_ORANGE}` },
    });

    await tx.wait(); // await till the transaction is completed

    notification.success({
      key,
      message: 'Transaction Success',
      description: (
        <>
          {tx.hash}
          <br />
          <br />
          VLT token will arrive in minutes.
        </>
      ),
      duration: 5,
      style: { border: `1px solid ${COLOR.PRIMARY}` },
    });
  } catch (error) {
    console.error(error);
    notification.error({
      key,
      message: 'Error',
      description: error.message,
      style: { border: `1px solid ${COLOR.RED}` },
    });
  }
};

/*
* Function to get the latest vault & basket created by the safe contract.
* We can make use of indexed event parameters to achieve this.
*
* - Premises:
* 1. Baskets are created by the SAFE_CONTRACT_ADDRESS.
* 2. Vaults make use of baskets.
* 3. Baskets must not be reassigned to different vaults.
*
* - Algorithm:
* 1. Find the baskets created by the SAFE_CONTRACT_ADDRESS, by making use of the indexed
* '_creator' param.
* 2. Get the newest basket.
* 3. Get the vault that have the newest basket, by making use of the indexed 'token' param.
* */
export const getLatestVaultAndBasket = async () => {
  const basketFactoryContract = getBasketFactoryContract();
  const newBasketEvents = await basketFactoryContract.getPastEvents('NewBasket', {
    filter: {
      _creator: SAFE_CONTRACT_ADDRESS,
    },
    fromBlock: 'earliest',
  });
  // eslint-disable-next-line no-underscore-dangle
  const latestBasketAddress = (newBasketEvents[newBasketEvents.length - 1]).returnValues._address;

  const vaultFactoryContract = getVaultFactoryContract();
  const newVaultEvents = await vaultFactoryContract.getPastEvents('Mint', {
    filter: {
      token: latestBasketAddress,
    },
    fromBlock: 'earliest',
  });
  const latestVaultAddress = newVaultEvents[0].returnValues.vault;

  return {
    latestVaultAddress,
    latestBasketAddress,
  };
};
