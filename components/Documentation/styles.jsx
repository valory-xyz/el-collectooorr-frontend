import styled from 'styled-components';
import { Collapse } from 'antd/lib';
import { COLOR, MEDIA_QUERY } from 'util/theme';

export const Container = styled.div``;

export const DocNavigation = styled(Collapse)`
  .ant-collapse-header {
    padding-left: 0 !important;
    border-bottom: 1px solid ${COLOR.WHITE};
    font-size: 18px;
    text-transform: uppercase;
  }
  > .ant-collapse-item-active {
    > .ant-collapse-header {
      color: ${COLOR.GREEN_2} !important;
    }
    &.no-sub-nav {
      .ant-collapse-content-box {
        padding: 0 !important;
      }
    }
  }
  & > .ant-collapse-item:last-child,
  & > .ant-collapse-item:last-child > .ant-collapse-header {
    border-radius: 0px !important;
  }

  .ant-anchor {
    .ant-anchor-ink {
      display: none;
    }
    .ant-anchor-link {
      padding-left: 0px;
      .ant-anchor-link-title {
        color: ${COLOR.WHITE};
        &-active {
          /* font-weight: bold; */
        }
      }
    }
  }

  ${MEDIA_QUERY.desktop} {
  }
`;

export const DocSection = styled.div`
  display: flex;
  align-items: flex-start;
  .navigation-section {
    position: sticky;
    top: 108px;
    width: 30%;
    max-width: 360px;
  }
  .reading-section {
    max-width: 1000px;
    padding: 0 10rem;
    h3 {
      font-weight: bold;
      /* margin: 0; */
    }
    .green-text-2 {
      font-size: 19px;
      color: ${COLOR.GREEN_2};
      font-family: "minecraft";
    }
    .img-wrapper {
      position: relative;
      left: -6rem;
      img {
        width: calc(100vw - 30rem);
        max-width: 1200px;
      }
    }
  }

  ${MEDIA_QUERY.laptop} {
    .reading-section {
      .img-wrapper {
        img {
          width: calc(100vw - 22rem);
        }
      }
    }
  }

  ${MEDIA_QUERY.tabletL} {
    .reading-section {
      padding: 0 2rem;
      .img-wrapper {
        position: relative;
        left: 0;
        img {
          width: 100%;
          max-width: 100%;
        }
      }
    }
  }

  ${MEDIA_QUERY.tablet} {
    flex-direction: column;
    .navigation-section {
      position: relative;
      top: 0;
      width: 100%;
      max-width: 100%;
    }
    .reading-section {
      padding: 0 1rem;
    }
  }
`;
