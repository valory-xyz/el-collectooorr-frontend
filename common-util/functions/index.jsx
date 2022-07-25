/* eslint-disable jsx-a11y/anchor-is-valid */
import Web3 from 'web3';
import Link from 'next/link';
import { CONSTANTS } from 'util/constants';

export const getBalance = (account) => new Promise((resolve, reject) => {
  window.ethereum
    .request({
      method: CONSTANTS.ETH_GETBALANCE,
      params: [account, 'latest'],
    })
    .then((b) => {
      const balanceInEther = Web3.utils.fromWei(b, 'ether');
      resolve(balanceInEther);
    })
    .catch((e) => {
      reject(e.message);
    });
});

export const getRedirect = (text, link, isNewTab = true) => (
  <Link href={link} passHref>
    <a
      href={link}
      target={isNewTab ? '_target' : '_self'}
      rel="noopener noreferrer"
    >
      {text}
    </a>
  </Link>
);
