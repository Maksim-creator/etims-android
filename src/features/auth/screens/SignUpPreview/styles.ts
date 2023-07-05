import {StyleSheet} from 'react-native';
import {grey, mainBlue} from '../../../../../assets/colors';

export default StyleSheet.create({
  socialNetwork: {
    justifyContent: 'flex-start',
    borderColor: grey,
    borderRadius: 28,
    paddingVertical: 17,
    marginVertical: 7,
    backgroundColor: 'white',
  },
  socialNetworkText: {color: 'black'},
  container: {flex: 1},
  content: {
    flex: 0.85,
    backgroundColor: 'rgba(240, 243, 251, 1)',
    borderRadius: 32,
    marginHorizontal: 10,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingTop: 31,
    paddingBottom: 34,
    justifyContent: 'space-between',
  },
  greeting: {paddingBottom: 31},
  loginContainer: {
    flex: 0.15,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  loginText: {color: mainBlue, fontFamily: 'Inter-SemiBold'},
});
