import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    flexDirection: 'row',
    marginVertical: 4,
  },
  badgeTitle: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Inter-Medium',
  },
});

export const badgeStyle = (color: string, index: number) =>
  StyleSheet.create({
    badge: {
      backgroundColor: color,
      paddingHorizontal: 7,
      paddingVertical: 3,
      borderRadius: 10,
      marginHorizontal: index ? 3 : 0,
      justifyContent: 'center',
      alignItems: 'center',
      height: 22,
    },
  });
