import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {mainBlue} from '../../../../../assets/colors';
import InterText from '../../../../components/InterText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

interface Props {
  topics: {value: string; title: string}[];
  selectedTopic: string;
  changeTopic: (value: string) => void;

  filters: {icon: string}[];
  filter: number;
  changeFilter: (value: number) => void;
}

const Filters: React.FC<Props> = ({
  topics,
  selectedTopic,
  changeTopic,
  filters,
  filter,
  changeFilter,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        {topics.map(topic => (
          <TouchableOpacity
            key={topic.value}
            onPress={() => changeTopic(topic.value)}
            style={styles.topic(topic.value === selectedTopic)}>
            <InterText style={styles.topicTitle(topic.value === selectedTopic)}>
              {topic.title}
            </InterText>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.showMoreButton}>
          <Icon name={'dots-horizontal'} size={20} color={mainBlue} />
        </TouchableOpacity>
      </View>
      <View style={styles.itemContainer}>
        <Icon name={'filter-outline'} size={25} color={'rgba(0,0,0,0.4)'} />
        <View style={styles.filtersWrapper}>
          {filters.map((f, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => changeFilter(i)}
              style={styles.filterItem(filter === i)}>
              <Icon name={f.icon} size={25} color={mainBlue} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Filters;
