import { createContext } from 'react';

const Challenges = [
  {
    id: 1,
    title: 'Challenge Title 01',
    content:
      'Lorem ipsum dolor sit amet consectetur. Sit lorem in mi mattis lobortis elementum. At orci tristique velit tristique sodales quisque. Odio integer odio sem suspendisse ultricies sit ultricies eu mauris. ',
    languages: ['HTML', 'CSS'],
    level: 'Iniciante ',
    image: 'desafio.jpg',
    figma:
      'https://www.figma.com/file/CDu67eb1pSKe0aWKUcFOlM/Untitled?type=design&mode=design&t=62r6Qd4V0o6Xedfr-1',
  },
  {
    id: 2,
    title: 'Challenge Title 02',
    content:
      'Lorem ipsum dolor sit amet consectetur. Sit lorem in mi mattis lobortis elementum. At orci tristique velit tristique sodales quisque. Odio integer odio sem suspendisse ultricies sit ultricies eu mauris. ',
    languages: ['HTML', 'CSS'],
    level: 'Iniciante ',
    image: 'Challengs.jpg',
    figma:
      'https://www.figma.com/file/D2Lti0Nkxsl4PEzPvxTzt9/Untitled?type=design&mode=design&t=62r6Qd4V0o6Xedfr-1',
  },
  {
    id: 3,
    title: 'Challenge Title 03',
    content:
      'Lorem ipsum dolor sit amet consectetur. Sit lorem in mi mattis lobortis elementum. At orci tristique velit tristique sodales quisque. Odio integer odio sem suspendisse ultricies sit ultricies eu mauris. ',
    languages: ['HTML', 'CSS'],
    level: 'Iniciante ',
    image: 'desafio.jpg',
    figma:
      'https://www.figma.com/file/CDu67eb1pSKe0aWKUcFOlM/Untitled?type=design&mode=design&t=62r6Qd4V0o6Xedfr-1',
  },
  {
    id: 4,
    title: 'Challenge Title 04',
    content:
      'Lorem ipsum dolor sit amet consectetur. Sit lorem in mi mattis lobortis elementum. At orci tristique velit tristique sodales quisque. Odio integer odio sem suspendisse ultricies sit ultricies eu mauris. ',
    languages: ['HTML', 'CSS'],
    level: 'Iniciante ',
    image: 'Challengs.jpg',
    figma:
      'https://www.figma.com/file/D2Lti0Nkxsl4PEzPvxTzt9/Untitled?type=design&mode=design&t=62r6Qd4V0o6Xedfr-1',
  },
  {
    id: 5,
    title: 'Challenge Title 05',
    content:
      'Lorem ipsum dolor sit amet consectetur. Sit lorem in mi mattis lobortis elementum. At orci tristique velit tristique sodales quisque. Odio integer odio sem suspendisse ultricies sit ultricies eu mauris. ',
    languages: ['HTML', 'CSS'],
    level: 'Iniciante ',
    image: 'desafio.jpg',
    figma:
      'https://www.figma.com/file/CDu67eb1pSKe0aWKUcFOlM/Untitled?type=design&mode=design&t=62r6Qd4V0o6Xedfr-1',
  },
  {
    id: 6,
    title: 'Challenge Title 06',
    content:
      'Lorem ipsum dolor sit amet consectetur. Sit lorem in mi mattis lobortis elementum. At orci tristique velit tristique sodales quisque. Odio integer odio sem suspendisse ultricies sit ultricies eu mauris. ',
    languages: ['HTML', 'CSS'],
    level: 'Iniciante ',
    image: 'Challengs.jpg',
    figma:
      'https://www.figma.com/file/D2Lti0Nkxsl4PEzPvxTzt9/Untitled?type=design&mode=design&t=62r6Qd4V0o6Xedfr-1',
  },
];
export const DataChallengesContext = createContext(Challenges);
