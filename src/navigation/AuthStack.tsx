import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitialScreen from '../features/auth/screens/InitialScreen';
import Login from '../features/auth/screens/Login';
import SignUpPreview from '../features/auth/screens/SignUpPreview';
import {ScreenNames} from './screenNames';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: '#ffffff'},
      }}>
      <Stack.Screen name={ScreenNames.INITIAL} component={InitialScreen} />
      <Stack.Screen name={ScreenNames.LOGIN} component={Login} />
      <Stack.Screen
        name={ScreenNames.SIGN_UP_PREVIEW}
        component={SignUpPreview}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
