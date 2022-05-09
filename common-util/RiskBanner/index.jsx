import styled from 'styled-components';
import { COLOR, MEDIA_QUERY } from 'util/theme';

const RiskContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  line-height: normal;
  font-size: 36px;
  font-family: "spacegrotesk__medium";
  border-radius: 10px;
  background-color: ${COLOR.RED};

  ${MEDIA_QUERY.tabletL} {
    font-size: 24px;
  }

  ${MEDIA_QUERY.tablet} {
    font-size: 20px;
  }
`;

const RiskBanner = () => (
  <RiskContainer>
    !!! DEPOSIT FUNDS AT YOUR OWN RISK. UNAUDITED PRODUCT !!!
  </RiskContainer>
);

export default RiskBanner;
