export const BASKET_FACTORY_ADDRESS = '0x9623B3C78e77Ea8c1A544cB73108B04787f96b08';

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
