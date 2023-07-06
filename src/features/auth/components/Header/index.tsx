import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Star from '../../../../components/Star';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

interface Props {
  hasBack?: boolean;
}

const Header: React.FC<Props> = ({hasBack}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {hasBack && (
        <TouchableOpacity onPress={navigation.goBack} style={styles.backButton}>
          <Icon name={'chevron-left'} size={30} color={'black'} />
        </TouchableOpacity>
      )}
      <Star />
    </View>
  );
};

export default Header;
