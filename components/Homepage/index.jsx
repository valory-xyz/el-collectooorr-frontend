import React from 'react';
import { Alert, Typography } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 1rem;
`;

const AlertContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
`;

const Homepage = () => (
  <Container>
    <AlertContainer>
      <Alert
        message="This app has been deprecated and is no longer supported."
        showIcon
      />
    </AlertContainer>
    <Typography.Text>
      Please head over to
      {' '}
      <a href="https://olas.network/" target="_blank" rel="noopener noreferrer">
        Olas
      </a>
      {' '}
    </Typography.Text>
  </Container>
);

export default Homepage;
