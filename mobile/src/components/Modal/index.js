import React, { useState } from 'react';
import { Alert, Animated, Easing } from 'react-native';

import { 
  Container, 
  Content, 
  Title, 
  Form, 
  FormInput,
  Button,
  ButtonText
} from './styles';

export default function Modal({ createProject }) {
  const [title, setTitle] = useState('');
  const [owner, setOwner] = useState('');

  const [translateY] = useState(new Animated.Value(300));
  const [fadeAnim] = useState(new Animated.Value(0));

  Animated.parallel([
    Animated.timing(
      translateY,
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
        duration: 200,
        easing: Easing.ease,
        useNativeDriver: true,
      }
    )
  ]).start();

  function onHandlerStateChanged(event) {

  }

  function handleNewProject() {
    if (!title || !owner) {
      Alert.alert('Ooops!','Informe o titulo e o proprietário do projeto.');
      return;
    };

    createProject(title, owner);
  }

  return (
    <Container>
      <Content style={{ transform: [{
        translateY,
      }],
      opacity: fadeAnim
      }} >
        <Title>Novo projeto</Title>

        <Form>
          <FormInput
            placeholder="Titúlo do projeto"
            autoCapitalize="words"
            returnKeyType="next"
            value={title}
            onChangeText={setTitle}
          />
          <FormInput
            placeholder="Proprietário"
            autoCapitalize="words"
            returnKeyType="send"
            value={owner}
            onChangeText={setOwner}
            onSubmitEditing={handleNewProject}
          />

          <Button activeOpacity={0.6} onPress={handleNewProject}>
            <ButtonText>Adicionar</ButtonText>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}
