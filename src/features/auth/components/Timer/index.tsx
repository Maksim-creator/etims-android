import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import InterText from '../../../../components/InterText';
import styles from './styles';

interface Props {
  counter: number;
  sendCode: () => void;
}

const Timer: React.FC<Props> = ({counter, sendCode}) => {
  return (
    <View style={styles.resendWrapper}>
      <TouchableOpacity disabled={counter > 0} onPress={sendCode}>
        <InterText style={styles.sendText(counter)}>Send code again</InterText>
      </TouchableOpacity>
      {counter > 0 && (
        <InterText>
          {' '}
          00:{counter.toString().length > 1 ? counter : '0' + counter}
        </InterText>
      )}
    </View>
  );
};

export default Timer;
