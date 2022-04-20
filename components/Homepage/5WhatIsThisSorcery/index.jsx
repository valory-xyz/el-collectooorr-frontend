import React from 'react';
import Header from 'common-util/Header';
import { COLOR } from 'util/theme';
import useCheckMobileScreen from 'common-util/hooks/useCheckMobileScreen';
import { CustomButton } from 'common-util/Button';
import {
  btnStyle,
  HeaderContainer,
  SorceryBody,
  BodyRowOne,
  BodyRowTwo,
  SorceryFooter,
} from './styles';

const data = [
  {
    id: '001',
    name: '//001',
    nameStyle: { color: COLOR.GREEN_1 },
    desc: 'Dynamic events (new drops)',
  },
  {
    id: '002',
    name: '//002',
    nameStyle: { color: COLOR.GREEN_2 },
    desc: 'Make complex decisions based on changing information (what to buy and for how much?)',
  },
  {
    id: '003',
    name: '//003',
    nameStyle: { color: COLOR.BLUE },
    desc: 'Robustly manage on-chain funds: el collectooorr is secured by Gnosis Safe',
  },
];

const WhatIsThisSorcery = () => {
  const isMobile = useCheckMobileScreen();

  return (
    <>
      <HeaderContainer>
        {!isMobile && (
          <img
            src="/images/5WhatIsThisSorcery/header-left-icon.png"
            alt=""
            loading="lazy"
          />
        )}

        <Header className="header" title="WHAT IS THIS SORCERY?" />
        <img
          src="/images/5WhatIsThisSorcery/header-right-icon.png"
          alt=""
          loading="lazy"
        />
      </HeaderContainer>

      <SorceryBody>
        <div className="info-container">
          <BodyRowOne className="row">
            <div className="column column-1">
              <div className="text">
                TO WORK, EL COLLECTOOORR NEEDS TO WATCH FOR:
              </div>
            </div>
            {!isMobile && (
              <div className="column column-2">
                <img
                  src="/images/5WhatIsThisSorcery/top.png"
                  alt=""
                  loading="lazy"
                />
              </div>
            )}
          </BodyRowOne>

          <BodyRowTwo className="row">
            <div className="column column-1">
              {data.map(({
                id, name, desc, nameStyle,
              }) => (
                <div key={id}>
                  <span style={nameStyle}>{name}</span>
                  <span>{desc}</span>
                </div>
              ))}
            </div>
            {!isMobile && (
              <div className="column column-2">
                <img
                  src="/images/5WhatIsThisSorcery/bottom.png"
                  alt=""
                  loading="lazy"
                />
              </div>
            )}
          </BodyRowTwo>
        </div>

        <SorceryFooter>
          <div className="text">
            TO ACHIEVE THIS, EL COLLECTOOORR USES AUTONOMOUS OFF-CHAIN SERVICES,
            POWERED BY&nbsp;
            <a
              href="https://www.autonolas.network/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AUTONOLAS
            </a>
            . THIS HAS NEVER BEEN POSSIBLE BEFORE – EL COLLECTOOORR POINTS TO A
            FUNDAMENTALLY NEW PRIMITIVE IN CRYPTO.
          </div>

          <img
            src="/images/draw-right-arrow.png"
            alt=""
            loading="lazy"
            className="max-arrow"
          />

          {isMobile && (
            <img
              src="/images/horizontal-arrow.png"
              alt=""
              loading="lazy"
              height={10}
            />
          )}

          <div className="btn-container">
            <CustomButton
              type="primary"
              variant="green"
              style={btnStyle}
              onClick={() => window.open('https://www.autonolas.network/', 'target')}
            >
              LEARN MORE
            </CustomButton>
          </div>
        </SorceryFooter>
      </SorceryBody>
    </>
  );
};

export default WhatIsThisSorcery;
