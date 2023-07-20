import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PoppinsText from '../../../../components/PoppinsText';
import {Category} from '../../screens/Courses';
import styles from './styles';

interface Props {
  categories: Category[];
  selectedTopic: string;
  handleTopicChange: (value: string) => void;
}

const Categories: React.FC<Props> = ({
  categories,
  selectedTopic,
  handleTopicChange,
}) => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}>
      {categories.map((category, index) => {
        const isSelected = selectedTopic === category.value;

        return (
          <TouchableOpacity
            key={category.value}
            onPress={() => handleTopicChange(category.value)}
            style={styles.button(isSelected, category.color, index)}>
            <View style={styles.iconContainer(isSelected, category.color)}>
              <Icon
                name={category.iconName}
                color={isSelected ? category.color : 'white'}
                size={20}
              />
            </View>
            <PoppinsText style={styles.name(isSelected)}>
              {category.title}
            </PoppinsText>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Categories;
