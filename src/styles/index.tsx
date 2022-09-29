import styled from 'styled-components/native';
import {scale} from 'react-native-size-matters';
import colors from '../colors';
import {FONTS_TYPE} from '../constants/fonts';
import {Dimensions} from 'react-native';

const {width} = Dimensions?.get('window');

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors?.background};
`;

export const _Text = styled.Text`
  font-family: ${props => props?.fontFamily || FONTS_TYPE?.regular};
  font-size: ${props => scale(props?.fontSize) || scale(15)}px;
  color: ${props => props?.color || colors?.text};
  padding-top: ${props => props?.paddingTop || '0'}px;
  text-align: ${props => props?.textAlign || 'center'};
  padding-bottom: ${props => props?.paddingBottom || '0'}px;
  padding-left: ${props => props?.paddingLeft || '0'}px;
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: ${width / 1.1}px;
  align-self: center;
`;

export const ComponentsContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
