import {StyleSheet} from 'react-native';
import {mainBlue} from '../../../../../assets/colors';

export default StyleSheet.create({
  title: {
    fontSize: 30,
    lineHeight: 39,
    color: mainBlue,
    textAlign: 'center',
    paddingVertical: 15,
    fontFamily: 'Poppins-Bold',
  },
  subtitle: {
    fontSize: 17,
    lineHeight: 21.25,
    color: 'rgba(0,0,0,0.7)',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginHorizontal: 17,
  },
  content: {
    flex: 0.5,
    justifyContent: 'space-around',
  },
  signInButton: {
    marginBottom: 10,
  },
});
