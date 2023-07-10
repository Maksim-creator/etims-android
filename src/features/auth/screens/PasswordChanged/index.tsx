import React, {useEffect, useRef} from 'react';
import {Animated, Easing, SafeAreaView, View} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Star from '../../../../components/Star';
import PoppinsText from '../../../../components/PoppinsText';
import InterText from '../../../../components/InterText';
import Button from '../../../../components/Button';
import {ScreenNames} from '../../../../navigation/screenNames';
import styles from './styles';

const PasswordChanged = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const firstStarOpacity = useRef(new Animated.Value(0));
  const secondStarOpacity = useRef(new Animated.Value(0));

  const handleBackToLogin = () =>
    navigation.reset({index: 0, routes: [{name: ScreenNames.LOGIN}]});

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(firstStarOpacity.current, {
          useNativeDriver: true,
          toValue: 1,
          easing: Easing.ease,
          duration: 400,
        }),
        Animated.timing(secondStarOpacity.current, {
          useNativeDriver: true,
          toValue: 1,
          easing: Easing.ease,
          duration: 400,
        }),
        Animated.timing(firstStarOpacity.current, {
          useNativeDriver: true,
          toValue: 0,
          easing: Easing.ease,
          duration: 400,
        }),
        Animated.timing(secondStarOpacity.current, {
          useNativeDriver: true,
          toValue: 0,
          easing: Easing.ease,
          duration: 400,
        }),
      ]),
      {iterations: 3},
    ).start(() => {
      Animated.sequence([
        Animated.timing(firstStarOpacity.current, {
          useNativeDriver: true,
          toValue: 1,
          easing: Easing.ease,
          duration: 400,
        }),
        Animated.timing(secondStarOpacity.current, {
          useNativeDriver: true,
          toValue: 1,
          easing: Easing.ease,
          duration: 400,
        }),
      ]).start();
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.stars}>
          <Animated.View
            style={[styles.firstStar, {opacity: firstStarOpacity.current}]}>
            <Star />
          </Animated.View>
          <Animated.View
            style={[styles.secondStar, {opacity: secondStarOpacity.current}]}>
            <Star />
          </Animated.View>
        </View>
        <PoppinsText style={styles.title}>Password changed</PoppinsText>
        <InterText style={styles.subtitle}>
          Your password has been changed successfully
        </InterText>
        <Button
          buttonStyles={styles.button}
          onPress={handleBackToLogin}
          buttonText={'Back to login'}
          primary
        />
      </View>
    </SafeAreaView>
  );
};

export default PasswordChanged;
