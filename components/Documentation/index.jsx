import { useState, useEffect } from 'react';
import { Collapse, Anchor } from 'antd/lib';
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
  const [activeNav, setActiveNav] = useState(null);
  const isMobile = useCheckMobileScreen();
  const firstKey = kebabCase(get(DOC_NAV, `[${0}].title`) || '');
  const anchorCommonProps = {
    affix: false,
    offsetTop: isMobile ? 20 : 120,
  };

  useEffect(() => {
    // on load, set first key as active & opened by default
    setActiveNav(firstKey);
  }, []);

  return (
    <Container>
      <SubHeaderSection />
      <DocumentationHeader isMobile={isMobile} />

      <DocSection>
        <div className="navigation-section">
          {DOC_NAV.map(({ id: key, title, subtitles }) => {
            const hasSubNav = subtitles.length !== 0;
            if (!hasSubNav) {
              return (
                <Anchor
                  {...anchorCommonProps}
                  key={key}
                  className={`custom-nav-anchor ${
                    key === activeNav ? 'custom-nav-anchor-active' : ''
                  }`}
                  onClick={() => setActiveNav(key)}
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
                /**
                 * e is an array of keys opened
                 * eg. e = ['key-of-tab-1', 'key-of-tab-2']
                 * and assign active-nav to the last opened tab
                 */
                onChange={(e) => setActiveNav(e[e.length - 1] || null)}
                className={
                  key === activeNav ? 'custom-ant-collapse-active' : ''
                }
              >
                <Panel
                  header={title}
                  key={key}
                  className={hasSubNav ? '' : 'no-sub-nav'}
                >
                  <Anchor
                    {...anchorCommonProps}
                    onClick={() => setActiveNav(key)}
                  >
                    {subtitles.map(({ name, id: subId }) => {
                      const subKey = subId || kebabCase(name);
                      return (
                        <Link key={subKey} href={`#${subKey}`} title={name} />
                      );
                    })}
                  </Anchor>
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
