import {StyleSheet} from 'react-native';
import {mainBlue} from '../../../../../assets/colors';

export default StyleSheet.create({
  container: {flex: 1},
  content: {
    flex: 1,
    backgroundColor: 'rgba(240, 243, 251, 1)',
    borderRadius: 32,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  logo: {flex: 0.25},
  form: {flex: 0.55},
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    color: mainBlue,
  },
  inputs: {paddingVertical: 23},
  input: {marginVertical: 7},
  passwordIcon: {position: 'absolute', right: 15, top: '33%'},
  submitButton: {borderRadius: 10, paddingVertical: 16},
  termsWrapper: {
    flex: 0.3,
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'center',
    paddingBottom: 40,
  },
  textWrapper: {flexDirection: 'row'},
  termsButton: {
    textDecorationLine: 'underline',
    fontFamily: 'Inter-SemiBold',
  },
  text: {color: 'rgba(0, 0, 0, 0.7)'},
});
