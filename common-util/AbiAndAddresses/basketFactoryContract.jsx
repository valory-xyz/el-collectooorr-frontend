export const BASKET_FACTORY_ADDRESS = '0xde771104C0C44123d22D39bB716339cD0c3333a1';

export const BASKET_FACTORY_CONTRACT = {
  abi: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: '_address',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: '_creator',
          type: 'address',
        },
      ],
      name: 'NewBasket',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'baskets',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'createBasket',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
};
