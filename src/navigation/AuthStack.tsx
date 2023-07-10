import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitialScreen from '../features/auth/screens/InitialScreen';
import Login from '../features/auth/screens/Login';
import SignUpPreview from '../features/auth/screens/SignUpPreview';
import SingUp from '../features/auth/screens/SingUp';
import ForgotPassword from '../features/auth/screens/ForgotPassword';
import CodeCheck from '../features/auth/screens/CodeCheck';
import ResetPassword from '../features/auth/screens/ResetPassword';
import PasswordChanged from '../features/auth/screens/PasswordChanged';
import LanguageSelect from '../features/auth/screens/LanguageSelect';
import {ScreenNames} from './screenNames';

type AuthStackParamList = {
  [ScreenNames.AUTH]: undefined;
  [ScreenNames.LOGIN]: undefined;
  [ScreenNames.SIGN_UP]: undefined;
  [ScreenNames.INITIAL]: undefined;
  [ScreenNames.SIGN_UP_PREVIEW]: undefined;
  [ScreenNames.FORGOT_PASSWORD]: undefined;
  [ScreenNames.CODE_CHECK]: {email: string};
  [ScreenNames.RESET_PASSWORD]: undefined;
  [ScreenNames.PASSWORD_CHANGED]: undefined;
  [ScreenNames.LANGUAGE_SELECT]: undefined;
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
      <Stack.Screen
        name={ScreenNames.RESET_PASSWORD}
        component={ResetPassword}
      />
      <Stack.Screen
        name={ScreenNames.PASSWORD_CHANGED}
        component={PasswordChanged}
      />
      <Stack.Screen
        name={ScreenNames.LANGUAGE_SELECT}
        component={LanguageSelect}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
