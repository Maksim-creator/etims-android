import {StyleSheet} from 'react-native';
import {mainBlue} from '../../../assets/colors';

export default StyleSheet.create({
  primary: {
    backgroundColor: mainBlue,
    borderWidth: 1,
    borderColor: mainBlue,
  },
  secondary: {
    borderColor: mainBlue,
    borderWidth: 1,
  },
  button: {
    borderRadius: 10,
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },
  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: mainBlue,
  },
  leftIcon: {paddingLeft: 19, paddingRight: 14},
});
