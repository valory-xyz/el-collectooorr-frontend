import React from 'react';
import { Typography } from 'antd';
import { Container } from './styles';

const Footer = () => (
  <Container>
    <Typography.Paragraph>
      {`© Olas (aka Autonolas) DAO ${new Date().getFullYear()}`}
      {' '}
    </Typography.Paragraph>
  </Container>
);

export default Footer;
