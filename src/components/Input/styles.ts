import {StyleSheet} from 'react-native';
import {grey} from '../../../assets/colors';

export default StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: grey,
    borderRadius: 5,
    paddingVertical: 17,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: 'white',
  },
  title: {
    paddingVertical: 6,
  },
  errorMessage: {
    paddingTop: 4,
    fontSize: 11,
    color: '#f62f2f',
  },
  searchContainer: {position: 'relative'},
});
