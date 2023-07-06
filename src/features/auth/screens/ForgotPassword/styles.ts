import {StyleSheet} from 'react-native';
import {mainBlue} from '../../../../../assets/colors';

export default StyleSheet.create({
  container: {marginHorizontal: 20, flex: 1},
  header: {flex: 0.15},
  content: {flex: 0.75},
  title: {fontFamily: 'Poppins-Bold', fontSize: 30, color: mainBlue},
  subtitle: {
    fontSize: 16,
    paddingTop: 13,
    paddingBottom: 38,
    color: 'rgba(0, 0, 0, 0.7)',
    paddingRight: 10,
  },
  submitButton: {paddingVertical: 16, marginTop: 38},
  footer: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {color: 'rgba(0, 0, 0, 0.7)'},
  loginText: {fontFamily: 'Inter-SemiBold', color: 'black'},
});
