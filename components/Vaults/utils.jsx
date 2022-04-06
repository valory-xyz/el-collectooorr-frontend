import Web3 from 'web3';
import { getVaultContract } from 'common-util/Contracts';

export const getVaultInfo = () => new Promise((resolve, reject) => {
  const contract = getVaultContract();

  contract.methods
    .id()
    .call()
    .then(async (response) => {
      const name = await contract.methods.name().call();
      const reservePrice = await contract.methods.reservePrice().call();
      const isClosed = await contract.methods.vaultClosed().call();

      const vaultInfo = {
        id: response,
        name,
        reservePrice: Web3.utils.fromWei(reservePrice, 'ether'),
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
