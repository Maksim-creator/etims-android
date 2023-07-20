import React, {useEffect} from 'react';
import {Animated, FlatList, Image, ListRenderItem, View} from 'react-native';
import InterText from '../../../../../components/InterText';
import Badges from '../../Badges';
import {Course} from '../../../utils/entities';
import styles from './styles';

interface Props {
  courses: Course[];
  animatedCards: Animated.Value[];
  animateCards: () => void;
}

const List: React.FC<Props> = ({courses, animatedCards, animateCards}) => {
  useEffect(() => animateCards(), [animateCards]);

  const renderItem: ListRenderItem<Course> = ({item, index}) => {
    return (
      <Animated.View
        style={[
          styles.itemContainer,
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
        <Image
          source={{uri: item.image}}
          style={styles.logo}
          resizeMode={'stretch'}
        />
        <View style={styles.itemContent}>
          <View style={styles.generalInfo}>
            <InterText style={styles.title} numberOfLines={1}>
              {item.title}
            </InterText>
            <Badges badges={item.badges} />
          </View>
          <View style={styles.completedWrapper}>
            <InterText style={styles.completedText}>
              {item.completed}% completed
            </InterText>
            <View style={styles.progressContainer}>
              <View style={styles.fullLine} />
              <View style={styles.progress(item.completed)} />
            </View>
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
