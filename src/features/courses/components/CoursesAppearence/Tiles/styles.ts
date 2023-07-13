import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  itemContainer: {
    marginTop: 5,
    backgroundColor: 'white',
    width: '48%',
    marginHorizontal: 3,
    marginBottom: 10,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowColor: 'rgba(0,0,0,0.4)',
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
    paddingHorizontal: 6,
    justifyContent: 'space-between',
  },
  generalInfo: {paddingTop: 6, paddingBottom: 12},
  itemTitle: {fontFamily: 'Inter-SemiBold', fontSize: 17},
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
  columnWrapper: {justifyContent: 'space-between'},
});
