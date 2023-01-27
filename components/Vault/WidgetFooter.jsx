import { Fragment } from 'react';
import { Typography } from 'antd/lib';
import { kebabCase } from 'lodash';
import styled from 'styled-components';
import { ServiceStatusInfo } from '@autonolas/frontend-library';
import { COLOR } from 'util/theme';

export const Div = styled.div`
  > .service-status-maximized {
    background-color: ${COLOR.BLACK};
  }
`;

export const ExtraContent = styled.div`
  display: flex;
  align-items: center;
  > div {
    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }
`;

const { Text } = Typography;

const getList = (myList) => myList.map(({ text, redirectTo, isInternal = true }, index) => (
  <Fragment key={kebabCase(text)}>
    <Text type="secondary">
      <a
        href={redirectTo}
        target={isInternal ? '_self' : '_blank'}
        rel="noreferrer"
      >
        {text}
      </a>

      {index !== myList.length - 1 && <>&nbsp;&nbsp;•&nbsp;&nbsp;</>}
    </Text>
  </Fragment>
));

const DOCS_URL = 'https://docs.autonolas.network/product/mintkit/';
const EL_COL_STATUS_INFO = [
  { text: 'Run demo code', redirectTo: `${DOCS_URL}#demo` },
  {
    text: 'Get help building',
    redirectTo: 'https://propel.valory.xyz',
    isInternal: false,
  },
];
const EL_COL_STATUS_INFO_MOBILE = [
  { text: 'Run Code', redirectTo: `${DOCS_URL}#demo` },
  {
    text: 'Get help',
    redirectTo: 'https://propel.valory.xyz',
    isInternal: false,
  },
];

const BuiltWith = (
  <>
    BUILT WITH&nbsp;
    <a href={DOCS_URL} rel="noreferrer">
      MINTKIT
    </a>
  </>
);

const WidgetFooter = () => (
  <Div>
    <ServiceStatusInfo
      extra={(
        <ExtraContent>
          {[
            {
              id: 'code',
              name: BuiltWith,
              list: EL_COL_STATUS_INFO,
            },
          ].map((e) => (
            <div key={e.id}>
              <div>
                <Text className="status-sub-header">{e.name}</Text>
              </div>
              <div className="status-sub-content">{getList(e.list)}</div>
            </div>
          ))}
        </ExtraContent>
      )}
      extraMd={getList(EL_COL_STATUS_INFO_MOBILE)}
    />
  </Div>
);

export default WidgetFooter;
