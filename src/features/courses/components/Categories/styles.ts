import {StyleSheet} from 'react-native';

export default StyleSheet.create<any>({
  container: {marginBottom: 10},
  button: (isSelected: boolean, color: string, index: number) => ({
    backgroundColor: isSelected ? color : 'white',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginLeft: index ? 10 : 0,
    ...(isSelected && {
      shadowColor: color,
      shadowOpacity: 0.5,
      shadowRadius: 3,
      shadowOffset: {width: 0, height: 4},
    }),
  }),
  iconContainer: (isSelected: boolean, color: string) => ({
    backgroundColor: isSelected ? 'white' : color,
    borderRadius: 100,
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  name: (isSelected: boolean) => ({
    marginLeft: 10,
    color: isSelected ? 'white' : 'black',
  }),
});
