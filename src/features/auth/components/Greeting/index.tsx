import React from 'react';
import {View} from 'react-native';
import PoppinsText from '../../../../components/PoppinsText';
import InterText from '../../../../components/InterText';
import styles from './styles';

const Greeting = () => {
  return (
    <View>
      <PoppinsText style={styles.title}>Welcome to ETIMS Cloud</PoppinsText>
      <InterText style={styles.subtitle}>
        The system is intended to control learning process. Register right now
      </InterText>
    </View>
  );
};

export default Greeting;
