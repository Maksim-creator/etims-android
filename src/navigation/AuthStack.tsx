import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitialScreen from '../features/auth/screens/InitialScreen';
import {ScreenNames} from './screenNames';
import Login from '../features/auth/screens/Login';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ScreenNames.INITIAL} component={InitialScreen} />
      <Stack.Screen name={ScreenNames.LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
