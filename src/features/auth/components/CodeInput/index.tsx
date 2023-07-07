import React from 'react';
import {View} from 'react-native';
import Input from '../../../../components/Input';
import {InitialValues} from '../../screens/CodeCheck';
import styles from './styles';

interface Props {
  values: InitialValues;
  handleChange: any;
  handleBlur: any;
}

const CodeInput: React.FC<Props> = ({values, handleChange, handleBlur}) => {
  return (
    <View style={styles.inputs}>
      {new Array(4).fill(undefined).map((e, i) => {
        return (
          <Input
            key={i}
            value={values[(i + 1).toString() as keyof InitialValues]}
            onChange={handleChange((i + 1).toString())}
            keyboardType={'numeric'}
            onBlur={handleBlur((i + 1).toString())}
            maxLength={1}
            inputStyles={styles.input}
          />
        );
      })}
    </View>
  );
};

export default CodeInput;
