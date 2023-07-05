import {StyleSheet} from 'react-native';
import {grey, mainBlue} from '../../../../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  star: {
    flex: 0.1,
    alignItems: 'flex-end',
    paddingTop: 5,
    paddingLeft: 7,
  },
  content: {flex: 0.9},
  loginText: {fontFamily: 'Poppins-Bold', color: mainBlue, fontSize: 30},
  inputs: {paddingTop: 30},
  validationIconContainer: {
    backgroundColor: 'black',
    borderRadius: 100,
    position: 'absolute',
    right: 15,
    top: '30%',
    padding: 4,
  },
  passwordInput: {paddingTop: 22, paddingBottom: 15},
  passwordIcon: {position: 'absolute', right: 15, top: '30%'},
  forgotPasswordButton: {paddingBottom: 38, alignSelf: 'flex-end'},
  forgotPasswordText: {letterSpacing: 0.4},
  loginWithContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 38,
    paddingBottom: 22,
  },
  divider: {
    height: 1,
    flex: 0.4,
    backgroundColor: 'rgba(148,148,148,0.5)',
  },
  loginWithText: {paddingHorizontal: 10, flex: 0.3},
  socialNetworks: {flexDirection: 'row', justifyContent: 'space-between'},
  socialNetwork: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: grey,
    paddingVertical: 18,
    paddingHorizontal: 44,
  },
  signupContainer: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 15,
  },
  signupText: {color: mainBlue, fontFamily: 'Inter-Bold'},
});
