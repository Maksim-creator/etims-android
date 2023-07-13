import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {mint, orange} from '../../../../../assets/colors';
import Header from '../../components/Header';
import Filters from '../../components/Filters';
import CoursesNotFound from '../../components/CoursesNotFound';
import CoursesList from '../../components/CoursesList';
import styles from './styles';

export interface Badge {
  title: string;
  value: string;
  color: string;
}

export interface Course {
  title: string;
  description: string;
  image: string;
  author: string;
  authorAvatar: string;
  badges: Badge[];
  completed: number;
}

const topics = [
  {title: 'All (30)', value: 'all'},
  {title: 'Favorites (4)', value: 'favorites'},
];

const filters = [{icon: 'format-list-bulleted'}, {icon: 'dock-window'}];

const courses: Course[] = [
  {
    title: 'Project Management',
    description:
      'The course is intended to improve your programming skills in Python. ',
    image:
      'https://responsewebrecruitment.co.uk/wp-content/uploads/2017/04/HR-TRENDS.jpg',
    author: 'Jerome Bell',
    authorAvatar:
      'https://responsewebrecruitment.co.uk/wp-content/uploads/2017/04/HR-TRENDS.jpg',
    badges: [
      {title: 'Favorites', value: 'favorites', color: mint},
      {title: 'HR & Recruiting', value: 'recruiting', color: orange},
    ],
    completed: 50,
  },
  {
    title: 'Programming for beginners in Python',
    description:
      'The course is intended to improve your programming skills in Python.',
    image:
      'https://spectrum.ieee.org/media-library/the-python-logo-on-top-of-imagery-representing-dna-sequencing-or-other-data.jpg?id=33364099&width=980',
    author: 'Jerome Bell',
    authorAvatar:
      'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
    badges: [{title: 'Favorites', value: 'favorites', color: mint}],
    completed: 20,
  },
  {
    title: 'Computer Networking',
    description:
      'The course is intended to improve your programming skills in Python.',
    image:
      'https://media.geeksforgeeks.org/wp-content/uploads/20230406152358/CN-(1).jpg',
    author: 'Jerome Bell',
    authorAvatar:
      'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
    badges: [{title: 'Favorites', value: 'favorites', color: mint}],
    completed: 80,
  },
];

const Courses = () => {
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [filter, setFilter] = useState(0);

  const changeTopic = (topic: string) => {
    setSelectedTopic(topic);
  };

  const changeFilter = (f: number) => {
    setFilter(f);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Filters
          topics={topics}
          selectedTopic={selectedTopic}
          changeTopic={changeTopic}
          filters={filters}
          filter={filter}
          changeFilter={changeFilter}
        />
      </View>
      <View style={styles.content(!courses.length)}>
        {!courses.length ? (
          <CoursesNotFound />
        ) : (
          <CoursesList courses={courses} filter={filter} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Courses;
