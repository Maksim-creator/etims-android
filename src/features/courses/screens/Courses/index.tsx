import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Input} from 'native-base';
import Header from '../../components/Header';
import Filters from '../../components/Filters';
import CoursesNotFound from '../../components/CoursesNotFound';
import CoursesList from '../../components/CoursesList';
import Categories from '../../components/Categories';
import {Course} from '../../utils/entities';
import {categories, courses} from '../../utils/constants';
import styles from './styles';

const Courses = () => {
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [search, setSearch] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [displaying, setDisplaying] = useState(0);
  const [filter, setFilter] = useState('');

  const handleSearch = (text: string) => {
    setSearch(text);
  };

  const handleTopicChange = (topic: string) => {
    setSelectedTopic(topic);
  };
  const cleanFilters = () => {
    setFilter('');
    setSearch('');
  };

  const filterByName = (arr: Course[]) => {
    if (filter === 'name') {
      return arr.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      return arr;
    }
  };

  const filterBySearch = (arr: Course[]) => {
    if (search) {
      return arr.filter(item => {
        return item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      });
    } else {
      return arr;
    }
  };

  const filterByCompleted = (arr: Course[]) => {
    if (filter === 'completed') {
      return arr.sort((a, b) => a.completed - b.completed);
    } else {
      return arr;
    }
  };

  useEffect(() => {
    const newArr = [...courses];
    const filtered = filterBySearch(filterByName(filterByCompleted(newArr)));

    const byTopic =
      selectedTopic === 'all'
        ? filtered
        : filtered.filter(item =>
            item.badges.find(i => i.value === selectedTopic),
          );
    setFilteredCourses(byTopic);
  }, [search, filter, selectedTopic]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header />
        <View style={styles.filters}>
          <Input
            value={search}
            onChangeText={handleSearch}
            w={'85%'}
            mr={2}
            borderWidth={0}
            borderRadius={15}
            backgroundColor={'white'}
            placeholder={'Search'}
            style={styles.search}
            InputRightElement={
              <Icon name={'magnify'} size={25} style={styles.searchIcon} />
            }
          />
          <Filters
            displaying={displaying}
            setDisplaying={setDisplaying}
            filter={filter}
            setFilter={setFilter}
            cleanFilters={cleanFilters}
          />
        </View>
        <Categories
          categories={categories}
          selectedTopic={selectedTopic}
          handleTopicChange={handleTopicChange}
        />
      </View>
      <View style={styles.content(!filteredCourses.length)}>
        {!filteredCourses.length ? (
          <CoursesNotFound />
        ) : (
          <CoursesList courses={filteredCourses} displaying={displaying} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Courses;
