import { Project } from './project.model';

export const projectsData: Project[] = [
  {
    title: 'Fitness App',
    imageName: '../../../assets/fitness.card.jpg',
    description: 'Fitness app description.',
    tags: ['Typescript', 'Angular', 'Tailwind CSS'],
  },
  {
    title: 'Github-finder-react',
    imageName: '../../../assets/github.project.card.jpg',
    description:
      "Search for GitHub users and receive a profile and the user's repositories.",
    tags: ['JavaScript', 'React', 'Tailwind CSS', 'Daisy UI'],
  },
  {
    title: 'JAJA business page',
    imageName: '../../../assets/JAJA.card.jpg',
    description: 'JAJA app description.',
    tags: ['Typescript', 'Node.js', 'Express'],
  },
];
