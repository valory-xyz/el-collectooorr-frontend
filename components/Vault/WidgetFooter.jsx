/*
 * -------------------------------------------------------------------------------
 *
 * Copyright 2022 Valory AG
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * -------------------------------------------------------------------------------
 */

import { Fragment } from 'react';
import { Typography } from 'antd/lib';
import { ServiceStatusInfo } from '@autonolas/frontend-library';

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
    <ServiceStatusInfo
      extra={generateContent(PRICE_ORACLE_STATUS_INFO)}
      extraMd={generateContent(PRICE_ORACLE_STATUS_INFO_MOBILE)}
    />
  );
};

export default WidgetFooter;
