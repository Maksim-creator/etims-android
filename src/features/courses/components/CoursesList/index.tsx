import React, {useMemo} from 'react';
import {Animated, Easing, View} from 'react-native';
import List from '../CoursesAppearence/List';
import Tiles from '../CoursesAppearence/Tiles';
import styles from './styles';

interface Props {
  courses: any[];
  filter: number;
}

const CoursesList: React.FC<Props> = ({filter, courses}) => {
  const animatedCards = useMemo(
    () => courses.map(_ => new Animated.Value(0)),
    [courses],
  );

  const animateCards = () => {
    const animations = courses.map((_, index) => {
      return Animated.timing(animatedCards[index], {
        toValue: 1,
        useNativeDriver: true,
        duration: 400,
        easing: Easing.linear,
      });
    });
    Animated.stagger(200, animations).start();
  };

  return (
    <View style={styles.container}>
      {!filter ? (
        <List
          courses={courses}
          animatedCards={animatedCards}
          animateCards={animateCards}
        />
      ) : (
        <Tiles
          courses={courses}
          animatedCards={animatedCards}
          animateCards={animateCards}
        />
      )}
    </View>
  );
};

export default CoursesList;
