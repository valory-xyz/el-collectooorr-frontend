import PropTypes from 'prop-types';
import Header from 'common-util/Header';
import { HeaderContainer } from './styles';

/**
 * navigation titles
 */
export const DOC_NAV = [
  {
    id: 'section-what-is-el-col',
    title: 'What is el collectooorr',
    subtitles: [
      { id: 'user-benefits', name: 'User Benefits' },
      { id: 'time-and-effort-saved', name: 'Time and effort saved' },
      {
        id: 'making-nft-art-collecting-more-accessible',
        name: 'Making NFT art collecting more accessible',
      },
      {
        id: 'broadening-users-nft-exposure',
        name: 'Broadening users’ NFT exposure',
      },
    ],
  },
  {
    id: 'section-user-flow',
    title: 'User Flow',
    subtitles: [],
  },
  {
    id: 'section-collections',
    title: 'Collections',
    subtitles: [],
  },
  {
    id: 'section-collection-fractions',
    title: 'Collection tokens',
    subtitles: [],
  },
  {
    id: 'section-management-fee',
    title: 'Management Fee',
    subtitles: [],
  },
  {
    id: 'section-technical-architecture',
    title: 'Technical Architecture',
    subtitles: [
      { id: 'on-chain-components', name: 'On-chain components' },
      { id: 'gnosis-safe', name: 'Gnosis Safe' },
      { id: 'art-blocks', name: 'Art Blocks ' },
      { id: 'fractional', name: 'Fractional' },
      {
        id: 'autonomous-service-autonolas',
        name: 'Autonomous Service: Autonolas',
      },
      { id: 'funding-abci-app', name: 'Funding ABCI App' },
      { id: 'minter-abci-app', name: 'Minter ABCI App ' },
      { id: 'fractional-abci-app', name: 'Fractional ABCI App' },
      { id: 'autonolas-agent-operators', name: 'Autonolas Agent Operators' },
    ],
  },
];

/**
 * Documentation Header
 */
export const DocumentationHeader = ({ isMobile }) => (
  <HeaderContainer>
    <div>
      <Header className="header" title="DOCUMENTATION" />
      <img src="/images/horizontal-arrow.png" alt="" loading="lazy" />
      {!isMobile && (
        <img src="/images/horizontal-arrow.png" alt="" loading="lazy" />
      )}
    </div>

    <div>
      <img
        src="/images/Documentation/documentation.png"
        alt=""
        loading="lazy"
        width={174}
      />
    </div>
  </HeaderContainer>
);

DocumentationHeader.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
