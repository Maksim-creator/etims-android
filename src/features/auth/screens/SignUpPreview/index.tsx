import React from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Logo from '../../../../components/Logo';
import Greeting from '../../components/Greeting';
import Button from '../../../../components/Button';
import Google from '../../../../../assets/svgs/Google';
import Apple from '../../../../../assets/svgs/Apple';
import InterText from '../../../../components/InterText';
import {ScreenNames} from '../../../../navigation/screenNames';
import styles from './styles';

const buttons = [
  {title: 'Google', icon: <Google />},
  {title: 'Apple', icon: <Apple />},
  {title: 'Email', icon: <Icon name={'email'} color={'black'} size={20} />},
];

const SignUpPreview = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const navigateToLogin = () => navigation.navigate(ScreenNames.LOGIN);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Logo />
        <View>
          <View style={styles.greeting}>
            <Greeting />
          </View>
          {buttons.map(button => (
            <Button
              key={button.title}
              buttonText={`Continue with ${button.title}`}
              onPress={() => {}}
              buttonStyles={styles.socialNetwork}
              buttonTextStyles={styles.socialNetworkText}
              leftIcon={button.icon}
            />
          ))}
        </View>
      </View>
      <View style={styles.loginContainer}>
        <InterText>Already have an account? </InterText>
        <TouchableOpacity onPress={navigateToLogin}>
          <InterText style={styles.loginText}>Log in</InterText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUpPreview;
