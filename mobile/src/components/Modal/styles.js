import styled from 'styled-components/native';
import { TouchableOpacity, Animated } from 'react-native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.6);

  justify-content: flex-end;
`;

export const Content = styled(Animated.View)`
  height: 300px;
  width: 100%;
  background: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #1d1d1d;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 0 },
})`
  align-self: stretch;
`;

export const FormInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0,0,0,0.4)',
})`
  margin-bottom: 10px;
  font-size: 15px;
  border: 1px solid #d4c8fd;
  border-radius: 10px;
  padding: 15px;
  font-weight: bold;
  color: #7159c1;
`;

export const Button = styled(TouchableOpacity)`
  height: 60px;
  background: #7159c1;
  border-radius: 10px;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;