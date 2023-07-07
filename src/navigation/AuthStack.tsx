import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitialScreen from '../features/auth/screens/InitialScreen';
import Login from '../features/auth/screens/Login';
import SignUpPreview from '../features/auth/screens/SignUpPreview';
import SingUp from '../features/auth/screens/SingUp';
import ForgotPassword from '../features/auth/screens/ForgotPassword';
import CodeCheck from '../features/auth/screens/CodeCheck';
import {ScreenNames} from './screenNames';

type AuthStackParamList = {
  [ScreenNames.AUTH]: undefined;
  [ScreenNames.LOGIN]: undefined;
  [ScreenNames.SIGN_UP]: undefined;
  [ScreenNames.INITIAL]: undefined;
  [ScreenNames.SIGN_UP_PREVIEW]: undefined;
  [ScreenNames.FORGOT_PASSWORD]: undefined;
  [ScreenNames.CODE_CHECK]: {email: string};
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

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
      <Stack.Screen name={ScreenNames.SIGN_UP} component={SingUp} />
      <Stack.Screen
        name={ScreenNames.FORGOT_PASSWORD}
        component={ForgotPassword}
      />
      <Stack.Screen name={ScreenNames.CODE_CHECK} component={CodeCheck} />
    </Stack.Navigator>
  );
};

export default AuthStack;
