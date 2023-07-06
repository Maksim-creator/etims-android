import {StyleSheet} from 'react-native';
import {grey} from '../../../../../assets/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  backButton: {
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 3,
    paddingVertical: 5,
    borderColor: grey,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
