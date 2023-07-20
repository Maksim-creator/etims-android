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

export interface Category extends Badge {
  iconName: string;
}
