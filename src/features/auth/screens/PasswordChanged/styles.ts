import {StyleSheet} from 'react-native';
import {mainBlue} from '../../../../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  content: {flex: 0.6, justifyContent: 'flex-start'},
  stars: {
    position: 'relative',
    marginBottom: 26,
    alignSelf: 'center',
    height: 100,
    width: 150,
  },
  firstStar: {
    position: 'absolute',
    left: 40,
    transform: [{scale: 1.2}],
  },
  secondStar: {
    position: 'absolute',
    transform: [{scale: 0.9}],
    left: 75,
    top: 45,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    color: mainBlue,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.7)',
    textAlign: 'center',
    paddingTop: 13,
    paddingBottom: 38,
  },
  button: {paddingVertical: 17},
});
