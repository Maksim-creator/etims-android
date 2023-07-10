import {StyleSheet} from 'react-native';
import {mainBlue} from '../../../../../assets/colors';

export default StyleSheet.create({
  container: {flex: 1, marginHorizontal: 20},
  header: {flex: 0.1},
  content: {flex: 0.8},
  title: {fontFamily: 'Poppins-Bold', fontSize: 30, color: mainBlue},
  subtitle: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.7)',
    paddingTop: 8,
    paddingBottom: 30,
  },
});
