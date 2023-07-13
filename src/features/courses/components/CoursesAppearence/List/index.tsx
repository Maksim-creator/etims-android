import React, {useEffect} from 'react';
import {Animated, FlatList, Image, ListRenderItem, View} from 'react-native';
import {Course} from '../../../screens/Courses';
import InterText from '../../../../../components/InterText';
import styles from './styles';
import Badges from '../../Badges';

interface Props {
  courses: Course[];
  animatedCards: Animated.Value[];
  animateCards: () => void;
}

const List: React.FC<Props> = ({courses, animatedCards, animateCards}) => {
  useEffect(() => animateCards(), [animatedCards]);

  const renderItem: ListRenderItem<Course> = ({item, index}) => {
    return (
      <Animated.View
        style={[
          styles.itemContainer(index),
          {
            opacity: animatedCards[index],
            transform: [
              {
                translateY: Animated.multiply(
                  animatedCards[index],
                  new Animated.Value(-4),
                ),
              },
            ],
          },
        ]}>
        <Image source={{uri: item.image}} style={styles.logo} />
        <View style={styles.itemContent}>
          <View style={styles.generalInfo}>
            <InterText style={styles.title}>{item.title}</InterText>
            <Badges badges={item.badges} />
            <InterText style={styles.author}>by {item.author}</InterText>
          </View>
          <View>
            <View style={styles.progressContainer}>
              <View style={styles.fullLine} />
              <View style={styles.progress(item.completed)} />
            </View>
            <InterText style={styles.completedText}>
              {item.completed}% completed
            </InterText>
          </View>
        </View>
      </Animated.View>
    );
  };

  const keyExtractor = (item: Course) => item.title;

  return (
    <FlatList
      data={courses}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default List;
