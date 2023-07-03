import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitialScreen from '../features/auth/screens/InitialScreen';
import {ScreenNames} from './screenNames';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ScreenNames.INITIAL} component={InitialScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
