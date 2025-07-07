import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';
import { COLOR } from 'util/theme';

const { Title, Text } = Typography;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 1rem;
  color: ${COLOR.WHITE};

  .ant-alert {
   font-size: 16px;
  }

  .ant-typography {
    color: ${COLOR.WHITE};
    margin: 4px 0;
  }
`;

const AlertContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${COLOR.BLACK};
  padding: 1rem;
  text-align: center;
`;

const Homepage = () => (
  <Container>
    <AlertContainer>
      <Title level={2}>This app has been deprecated and is no longer supported.</Title>
      <Text>
        Please head over to
        {' '}
        <a href="https://olas.network/" target="_blank" rel="noopener noreferrer">
          Olas
        </a>
        {' '}
      </Text>
    </AlertContainer>
  </Container>
);

export default Homepage;
