import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled(Animated.View)`
  background: ${props => props.newproject ? '#fff' : '#fff'};
  border-radius: 10px;
  padding: 0 15px;
  min-height: 80px;
  margin-bottom: 20px;
  
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Owner = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  margin-right: 10px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const SubTitle = styled.Text`
  font-size: 15px;
  color: #383838;
`;

export const Badge = styled.View`
  border-radius: 10px;
  padding: 0 5px;
  background: #baefb0;
  width: 100%;
  max-width: 60px;
  align-items: center;
  position: absolute;
  right: 0px;
  top: 0px;
`;

export const BadgeText = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #38dc1a;
`;