import {StyleSheet} from 'react-native';
import {mainBlue} from '../../../../../../assets/colors';

export default StyleSheet.create<any>({
  itemContainer: (index: number) => ({
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowRadius: 2,
    marginHorizontal: 4,
    shadowOpacity: 0.5,
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffset: {width: 4, height: 4},
    marginTop: index ? 10 : 0,
    marginBottom: 7,
    paddingVertical: 10,
    paddingHorizontal: 10,
    elevation: 5,
  }),
  logo: {width: '33%', height: 100, borderRadius: 20, alignSelf: 'center'},
  itemContent: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingRight: 8,
    width: '67%',
  },
  title: {fontFamily: 'Inter-SemiBold', fontSize: 16},
  author: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#A6A6A6',
    paddingVertical: 4,
  },
  progressContainer: {
    // flexDirection: 'row',
    position: 'relative',
    borderRadius: 100,
    height: 6,
    width: '100%',
  },
  fullLine: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: '100%',
    height: 6,
    position: 'absolute',
    borderRadius: 100,
  },
  progress: (completed: number) => ({
    backgroundColor: mainBlue,
    position: 'absolute',
    height: 6,
    borderRadius: 100,
    width: `${completed}%`,
  }),
  completedText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    paddingTop: 3,
  },
  generalInfo: {flex: 1},
});
