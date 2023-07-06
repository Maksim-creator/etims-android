import React, {useState} from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../../../../components/Logo';
import PoppinsText from '../../../../components/PoppinsText';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import InterText from '../../../../components/InterText';
import {SignUpSchema} from '../../utils';
import styles from './styles';

const SingUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const showPassword = () => setIsPasswordVisible(true);
  const hidePassword = () => setIsPasswordVisible(false);

  const showConfirmPassword = () => setIsConfirmPasswordVisible(true);
  const hideConfirmPassword = () => setIsConfirmPasswordVisible(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logo}>
          <Logo />
        </View>
        <View style={styles.form}>
          <PoppinsText style={styles.title}>Create account</PoppinsText>
          <Formik
            initialValues={{email: '', password: '', confirmPassword: ''}}
            validationSchema={SignUpSchema}
            onSubmit={() => {}}>
            {({
              handleBlur,
              handleSubmit,
              handleChange,
              values,
              touched,
              errors,
            }) => (
              <View>
                <View style={styles.inputs}>
                  <Input
                    value={values.email}
                    onBlur={handleBlur('email')}
                    touched={touched.email}
                    error={errors.email}
                    onChange={handleChange('email')}
                    placeholder={'Email address'}
                    containerStyle={styles.input}
                  />
                  <Input
                    value={values.password}
                    onBlur={handleBlur('password')}
                    touched={touched.password}
                    error={errors.password}
                    onChange={handleChange('password')}
                    placeholder={'Password'}
                    containerStyle={styles.input}
                    isPassword={!isPasswordVisible}
                    rightIcon={
                      <Icon
                        name={
                          !isPasswordVisible ? 'eye-off-outline' : 'eye-outline'
                        }
                        style={styles.passwordIcon}
                        size={20}
                        onPress={
                          isPasswordVisible ? hidePassword : showPassword
                        }
                      />
                    }
                  />
                  <Input
                    value={values.confirmPassword}
                    onBlur={handleBlur('confirmPassword')}
                    touched={touched.confirmPassword}
                    error={errors.confirmPassword}
                    onChange={handleChange('confirmPassword')}
                    placeholder={'Confirm password'}
                    containerStyle={styles.input}
                    isPassword={!isConfirmPasswordVisible}
                    rightIcon={
                      <Icon
                        name={
                          !isConfirmPasswordVisible
                            ? 'eye-off-outline'
                            : 'eye-outline'
                        }
                        style={styles.passwordIcon}
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
                  buttonText={'Create account'}
                  primary
                  buttonStyles={styles.submitButton}
                />
              </View>
            )}
          </Formik>
        </View>
        <View style={styles.termsWrapper}>
          <InterText style={styles.text}>
            By creating an account or signing you
          </InterText>
          <View style={styles.textWrapper}>
            <InterText style={styles.text}>agree to our </InterText>
            <TouchableOpacity>
              <InterText style={styles.termsButton}>
                Terms and Conditions
              </InterText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SingUp;
