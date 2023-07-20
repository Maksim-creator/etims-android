import {StyleSheet} from 'react-native';

export default StyleSheet.create<any>({
  container: {flex: 1, marginHorizontal: 10},
  header: {marginTop: 10, flex: 0.24},
  content: (isCoursesEmpty: boolean) => ({
    flex: 0.7,
    justifyContent: isCoursesEmpty ? 'center' : 'flex-start',
  }),
  filters: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 15,
  },
  search: {fontSize: 16},
  searchIcon: {right: 10},
});
