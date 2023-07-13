import {StyleSheet} from 'react-native';

export default StyleSheet.create<any>({
  container: {flex: 1, marginHorizontal: 10},
  header: {flex: 0.15, marginTop: 10},
  content: (isCoursesEmpty: boolean) => ({
    flex: 0.75,
    justifyContent: isCoursesEmpty ? 'center' : 'flex-start',
  }),
});
