import { Fragment } from 'react';
import { Typography } from 'antd/lib';
import styled from 'styled-components';
import { ServiceStatusInfo } from '@autonolas/frontend-library';
import { COLOR } from 'util/theme';

export const Div = styled.div`
  > div {
    background-color: ${COLOR.BLACK};
    left: 0;
    right: 0;
  }
`;

const DotSpace = () => <>&nbsp;&nbsp;•&nbsp;&nbsp;</>;

const { Text } = Typography;

const PRICE_DOCS = 'https://docs.autonolas.network/product/price-oracle';
const PRICE_ORACLE_STATUS_INFO = [
  { name: 'What is this?', link: PRICE_DOCS },
  { name: 'Run the Code', link: `${PRICE_DOCS}#run-the-code` },
  { name: 'Build your own', link: `${PRICE_DOCS}#build-your-own` },
];
const PRICE_ORACLE_STATUS_INFO_MOBILE = [
  { name: 'Run Code', link: `${PRICE_DOCS}#run-the-code` },
  { name: 'Build', link: `${PRICE_DOCS}#build-your-own` },
];

const WidgetFooter = () => {
  const generateContent = (contentList) => contentList.map((contract, index) => (
    <Fragment key={contract.link}>
      <Text type="secondary" className="row-2">
        <a href={contract.link} target="_blank" rel="noopener noreferrer">
          {contract.name}
        </a>
      </Text>
      {contentList.length - 1 !== index && <DotSpace />}
    </Fragment>
  ));

  return (
    <Div>
      <ServiceStatusInfo
        extra={generateContent(PRICE_ORACLE_STATUS_INFO)}
        extraMd={generateContent(PRICE_ORACLE_STATUS_INFO_MOBILE)}
      />
    </Div>
  );
};

export default WidgetFooter;
