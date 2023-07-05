import React from 'react';
import {View} from 'react-native';
import PoppinsText from '../../../../components/PoppinsText';
import InterText from '../../../../components/InterText';
import styles from './styles';

const Greeting = () => {
  return (
    <View>
      <PoppinsText style={styles.title}>Explore the app</PoppinsText>
      <InterText style={styles.subtitle}>
        Now your finances are in one place and always under control
      </InterText>
    </View>
  );
};

export default Greeting;
