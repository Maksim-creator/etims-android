import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {ScreenNames} from './screenNames';
import Dashboard from '../features/dashboard/screens/Dashboard';
import Courses from '../features/courses/screens/Courses';
import EtimsIconSet from '../../assets/EtimsIconSet';
import {lightBlue, mainBlue} from '../../assets/colors';
import Mail from '../features/mail/screens/Mail';
import Profile from '../features/profile/screens/Profile';

const Tab = createBottomTabNavigator();

const renderTabButton =
  (route: RouteProp<ParamListBase, string>) =>
  ({focused, size}: {focused: boolean; color: string; size: number}) => {
    let iconName: string;

    if (route.name === ScreenNames.DASHBOARD) {
      iconName = 'dashboard';
    } else if (route.name === ScreenNames.COURSES) {
      iconName = 'courses';
    } else if (route.name === ScreenNames.PROFILE) {
      iconName = 'profile';
    } else if (route.name === ScreenNames.MAIL) {
      iconName = 'mail';
    }
    return (
      <EtimsIconSet
        name={iconName!}
        size={iconName! === 'mail' ? 19 : size}
        color={focused ? mainBlue : '#ababab'}
      />
    );
  };

const TabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={styles.sceneContainer}
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarContentContainerStyle: styles.tabBarContentContainer,
        headerShown: false,
        tabBarIcon: renderTabButton(route),
      })}
      initialRouteName={ScreenNames.DASHBOARD}>
      <Tab.Screen name={ScreenNames.DASHBOARD} component={Dashboard} />
      <Tab.Screen name={ScreenNames.COURSES} component={Courses} />
      <Tab.Screen name={ScreenNames.MAIL} component={Mail} />
      <Tab.Screen name={ScreenNames.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    height: 72,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: 'rgba(0,0,0,0.25)',
    bottom: 23,
    marginHorizontal: 20,
    shadowRadius: 5,
    shadowOpacity: 4,
    justifyContent: 'center',
    paddingBottom: 3,
  },
  tabBarContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sceneContainer: {backgroundColor: lightBlue},
});
