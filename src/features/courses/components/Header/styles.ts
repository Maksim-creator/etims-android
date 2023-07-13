import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {fontFamily: 'Poppins-Bold', fontSize: 30},
  content: {flexDirection: 'row', alignItems: 'center'},
  addCourseIcon: {paddingLeft: 0, paddingRight: 0},
  addCourseButton: {
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 10,
    marginRight: 5,
  },
  joinCourseButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 10,
    paddingVertical: 9,
    paddingHorizontal: 10,
  },
  joinCourseButtonText: {fontSize: 16, color: 'black'},
});
