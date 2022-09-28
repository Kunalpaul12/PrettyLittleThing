import React from 'react';
import {View, Text} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

type Props = {
  navigation: NavigationProp<ParamListBase>;
};

const Home: React.FC<Props> = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
