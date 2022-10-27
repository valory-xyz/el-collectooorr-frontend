import styled from 'styled-components';
import { COLOR, MEDIA_QUERY } from 'util/theme';
import { Anchor } from 'common-util/components';

const RiskContainer = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  line-height: normal;
  font-size: 28px;
  font-family: "spacegrotesk__medium", sans-serif;
  border-radius: 10px;
  background-color: ${COLOR.RED};
  > a {
    color: inherit !important;
  }

  ${MEDIA_QUERY.tabletL} {
    font-size: 24px;
  }

  ${MEDIA_QUERY.tablet} {
    font-size: 20px;
  }
`;

const RiskBanner = () => (
  <RiskContainer>
    !!! THIS PRODUCT IS IN BETA.
    <Anchor
      url="https://drive.google.com/file/d/1FflvGI089u0_zzrK3CMIHnyPYQ22uT7-/view"
      text="DEPOSIT FUNDS AT YOUR OWN RISK."
      hasSpaceSuffix
    />
    UNAUDITED PRODUCT !!!
  </RiskContainer>
);

export default RiskBanner;
