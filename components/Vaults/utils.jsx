import Web3 from 'web3';
import round from 'lodash/round';
import { getVaultContract } from 'common-util/Contracts';

export const getVaultInfo = () => new Promise((resolve, reject) => {
  const contract = getVaultContract();

  contract.methods
    .token()
    .call()
    .then(async (response) => {
      const id = await contract.methods.id().call();
      const name = await contract.methods.name().call();
      const reservePrice = await contract.methods.reservePrice().call();
      const isClosed = await contract.methods.vaultClosed().call();
      const balanceInEther = Web3.utils.fromWei(reservePrice, 'ether');

      const vaultInfo = {
        token: response,
        id,
        name,
        reservePrice: round(balanceInEther, 2),
        isClosed,
      };
      resolve([vaultInfo]);
    })
    .catch((e) => {
      console.error(e);
      reject(e);
    });
});

export const getVaults = [];
