import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from '@web3modal/ethereum';
import { configureChains, createConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { SafeConnector } from 'wagmi/connectors/safe';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { rpc } from 'common-util/Contracts';

export const projectId = process.env.NEXT_PUBLIC_WALLET_PROJECT_ID;

const { publicClient, webSocketPublicClient, chains } = configureChains(
  [mainnet],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: rpc[chain.id],
      }),
    }),
    w3mProvider({ projectId }),
  ],
);

export const wagmiConfig = createConfig({
  autoConnect: true,
  logger: { warn: null },
  connectors: [
    ...w3mConnectors({
      projectId,
      version: 2, // v2 of wallet connect
      chains,
    }),
    new SafeConnector({
      chains,
      options: {
        allowedDomains: [/gnosis-safe.io$/, /app.safe.global$/],
        debug: false,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

export const ethereumClient = new EthereumClient(wagmiConfig, chains);
