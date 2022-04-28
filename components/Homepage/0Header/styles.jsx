import styled from 'styled-components';
import { COLOR, MEDIA_QUERY } from 'util/theme';
import { MetamaskContainer } from 'components/Login/styles';

export const getBtnStyle = (isMob) => {
  const style = {
    borderRadius: '0 20px 20px 0',
    width: '216px',
    height: 'auto',
  };

  if (isMob) {
    return {
      ...style,
      width: 'auto',
      padding: '6px 12px',
    };
  }

  return style;
};

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: 1px solid ${COLOR.GREY_1};
  background-color: ${COLOR.BLACK};
  ${MEDIA_QUERY.tablet} {
    margin-bottom: 0;
    .column-1 {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 16px;
    }
  }

  /* nav-bar for pages except landing-page */
  ${MEDIA_QUERY.mobileL} {
    margin-bottom: 0;
    .column-1 {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 16px;
    }
    &.not-root-page {
      flex-direction: column;
      .column-1 {
        flex-direction: row;
        align-items: center;
      }
      ${MetamaskContainer} {
        flex-direction: row;
        .dash {
          display: block;
          margin-top: -4px;
        }
      }
    }
  }
`;

export const RiskContainer = styled.div`
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

export const SubHeaderContainer = styled.div`
  padding: 0.5rem 1rem 0.25rem 1rem;
  margin-bottom: 1rem;
  font-family: "minecraft";
  font-size: 18px;
  border-radius: 10px;
  border: 1px solid ${COLOR.GREY_1};
  background-color: ${COLOR.BLACK};

  ${MEDIA_QUERY.tablet} {
    font-size: 14px;
  }
`;
