import React from 'react';
import {Image, View} from 'react-native';
import InterText from '../../../../components/InterText';
import styles from './styles';

const CoursesNotFound = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../../assets/notFound.png')}
        resizeMode={'contain'}
      />
      <InterText style={styles.title}>You don’t have courses</InterText>
      <InterText style={styles.subtitle}>You’ll find them here!</InterText>
    </View>
  );
};

export default CoursesNotFound;
