import React, { useState, useEffect } from 'react';
import { Animated, Easing } from 'react-native';

import { 
  Container, 
  Content, 
  Title, 
  Owner, 
  Badge, 
  BadgeText, 
  SubTitle 
} from './styles';

export default function Project({ project }) {
  const [timeIsNew, setTimeIsNew] = useState(true);
  
  const [translate] = useState(new Animated.Value(30));
  const [fadeAnim] = useState(new Animated.Value(0));

  Animated.parallel([
    Animated.timing(
      translate,
      {
        toValue: 0,
        duration: 400,
        easing: Easing.bounce,
        useNativeDriver: true,
      }
    ),
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 400,
        easing: Easing.ease,
        useNativeDriver: true,
      }
    )
  ]).start();


  useEffect(() => {
    setTimeout(() => {
      setTimeIsNew(false);
    }, 7000);
  }, []);

  return (
    <Container 
      newproject={(project.isNew && timeIsNew) || false}
      style={{ translateY: translate, opacity: fadeAnim }}
    >
      <Owner source={{
        uri: `https://api.adorable.io/avatars/50/${project.title}.png`
      }} />
      <Content>
        {project.isNew && timeIsNew && (
          <Badge>
            <BadgeText>Novo</BadgeText>
          </Badge>
        )}
        <Title>{project.title}</Title>
        <SubTitle>{project.owner}</SubTitle>
      </Content>
    </Container>
  );
}
