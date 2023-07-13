import {StyleSheet} from 'react-native';
import {mainBlue} from '../../../../../assets/colors';

export default StyleSheet.create<any>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  itemContainer: {flexDirection: 'row', alignItems: 'center'},
  topic: (selected: boolean) => ({
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: selected ? mainBlue : 'transparent',
  }),
  topicTitle: (selected: boolean) => ({
    color: selected ? mainBlue : 'rgba(0,0,0,0.4)',
    fontFamily: 'Inter-SemiBold',
  }),
  showMoreButton: {
    marginLeft: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 8,
    padding: 6,
  },
  filtersWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.05)',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  filterItem: (selected: boolean) => ({
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    borderRadius: 3,
    padding: 2,
    backgroundColor: selected ? 'white' : 'transparent',
  }),
});
