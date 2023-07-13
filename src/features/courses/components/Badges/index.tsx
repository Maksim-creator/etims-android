import React from 'react';
import {ScrollView, View} from 'react-native';
import InterText from '../../../../components/InterText';
import {Badge} from '../../screens/Courses';
import {badgeStyle, styles} from './styles';

interface Props {
  badges: Badge[];
}

const Badges: React.FC<Props> = ({badges}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      {badges.map((badge, idx) => (
        <View key={idx} style={badgeStyle(badge.color, idx).badge}>
          <InterText style={styles.badgeTitle}>{badge.title}</InterText>
        </View>
      ))}
    </ScrollView>
  );
};

export default Badges;
