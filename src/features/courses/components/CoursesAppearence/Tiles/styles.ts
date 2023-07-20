import {StyleSheet} from 'react-native';
import {mainBlue} from '../../../../../../assets/colors';

export default StyleSheet.create<any>({
  itemContainer: {
    marginTop: 5,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginBottom: 10,
    shadowRadius: 1,
    shadowOpacity: 0.3,
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffset: {width: 0, height: 4},
    borderRadius: 10,
    elevation: 5,
  },
  logo: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
  },
  generalInfo: {paddingTop: 6, paddingBottom: 9},
  itemTitle: {fontFamily: 'Poppins-Regular', fontSize: 18},
  itemDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#787A80',
    paddingTop: 4,
  },
  otherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
  },
  authorAvatar: {width: 30, height: 30, borderRadius: 100},
  divider: {
    height: 25,
    width: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 100,
    marginHorizontal: 5,
  },
  authorName: {color: '#787A80', fontSize: 12},
  progressContainer: {
    // flexDirection: 'row',
    position: 'relative',
    borderRadius: 100,
    height: 8,
    width: '100%',
  },
  fullLine: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: '100%',
    height: 8,
    position: 'absolute',
    borderRadius: 100,
  },
  progress: (completed: number) => ({
    backgroundColor: mainBlue,
    position: 'absolute',
    height: 4,
    top: 2,
    borderRadius: 100,
    width: `${completed}%`,
  }),
  completedText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  completed: {paddingBottom: 1},
});
