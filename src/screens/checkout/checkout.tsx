import React from 'react';
import {View, Text} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

type Props = {
  navigation: NavigationProp<ParamListBase>;
};

const CheckOut: React.FC<Props> = ({navigation}) => {
  return (
    <View>
      <Text>Checkout</Text>
    </View>
  );
};

export default CheckOut;
