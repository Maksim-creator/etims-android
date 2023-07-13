import React, {ReactElement} from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {Icon} from 'react-native-vector-icons/Icon';
import InterText from '../InterText';
import styles from './styles';

interface Props {
  buttonText?: string;
  primary?: boolean;
  buttonStyles?: StyleProp<ViewStyle>;
  buttonTextStyles?: StyleProp<TextStyle>;
  iconContainerStyles?: StyleProp<ViewStyle>;
  onPress: () => void;
  leftIcon?: ReactElement<Icon>;
}

const Button: React.FC<Props> = ({
  buttonText,
  primary,
  buttonStyles,
  buttonTextStyles,
  onPress,
  leftIcon,
  iconContainerStyles,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        primary ? styles.primary : styles.secondary,
        buttonStyles,
      ]}>
      {leftIcon && (
        <View style={[styles.leftIcon, iconContainerStyles]}>{leftIcon}</View>
      )}
      <InterText
        style={[
          styles.buttonText,
          primary ? styles.primaryText : styles.secondaryText,
          buttonTextStyles,
        ]}>
        {buttonText}
      </InterText>
    </TouchableOpacity>
  );
};

export default Button;
