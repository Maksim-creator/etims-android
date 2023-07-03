import React, {ReactNode} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

interface PoppinsTextProps extends TextProps {
  children: ReactNode;
}

const PoppinsText: React.FC<PoppinsTextProps> = props => {
  return <Text {...props} style={[styles.text, props.style]} />;
};

export default PoppinsText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Regular',
  },
});
