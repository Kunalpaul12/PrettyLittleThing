import styled from 'styled-components/native';
import Colors from '../../colors';
import {StyleSheet} from 'react-native';

export const PlacedOrderButton = styled.TouchableOpacity`
  margin-bottom: 30px;
  background-color: ${Colors?.addRemoveButton};
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const CheckoutListContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 100px;
  align-self: center;
  border-color: ${Colors?.productBorder};
  border-width: 0.5px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const CheckoutDetailsContainer = styled.View`
  flex: 1;
  align-items: flex-start;
`;

export const Styles = StyleSheet.create({
  productImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
});
