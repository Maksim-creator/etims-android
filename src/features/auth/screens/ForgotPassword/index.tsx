import React from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Formik} from 'formik';
import Header from '../../components/Header';
import PoppinsText from '../../../../components/PoppinsText';
import InterText from '../../../../components/InterText';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import {ForgotPasswordSchema} from '../../utils';
import {ScreenNames} from '../../../../navigation/screenNames';
import styles from './styles';

const ForgotPassword = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const navigateToCodeCheck = ({email}: {email: string}) => {
    //check is email exists
    navigation.navigate(ScreenNames.CODE_CHECK, {email: email});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header hasBack />
      </View>
      <View style={styles.content}>
        <PoppinsText style={styles.title}>Forgot password?</PoppinsText>
        <InterText style={styles.subtitle}>
          Don’t worry! It happens. Please enter the email associated with your
          account.
        </InterText>
        <Formik
          initialValues={{email: 'fdggdf@g.c'}}
          onSubmit={navigateToCodeCheck}
          validationSchema={ForgotPasswordSchema}>
          {({
            values,
            handleSubmit,
            handleChange,
            handleBlur,
            errors,
            touched,
          }) => (
            <View>
              <Input
                value={values.email}
                onChange={handleChange('email')}
                onBlur={handleBlur('email')}
                touched={touched.email}
                error={errors.email}
                title={'Email address'}
                placeholder={'Enter your email address'}
              />
              <Button
                onPress={handleSubmit}
                primary
                buttonText={'Send code'}
                buttonStyles={styles.submitButton}
              />
            </View>
          )}
        </Formik>
      </View>
      <View style={styles.footer}>
        <InterText style={styles.text}>Remember password?</InterText>
        <TouchableOpacity>
          <InterText style={styles.loginText}> Log in</InterText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
