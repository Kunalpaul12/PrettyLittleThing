import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

type Props = {
  navigation: NavigationProp<ParamListBase>;
  decrement: any;
  increment: any;
};

const Home: React.FC<Props> = ({navigation, decrement, increment}) => {
  const count = useSelector(state => state.homeReducer.value);
  const dispatch = useDispatch();
  return (
    <View>
      <Text>{count}</Text>
      <TouchableOpacity onPress={() => dispatch(increment())}>
        <Text>ADD</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(decrement())}>
        <Text>SUB</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
