import React from 'react';
import Header from 'common-util/Header';
import { Container, EachBenefit } from './styles';

const data = [
  {
    id: 'benefits-1',
    name: 'DON’T MISS ANOTHER DROP',
    desc: 'No more late nights, setting alarms or rushing to get online in time to grab a drop – El Collectooorr is always ready.',
    className: 'benefit-1',
    imageUrl: '/images/3Benefits/benefits-icon-1.png',
  },
  {
    id: 'benefits-2',
    name: 'SHARE THE COST',
    desc: 'El Collectooorr pools your funds with other collectors, keeping minting costs down.',
    className: 'benefit-2',
    imageUrl: '/images/3Benefits/benefits-icon-2.png',
  },
  {
    id: 'benefits-3',
    name: 'BROADEN YOUR EXPOSURE',
    desc: 'Collect fractions of collections, instead of costly individual pieces – build your collection of new and interesting long-form generative art.',
    className: 'benefit-3',
    imageUrl: '/images/3Benefits/benefits-icon-3.png',
  },
  {
    id: 'benefits-4',
    name: 'SMART BUY',
    desc: 'El Collectooorr knows its stuff. The algorithm allows buying into the best collections at the best auction prices.',
    className: 'benefit-4',
    imageUrl: '/images/3Benefits/benefits-icon-4.png',
  },
];
const Benefits = () => (
  <Container>
    <div className="header-container">
      <Header className="header" title="BENEFITS" />
      <img src="/images/horizontal-arrow.png" alt="" loading="lazy" />
    </div>

    <div className="benefits-row">
      {data.map(({
        id, name, desc, className, imageUrl,
      }) => (
        <EachBenefit key={id} className={className}>
          <div className="image-container">
            <img src={imageUrl} alt={`${name}`} loading="lazy" />
          </div>
          <div className="name">{name}</div>
          <div className="desc">{desc}</div>
        </EachBenefit>
      ))}
    </div>
  </Container>
);

export default Benefits;
