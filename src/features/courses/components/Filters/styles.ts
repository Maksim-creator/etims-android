import {StyleSheet} from 'react-native';
import {mainBlue} from '../../../../../assets/colors';

export default StyleSheet.create<any>({
  trigger: {
    backgroundColor: mainBlue,
    width: 50,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  displayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.05)',
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    marginBottom: 5,
    fontSize: 16,
  },
  displayListButton: (displaying: boolean) => ({
    backgroundColor: displaying ? 'transparent' : 'white',
  }),
  displayTilesButton: (displaying: boolean) => ({
    backgroundColor: displaying ? 'white' : 'transparent',
  }),
});
