import React from 'react';
import Header from 'common-util/Header';
import { Container, EachDiv } from './styles';

const data = [
  {
    id: 'how-it-works-1',
    name: '//001',
    desc: 'Deposit ETH into current vault',
    imageUrl: '/images/4HowItWorks/how-it-works-icon-1.png',
    className: '',
  },
  {
    id: 'how-it-works-2',
    name: '//002',
    desc: 'You receive fractional tokens of vault',
    imageUrl: '/images/4HowItWorks/how-it-works-icon-2.png',
    className: '',
  },
  {
    id: 'how-it-works-3',
    name: '//003',
    desc: 'El Collectooorr collects works as Art Blocks drops happen',
    imageUrl: '/images/4HowItWorks/how-it-works-icon-3.png',
    className: '',
  },
  {
    id: 'how-it-works-4',
    name: '//004',
    desc: 'Works are added to a Fractional vault',
    imageUrl: '/images/4HowItWorks/how-it-works-icon-4.png',
    className: '',
  },
  {
    id: 'how-it-works-5',
    name: '//005',
    desc: 'Vault closes – you can vote on what happens to the vault',
    imageUrl: '/images/4HowItWorks/how-it-works-icon-5.png',
    className: '',
  },
  {
    id: 'how-it-works-6',
    name: '//006',
    desc: 'Deposit ETH into the next vault!',
    imageUrl: '/images/4HowItWorks/how-it-works-icon-6.png',
    className: '',
  },
];

const HowItWorks = () => (
  <Container>
    <div className="header-container">
      <Header className="header" title="HOW IT WORKS" />
      <img src="/images/horizontal-arrow.png" alt="" loading="lazy" height={10} />
      <img src="/images/4HowItWorks/red-element-how-it-works.png" alt="" loading="lazy" />
    </div>

    <div className="how-it-works-row">
      {data.map(({
        id, name, desc, className, imageUrl,
      }, index) => (
        <EachDiv key={id} className={`how-it-works-${index + 1} ${className}`}>
          <div className="row-1">
            <div className="name">{name}</div>
          </div>
          <div className="row-2">
            <div className="image-container">
              <img src={imageUrl} alt={`${name}`} loading="lazy" />
            </div>
            <div className="desc">{desc}</div>
          </div>
        </EachDiv>
      ))}
    </div>
  </Container>
);

export default HowItWorks;
