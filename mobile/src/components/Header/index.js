import React from 'react';
import { View, Text } from 'react-native';

import { Container, Title, TitleBold, Description } from './styles';

export default function Header({ name, description }) {
  return (
    <Container>
      <Title>Olá 
        <TitleBold> {name}!</TitleBold>
      </Title>
      <Description>
        {description}
      </Description>
    </Container>
  );
}
