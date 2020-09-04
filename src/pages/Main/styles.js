import styled from 'styled-components/native';
import {Platform, StyleSheet, Animated} from 'react-native';

export const Container = styled(Animated.View)`
  flex: 1;
`;

export const Header = styled(Animated.View)`
  padding-top: ${Platform.OS === 'ios' ? '40px' : '20px'};
  padding-left: 15px;
  padding-right: 15px;
  background-color: #d62828;
`;

export const HeaderImage = styled(Animated.Image).attrs({
  ...StyleSheet.absoluteFillObject,
})``;

export const HeaderText = styled(Animated.Text)`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  background-color: transparent;
  position: absolute;
  left: 15px;
  bottom: 20px;
`;
