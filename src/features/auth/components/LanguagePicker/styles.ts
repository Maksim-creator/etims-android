import {StyleSheet} from 'react-native';
import {mainBlue} from '../../../../../assets/colors';

export default StyleSheet.create<any>({
  item: (language: string, name: string) => ({
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    paddingVertical: 12,
    marginVertical: 3,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: language === name ? 'rgba(216, 218, 220, 1)' : 'white',
    backgroundColor: language === name ? 'rgba(244, 245, 246, 1)' : 'white',
  }),
  itemContent: {flexDirection: 'row', alignItems: 'center'},
  flag: {width: 30, height: 20},
  langText: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.7)',
    paddingLeft: 18,
  },
  checkbox: {
    backgroundColor: mainBlue,
    borderRadius: 100,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {borderRadius: 10},
  searchIcon: {
    position: 'absolute',
    zIndex: 100,
    top: '28%',
    paddingHorizontal: 10,
  },
  list: {marginVertical: 15},
});
