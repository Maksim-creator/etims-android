import React, {useEffect} from 'react';
import {Course} from '../../../screens/Courses';
import {Animated, FlatList, Image, ListRenderItem, View} from 'react-native';
import InterText from '../../../../../components/InterText';
import Badges from '../../Badges';
import styles from './styles';

interface Props {
  courses: Course[];
  animatedCards: Animated.Value[];
  animateCards: () => void;
}

const Tiles: React.FC<Props> = ({courses, animatedCards, animateCards}) => {
  useEffect(() => animateCards(), [animateCards, animatedCards]);

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
          resizeMode={'cover'}
          style={styles.logo}
        />
        <View style={styles.content}>
          <View style={styles.generalInfo}>
            <Badges badges={item.badges} />

            <InterText style={styles.itemTitle}>{item.title}</InterText>
            <InterText numberOfLines={2} style={styles.itemDescription}>
              {item.description}
            </InterText>
          </View>
          <View style={styles.completed}>
            <InterText style={styles.completedText}>
              {item.completed}% completed
            </InterText>
            <View style={styles.progressContainer}>
              <View style={styles.fullLine} />
              <View style={styles.progress(item.completed)} />
            </View>
          </View>
          <View style={styles.otherInfo}>
            <Image
              source={{uri: item.authorAvatar}}
              style={styles.authorAvatar}
            />
            <View style={styles.divider} />
            <InterText style={styles.authorName}>by {item.author}</InterText>
          </View>
        </View>
      </Animated.View>
    );
  };

  const keyExtractor = (item: Course) => item.title;

  return (
    <FlatList
      // columnWrapperStyle={styles.columnWrapper}
      data={courses}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default Tiles;
