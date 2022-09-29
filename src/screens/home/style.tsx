import styled from 'styled-components/native';
import Colors from '../../colors';
import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions?.get('window');

export const ProductContainer = styled.View`
  width: ${width / 2.34}px;
  height: 250px
  align-self: center;
  border-color: ${Colors?.productBorder};
  border-width: 0.5px;
  justify-content:center
  align-items:center
`;

export const ProductSeparator = styled.View`
  padding: 10px;
`;

export const Styles = StyleSheet.create({
  columWrapper: {
    justifyContent: 'space-between',
  },
  productImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});
