import {StyleSheet} from 'react-native';
import {mainBlue} from '../../../../../assets/colors';

export default StyleSheet.create({
  container: {flex: 1},
  safeArea: {marginHorizontal: 20, flex: 1, marginTop: 15},
  header: {flex: 0.1},
  content: {flex: 0.8, paddingTop: 36},
  title: {
    fontSize: 30,
    color: mainBlue,
    fontFamily: 'Poppins-Bold',
    paddingBottom: 13,
  },
  subtitleWrapper: {flexDirection: 'row'},
  subtitle: {color: 'rgba(0, 0, 0, 0.7)'},
  email: {color: mainBlue},
});
