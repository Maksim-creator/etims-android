import React from 'react';
import PoppinsText from '../../../../components/PoppinsText';
import {View} from 'react-native';
import Button from '../../../../components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <PoppinsText style={styles.title}>Courses</PoppinsText>
      <View style={styles.content}>
        <Button
          iconContainerStyles={styles.addCourseIcon}
          buttonStyles={styles.addCourseButton}
          onPress={() => {}}
          primary
          leftIcon={<Icon name={'plus'} color={'white'} size={23} />}
        />
        <Button
          onPress={() => {}}
          buttonText={'Join a course'}
          buttonStyles={styles.joinCourseButton}
          buttonTextStyles={styles.joinCourseButtonText}
        />
      </View>
    </View>
  );
};

export default Header;
