import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import Header from '../../components/Header';
import PoppinsText from '../../../../components/PoppinsText';
import InterText from '../../../../components/InterText';
import LanguagePicker from '../../components/LanguagePicker';
import styles from './styles';

const LanguageSelect = () => {
  const [language, setLanguage] = useState('English');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header hasBack />
      </View>
      <View style={styles.content}>
        <PoppinsText style={styles.title}>Choose language</PoppinsText>
        <InterText style={styles.subtitle}>
          Don’t worry! It happens. Please enter the email associated with your
          account.
        </InterText>
        <LanguagePicker language={language} onChange={setLanguage} />
      </View>
    </SafeAreaView>
  );
};

export default LanguageSelect;
