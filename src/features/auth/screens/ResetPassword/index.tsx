import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/Header';
import PoppinsText from '../../../../components/PoppinsText';
import InterText from '../../../../components/InterText';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import {ResetPasswordSchema} from '../../utils';
import styles from './styles';

const ResetPassword = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const showPassword = () => setIsPasswordVisible(true);
  const hidePassword = () => setIsPasswordVisible(false);

  const showConfirmPassword = () => setIsConfirmPasswordVisible(true);
  const hideConfirmPassword = () => setIsConfirmPasswordVisible(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header hasBack />
      </View>
      <View style={styles.content}>
        <PoppinsText style={styles.title}>Reset password</PoppinsText>
        <InterText style={styles.subtitle}>
          Please type something you'll remember
        </InterText>
        <Formik
          initialValues={{password: '', confirmPassword: ''}}
          validationSchema={ResetPasswordSchema}
          onSubmit={() => {}}>
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            touched,
            errors,
            values,
          }) => (
            <View>
              <View style={styles.inputs}>
                <Input
                  value={values.password}
                  onChange={handleChange('password')}
                  touched={touched.password}
                  error={errors.password}
                  onBlur={handleBlur('password')}
                  placeholder={'must be 8 characters'}
                  isPassword={!isPasswordVisible}
                  title={'New password'}
                  rightIcon={
                    <Icon
                      name={
                        !isPasswordVisible ? 'eye-off-outline' : 'eye-outline'
                      }
                      style={styles.inputIcon}
                      size={20}
                      onPress={isPasswordVisible ? hidePassword : showPassword}
                    />
                  }
                />
                <Input
                  value={values.confirmPassword}
                  onChange={handleChange('confirmPassword')}
                  touched={touched.confirmPassword}
                  error={errors.confirmPassword}
                  onBlur={handleBlur('confirmPassword')}
                  placeholder={'repeat password'}
                  title={'Confirm new password'}
                  containerStyle={styles.input}
                  isPassword={!isConfirmPasswordVisible}
                  rightIcon={
                    <Icon
                      name={
                        !isConfirmPasswordVisible
                          ? 'eye-off-outline'
                          : 'eye-outline'
                      }
                      style={styles.inputIcon}
                      size={20}
                      onPress={
                        isConfirmPasswordVisible
                          ? hideConfirmPassword
                          : showConfirmPassword
                      }
                    />
                  }
                />
              </View>
              <Button
                onPress={handleSubmit}
                buttonText={'Reset password'}
                primary
                buttonStyles={styles.submitButton}
              />
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;
