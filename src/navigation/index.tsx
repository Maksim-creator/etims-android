import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import {ScreenNames} from './screenNames';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={ScreenNames.INITIAL}>
        <Stack.Screen name={ScreenNames.AUTH} component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
