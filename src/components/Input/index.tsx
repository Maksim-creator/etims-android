import React, {LegacyRef, ReactElement} from 'react';
import {
  ColorValue,
  KeyboardType,
  NativeSyntheticEvent,
  StyleProp,
  TextInput,
  TextInputFocusEventData,
  TextStyle,
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
  placeholder?: string;
  placeholderTextColor?: ColorValue;
  inputStyles?: StyleProp<TextStyle>;
  keyboardType?: KeyboardType;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  maxLength?: number;
  ref?: LegacyRef<any>;
  leftIcon?: ReactElement<Icon>;
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
  placeholder,
  placeholderTextColor,
  inputStyles,
  keyboardType,
  onFocus,
  maxLength,
  ref,
  leftIcon,
}) => {
  return (
    <View style={containerStyle}>
      {title && <InterText style={styles.title}>{title}</InterText>}
      <View style={styles.searchContainer}>
        {leftIcon && leftIcon}
        <TextInput
          ref={ref}
          style={[styles.input, inputStyles, {paddingLeft: leftIcon ? 40 : 12}]}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          secureTextEntry={isPassword}
          onFocus={onFocus}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor || 'rgba(0,0,0,0.5)'}
          keyboardType={keyboardType}
          maxLength={maxLength}
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
