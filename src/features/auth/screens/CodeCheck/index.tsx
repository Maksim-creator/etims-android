import React, {useEffect, useMemo} from 'react';
import {KeyboardAvoidingView, SafeAreaView, View} from 'react-native';
import {Formik} from 'formik';
import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Header from '../../components/Header';
import PoppinsText from '../../../../components/PoppinsText';
import InterText from '../../../../components/InterText';
import Button from '../../../../components/Button';
import {CodeSchema} from '../../utils';
import Timer from '../../components/Timer';
import CodeInput from '../../components/CodeInput';
import {ScreenNames} from '../../../../navigation/screenNames';
import styles from './styles';

export interface InitialValues {
  '1': string;
  '2': string;
  '3': string;
  '4': string;
}

const CodeCheck = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const route = useRoute<RouteProp<{params: {email: string}}>>();
  const [counter, setCounter] = React.useState(59);
  const [startCountdown, setStartCountdown] = React.useState(false);

  const initialValues: InitialValues = useMemo(
    () => ({1: '', 2: '', 3: '', 4: ''}),
    [],
  );

  const sendCode = () => {
    //resend code
    setCounter(59);
    setStartCountdown(true);
  };

  const handleVerifyCode = (values: InitialValues) => {
    const code: string = Object.values(values).reduce(
      (prev, curr) => prev + curr,
      '',
    );
    //check is code equal
    setStartCountdown(false);
    navigation.navigate(ScreenNames.RESET_PASSWORD);
  };

  useEffect(() => {
    if (startCountdown) {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

      if (counter === 0) {
        setStartCountdown(false);
      }

      return () => clearInterval(timer as NodeJS.Timer);
    }
  }, [counter, startCountdown]);

  useEffect(() => {
    setStartCountdown(true);
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Header hasBack />
        </View>
        <View style={styles.content}>
          <PoppinsText style={styles.title}>
            Please check your email
          </PoppinsText>
          <View style={styles.subtitleWrapper}>
            <InterText style={styles.subtitle}>We've sent a code to</InterText>
            <InterText style={styles.email}> {route.params.email}</InterText>
          </View>
          <Formik
            initialValues={initialValues}
            onSubmit={handleVerifyCode}
            validationSchema={CodeSchema}>
            {({handleBlur, handleChange, handleSubmit, values}) => (
              <View>
                <CodeInput
                  values={values}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
                <Button onPress={handleSubmit} buttonText={'Verify'} primary />
              </View>
            )}
          </Formik>
        </View>
        <Timer sendCode={sendCode} counter={counter} />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default CodeCheck;
