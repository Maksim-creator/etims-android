import React, {ReactNode} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

interface InterTextProps extends TextProps {
  children: ReactNode;
}

const InterText: React.FC<InterTextProps> = props => {
  return <Text {...props} style={[styles.text, props.style]} />;
};

export default InterText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Inter-Regular',
  },
});
