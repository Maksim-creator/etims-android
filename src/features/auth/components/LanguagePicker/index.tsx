import React, {useMemo, useState} from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Input from '../../../../components/Input';
import InterText from '../../../../components/InterText';
import styles from './styles';

interface Language {
  name: string;
  icon: string;
}

const languages: Language[] = [
  {
    name: 'English',
    icon: 'https://em-content.zobj.net/thumbs/240/apple/354/flag-united-kingdom_1f1ec-1f1e7.png',
  },
  {
    name: 'Ukraine',
    icon: 'https://em-content.zobj.net/thumbs/240/apple/354/flag-ukraine_1f1fa-1f1e6.png',
  },
  {
    name: 'German',
    icon: 'https://em-content.zobj.net/thumbs/240/apple/354/flag-germany_1f1e9-1f1ea.png',
  },
  {
    name: 'Italian',
    icon: 'https://em-content.zobj.net/thumbs/240/apple/354/flag-italy_1f1ee-1f1f9.png',
  },
];

interface Props {
  language: string;
  onChange: (value: string) => void;
}

const LanguagePicker: React.FC<Props> = ({language, onChange}) => {
  const [search, setSearch] = useState('');

  const handleSearch = (value: string) => setSearch(value);

  const filteredLanguages = useMemo(
    () =>
      languages.filter(lang => {
        if (!search.length) {
          return languages;
        }
        return lang.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      }),
    [search],
  );

  const renderItem: ListRenderItem<Language> = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onChange(item.name)}
        style={styles.item(language, item.name)}>
        <View style={styles.itemContent}>
          <Image source={{uri: item.icon}} style={styles.flag} />
          <InterText style={styles.langText}>{item.name}</InterText>
        </View>
        {language === item.name && (
          <View style={styles.checkbox}>
            <Icon name={'check'} color={'white'} size={15} />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Input
        value={search}
        onChange={handleSearch}
        placeholder={'Search'}
        inputStyles={styles.search}
        leftIcon={
          <Icon
            name={'magnify'}
            size={25}
            color={'rgba(0,0,0,0.5)'}
            style={styles.searchIcon}
          />
        }
      />
      <FlatList
        data={filteredLanguages}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default LanguagePicker;
