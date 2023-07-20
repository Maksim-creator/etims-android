import {mainBlue, mint, orange} from '../../../../assets/colors';
import {Category, Course} from './entities';

export const courses: Course[] = [
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

export const categories: Category[] = [
  {title: 'All', value: 'all', color: mainBlue, iconName: 'expand-all-outline'},
  {
    title: 'Favorites',
    value: 'favorites',
    color: mint,
    iconName: 'star-outline',
  },
  {
    title: 'HR & Recruiting',
    value: 'recruiting',
    color: orange,
    iconName: 'ballot-outline',
  },
];
