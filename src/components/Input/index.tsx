import React, {ReactElement} from 'react';
import {
  NativeSyntheticEvent,
  StyleProp,
  TextInput,
  TextInputFocusEventData,
  View,
  ViewStyle,
} from 'react-native';
import {Icon} from 'react-native-vector-icons/Icon';
import InterText from '../InterText';
import styles from './styles';

interface Props {
  value: string;
  onChange: (value: string) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  title?: string;
  rightIcon?: ReactElement<Icon>;
  isPassword?: boolean;
  error?: string;
  touched?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

const Input: React.FC<Props> = ({
  value,
  onChange,
  title,
  rightIcon,
  onBlur,
  isPassword,
  touched,
  error,
  containerStyle,
}) => {
  return (
    <View style={containerStyle}>
      {title && <InterText style={styles.title}>{title}</InterText>}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          secureTextEntry={isPassword}
        />
        {rightIcon && rightIcon}
      </View>
      {error && touched && (
        <InterText style={styles.errorMessage}>{error}</InterText>
      )}
    </View>
  );
};

export default Input;
