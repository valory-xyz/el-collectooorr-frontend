import { useState, useEffect } from 'react';
import { Skeleton, Collapse, Anchor } from 'antd/lib';
import { kebabCase, get } from 'lodash';
import useCheckMobileScreen from 'common-util/hooks/useCheckMobileScreen';
import { SubHeaderSection } from '../Homepage/0Header';
import WhatIsElCol from './content/1_WhatIsElCol';
import UserFlow from './content/2_UserFlow';
import Collections from './content/3_Collections';
import CollectionFractions from './content/4_CollectionFractions';
import ManagementFee from './content/5_ManagementFee';
import TechnicalArchitecture from './content/6_TechnicalArchitecture';
import { DOC_NAV, DocumentationHeader } from './helpers';
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
      <DocumentationHeader isMobile={isMobile} />

      <DocSection>
        <div className="navigation-section">
          {DOC_NAV.map(({ title, subtitles }) => {
            const key = kebabCase(title);
            const hasSubNav = subtitles.length !== 0;
            if (!hasSubNav) {
              return (
                <Anchor
                  affix={false}
                  key={key}
                  offsetTop={isMobile ? 20 : 120}
                  className="custom-nav-anchor"
                >
                  <Link href={`#${key}`} title={title} />
                </Anchor>
              );
            }

            return (
              <DocNavigation
                defaultActiveKey={[firstKey]}
                key={`navigation-${key}`}
                ghost
                expandIconPosition="right"
              >
                <Panel
                  header={title}
                  key={key}
                  className={hasSubNav ? '' : 'no-sub-nav'}
                >
                  {hasSubNav && (
                    <Anchor affix={false} offsetTop={isMobile ? 20 : 120}>
                      {subtitles.map(({ name, id }) => {
                        const subKey = id || kebabCase(name);
                        return <Link key={subKey} href={`#${subKey}`} title={name} />;
                      })}
                    </Anchor>
                  )}
                </Panel>
              </DocNavigation>
            );
          })}
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
