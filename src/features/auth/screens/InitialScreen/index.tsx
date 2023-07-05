import React, {useEffect, useRef} from 'react';
import {Animated, Easing, SafeAreaView, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import Button from '../../../../components/Button';
import PoppinsText from '../../../../components/PoppinsText';
import InterText from '../../../../components/InterText';
import Logo from '../../../../components/Logo';
import {ScreenNames} from '../../../../navigation/screenNames';
import styles from './styles';

const InitialScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const opacityAnimation = useRef(new Animated.Value(0));

  const navigateToLogin = () => navigation.navigate(ScreenNames.LOGIN);

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
          <View>
            <PoppinsText style={styles.title}>Explore the app</PoppinsText>
            <InterText style={styles.subtitle}>
              Now your finances are in one place and always under control
            </InterText>
          </View>
          <View>
            <Button
              primary
              buttonText={'Sign In'}
              buttonStyles={styles.signInButton}
              onPress={navigateToLogin}
            />
            <Button buttonText={'Create account'} onPress={() => {}} />
          </View>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default InitialScreen;
