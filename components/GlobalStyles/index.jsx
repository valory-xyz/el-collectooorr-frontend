import { createGlobalStyle } from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';

// const GlobalStyles = styled.div`
const GlobalStyle = createGlobalStyle`
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  /* common */
  .mb-8 {
    margin-bottom: 0.5rem;
  }

  .show-only-sm {
    display: none;
  }
  .hide-only-sm {
    display: initial;
  }
  ${MEDIA_QUERY.mobileL} {
    .show-only-sm {
      display: initial;
    }
    .hide-only-sm {
      display: none;
    }
  }
`;

export default GlobalStyle;
