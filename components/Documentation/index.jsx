import { useState, useEffect } from 'react';
import { Skeleton, Collapse, Anchor } from 'antd/lib';
import { kebabCase, get } from 'lodash';
import Header from 'common-util/Header';
import useCheckMobileScreen from 'common-util/hooks/useCheckMobileScreen';
import { SubHeaderSection } from '../Homepage/0Header';
import WhatIsElCol from './1_WhatIsElCol';
import UserFlow from './2_UserFlow';
import Collections from './3_Collections';
import CollectionFractions from './4_CollectionFractions';
import ManagementFee from './5_ManagementFee';
import TechnicalArchitecture from './6_TechnicalArchitecture';
import { DOC_NAV } from './constants';
import { Container, DocNavigation, DocSection } from './styles';

const { Link } = Anchor;
const { Panel } = Collapse;

const Documentation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useCheckMobileScreen();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Skeleton active />;
  }

  const firstKey = kebabCase(get(DOC_NAV, `[${0}].title`) || '');

  return (
    <Container>
      <SubHeaderSection />

      <div className="header-container">
        <Header className="header" title="DOCUMENTATION" />
        <img src="/images/horizontal-arrow.png" alt="" loading="lazy" />
        {!isMobile && (
          <img src="/images/horizontal-arrow.png" alt="" loading="lazy" />
        )}
      </div>
      <br />

      <DocSection>
        <div className="navigation-section">
          <DocNavigation
            defaultActiveKey={[firstKey]}
            ghost
            // expandIcon={() => null}
            expandIconPosition="right"
          >
            {DOC_NAV.map(({ title, subtitles }) => {
              const key = kebabCase(title);
              const hasSubNav = subtitles.length !== 0;
              return (
                <Panel
                  header={title}
                  key={key}
                  className={hasSubNav ? '' : 'no-sub-nav'}
                >
                  {hasSubNav && (
                    <Anchor affix={false} offsetTop={isMobile ? 20 : 120}>
                      {subtitles.map(({ name, id }) => {
                        const subKey = id || kebabCase(name);
                        return <Link href={`#${subKey}`} title={name} />;
                      })}
                    </Anchor>
                  )}
                </Panel>
              );
            })}
          </DocNavigation>
        </div>

        <div className="reading-section">
          <WhatIsElCol />
          <UserFlow />
          <Collections />
          <CollectionFractions />
          <ManagementFee />
          <TechnicalArchitecture />
        </div>
      </DocSection>
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
};

export default Documentation;
