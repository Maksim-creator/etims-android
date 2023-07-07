import {StyleSheet} from 'react-native';
import {mainBlue} from '../../../../../assets/colors';

export default StyleSheet.create({
  container: {flex: 1, marginHorizontal: 20},
  header: {flex: 0.1},
  content: {flex: 0.8, paddingTop: 20},
  title: {fontFamily: 'Poppins-Bold', fontSize: 30, color: mainBlue},
  subtitle: {paddingTop: 10},
  inputs: {paddingBottom: 20, paddingTop: 25},
  inputIcon: {position: 'absolute', right: 15, top: '33%'},
  input: {marginTop: 14},
  submitButton: {paddingVertical: 17},
});
