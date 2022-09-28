import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, CheckOut} from '../screens';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Check Out" component={CheckOut} />
    </Stack.Navigator>
  );
};

export default RootStack;
