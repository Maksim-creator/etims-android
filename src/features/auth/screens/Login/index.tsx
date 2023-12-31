import React, {useState} from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Formik} from 'formik';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import PoppinsText from '../../../../components/PoppinsText';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import InterText from '../../../../components/InterText';
import Header from '../../components/Header';
import Facebook from '../../../../../assets/svgs/Facebook';
import Google from '../../../../../assets/svgs/Google';
import Apple from '../../../../../assets/svgs/Apple';
import {SignInSchema} from '../../utils';
import {ScreenNames} from '../../../../navigation/screenNames';
import styles from './styles';

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const showPassword = () => setIsPasswordVisible(true);
  const hidePassword = () => setIsPasswordVisible(false);

  const renderEmailIcon = (emailLength: number, emailError?: string) =>
    emailLength ? (
      <View style={styles.validationIconContainer}>
        <Icon name={emailError ? 'close' : 'check'} size={15} color={'white'} />
      </View>
    ) : (
      <></>
    );

  const navigateToSignUp = () =>
    navigation.navigate(ScreenNames.SIGN_UP_PREVIEW);

  const navigateToForgotPassword = () =>
    navigation.navigate(ScreenNames.FORGOT_PASSWORD);

  const handleLogin = () => {
    navigation.reset({index: 0, routes: [{name: ScreenNames.TABS}]});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.star}>
        <Header />
      </View>
      <View style={styles.content}>
        <PoppinsText style={styles.loginText}>Log in</PoppinsText>
        <Formik
          validationSchema={SignInSchema}
          initialValues={{email: 'qwe@g.c', password: '12345678'}}
          onSubmit={handleLogin}>
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.inputs}>
              <Input
                value={values.email}
                onChange={handleChange('email')}
                onBlur={handleBlur('email')}
                title={'Email address'}
                placeholder={'Your email'}
                error={errors.email}
                touched={touched.email}
                rightIcon={renderEmailIcon(values.email.length, errors.email)}
              />
              <Input
                value={values.password}
                onChange={handleChange('password')}
                onBlur={handleBlur('password')}
                placeholder={'Your password'}
                title={'Password'}
                touched={touched.password}
                error={errors.password}
                containerStyle={styles.passwordInput}
                isPassword={isPasswordVisible}
                rightIcon={
                  <Icon
                    onPress={isPasswordVisible ? hidePassword : showPassword}
                    name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
                    size={25}
                    color={'#737373'}
                    style={styles.passwordIcon}
                  />
                }
              />
              <TouchableOpacity
                onPress={navigateToForgotPassword}
                style={styles.forgotPasswordButton}>
                <InterText style={styles.forgotPasswordText}>
                  Forgot password?
                </InterText>
              </TouchableOpacity>
              <Button
                onPress={handleSubmit}
                buttonText={'Log in'}
                primary
                buttonStyles={styles.loginButton}
              />
            </View>
          )}
        </Formik>
        <View style={styles.loginWithContainer}>
          <View style={styles.divider} />
          <InterText style={styles.loginWithText}>Or Login with</InterText>
          <View style={styles.divider} />
        </View>
        <View style={styles.socialNetworks}>
          <View style={styles.socialNetwork}>
            <Facebook />
          </View>
          <View style={styles.socialNetwork}>
            <Google />
          </View>
          <View style={styles.socialNetwork}>
            <Apple />
          </View>
        </View>
      </View>
      <View style={styles.signupContainer}>
        <InterText>Don't have an account? </InterText>
        <TouchableOpacity onPress={navigateToSignUp}>
          <InterText style={styles.signupText}>Sign up</InterText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
