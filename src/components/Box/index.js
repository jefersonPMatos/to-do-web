import React from 'react';

import { Container } from './styles';

export function Box({ children, ...rest }) {
  return (
    <Container {...rest}>
      {children}
    </Container>
  );
}
