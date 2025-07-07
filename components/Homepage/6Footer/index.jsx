import React from 'react';
import { Typography } from 'antd';
import { Container } from './styles';

const Footer = () => (
  <Container>
    <Typography.Text>
      {`© Valory ${new Date().getFullYear()}`}
      {' '}
    </Typography.Text>
  </Container>
);

export default Footer;
