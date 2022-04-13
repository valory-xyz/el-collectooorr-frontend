import React from 'react';
import Header from 'common-util/Header';
import { Container, EachDiv } from './styles';

const data = [
  {
    id: 'how-it-works-1',
    name: '//001',
    desc: 'Deposit ETH into current vault',
    imageUrl: '/images/benefit_dummy.png',
    className: '',
  },
  {
    id: 'how-it-works-2',
    name: '//002',
    desc: 'You receive fractional tokens of vault',
    imageUrl: '/images/benefit_dummy.png',
    className: '',
  },
  {
    id: 'how-it-works-3',
    name: '//003',
    desc: 'El Collectooorr collects works as Art Blocks drops happen',
    imageUrl: '/images/benefit_dummy.png',
    className: '',
  },
  {
    id: 'how-it-works-4',
    name: '//004',
    desc: 'Works are added to a Fractional vault',
    imageUrl: '/images/benefit_dummy.png',
    className: '',
  },
  {
    id: 'how-it-works-5',
    name: '//005',
    desc: 'Vault closes – you can vote on what happens to the vault',
    imageUrl: '/images/benefit_dummy.png',
    className: '',
  },
  {
    id: 'how-it-works-6',
    name: '//006',
    desc: 'Deposit ETH into the next vault!',
    imageUrl: '/images/benefit_dummy.png',
    className: '',
  },
];

const HowItWorks = () => (
  <Container>
    <Header className="header" title="HOW IT WORKS" />

    <div className="how-it-works-row">
      {data.map(({
        id, name, desc, className, imageUrl,
      }, index) => (
        <EachDiv key={id} className={`how-it-works-${index + 1} ${className}`}>
          <div className="row-1">
            <div className="name">{name}</div>
          </div>
          <div className="row-2">
            <img src={imageUrl} alt={`${name}`} loading="lazy" />
            <div className="desc">{desc}</div>
          </div>
        </EachDiv>
      ))}
    </div>
  </Container>
);

export default HowItWorks;
