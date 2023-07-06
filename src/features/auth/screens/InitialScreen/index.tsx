import React, {useEffect, useRef} from 'react';
import {Animated, Easing, SafeAreaView, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import Button from '../../../../components/Button';
import Logo from '../../../../components/Logo';
import {ScreenNames} from '../../../../navigation/screenNames';
import Greeting from '../../components/Greeting';
import styles from './styles';

const InitialScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const opacityAnimation = useRef(new Animated.Value(0));

  const navigateToLogin = () => navigation.navigate(ScreenNames.LOGIN);
  const navigateToSignUp = () =>
    navigation.navigate(ScreenNames.SIGN_UP_PREVIEW);

  useEffect(() => {
    Animated.timing(opacityAnimation.current, {
      duration: 400,
      useNativeDriver: true,
      easing: Easing.linear,
      toValue: 1,
    }).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[{opacity: opacityAnimation.current}, styles.wrapper]}>
        <View style={styles.logo}>
          <Logo />
        </View>
        <View style={styles.content}>
          <Greeting />
          <View>
            <Button
              primary
              buttonText={'Sign In'}
              buttonStyles={styles.signInButton}
              onPress={navigateToLogin}
            />
            <Button
              buttonText={'Create account'}
              onPress={navigateToSignUp}
              buttonStyles={styles.createButton}
            />
          </View>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default InitialScreen;
