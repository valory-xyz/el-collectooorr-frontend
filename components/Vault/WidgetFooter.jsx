import { Fragment } from 'react';
import { Typography } from 'antd/lib';
import styled from 'styled-components';
import { ServiceStatusInfo } from '@autonolas/frontend-library';
import { COLOR } from 'util/theme';

export const Div = styled.div`
  > .serive-status-maximized {
    background-color: ${COLOR.BLACK};
  }
`;

const DotSpace = () => <>&nbsp;&nbsp;•&nbsp;&nbsp;</>;

const { Text } = Typography;

const DOCS_URL = 'https://docs.autonolas.network/product/el-collectooorr';
const EL_COL_STATUS_INFO = [
  { name: 'What is this?', link: DOCS_URL },
  { name: 'Run the Code', link: `${DOCS_URL}#run-the-code` },
  { name: 'Build your own', link: `${DOCS_URL}#build-your-own` },
];
const EL_COL_STATUS_INFO_MOBILE = [
  { name: 'Run Code', link: `${DOCS_URL}#run-the-code` },
  { name: 'Build', link: `${DOCS_URL}#build-your-own` },
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
        extra={generateContent(EL_COL_STATUS_INFO)}
        extraMd={generateContent(EL_COL_STATUS_INFO_MOBILE)}
      />
    </Div>
  );
};

export default WidgetFooter;
