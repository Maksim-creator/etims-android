import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import InterText from '../InterText';
import styles from './styles';

interface Props {
  buttonText?: string;
  primary?: boolean;
  buttonStyles?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const Button: React.FC<Props> = ({
  buttonText,
  primary,
  buttonStyles,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        primary ? styles.primary : styles.secondary,
        buttonStyles,
      ]}>
      <InterText
        style={[
          styles.buttonText,
          primary ? styles.primaryText : styles.secondaryText,
        ]}>
        {buttonText}
      </InterText>
    </TouchableOpacity>
  );
};

export default Button;
