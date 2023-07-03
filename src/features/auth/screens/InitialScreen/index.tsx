import React, {useEffect, useRef} from 'react';
import {Animated, Easing, SafeAreaView, View} from 'react-native';
import Button from '../../../../components/Button';
import PoppinsText from '../../../../components/PoppinsText';
import InterText from '../../../../components/InterText';
import styles from './styles';

const InitialScreen = () => {
  const opacityAnimation = useRef(new Animated.Value(0));

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
        style={[
          {
            opacity: opacityAnimation.current,
          },
          styles.content,
        ]}>
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
          />
          <Button buttonText={'Create account'} />
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default InitialScreen;
