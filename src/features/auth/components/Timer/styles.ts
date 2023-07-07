import {StyleSheet} from 'react-native';
import {mainBlue} from '../../../../../assets/colors';

export default StyleSheet.create<any>({
  resendWrapper: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendText: (counter: number) => ({
    fontFamily: 'Inter-SemiBold',
    color: counter === 0 ? mainBlue : 'black',
  }),
});
