//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiPhone,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// companies icons
import FullStackIcon from './assets/img/interest/full.png';
import FrontEndIcon from './assets/img/interest/front.png';
import MobileIcon from './assets/img/interest/mobile.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/bootstrap.png';
import SkillImg5 from './assets/img/skills/reactjs.png';
import SkillImg6 from './assets/img/skills/flutter.png';
import SkillImg7 from './assets/img/skills/linux.png';
import SkillImg8 from './assets/img/skills/c.png';
import SkillImg9 from './assets/img/skills/java.png';
import SkillImg10 from './assets/img/skills/php.png';
import SkillImg11 from './assets/img/skills/nodejs.png';
import SkillImg12 from './assets/img/skills/mysql.png';
import SkillImg13 from './assets/img/skills/git.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.jpg';
import TestiImage2 from './assets/img/testimonials/testimonial-2.jpg';
import TestiImage3 from './assets/img/testimonials/testimonial-3.png';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'skills',
    href: 'skills',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiGithub />,
    href: 'https://github.com/Dewz10',
  },

];

// companies
export const interests = [
  {
    img: FullStackIcon,
    href: '',
  },
  {
    img: FrontEndIcon,
    href: '',
  },
  {
    img: MobileIcon,
    href: '',
  },
  
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
  {
    image: SkillImg9,
  },
  {
    image: SkillImg10,
  },
  {
    image: SkillImg11,
  },
  {
    image: SkillImg12,
  },
  {
    image: SkillImg13,
  },

];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Domestic water management system project. Database Systems Management (CRUD PHP).',
    authorName: 'Autsadawut',
    authorPosition: 'Create web applications in MVC format using PHP and Bootstrap.',
    href: 'https://github.com/Dewz10/Domestic-water-management-system-project',
  },
  {
    authorImg: TestiImage2,
    authorText:
      ' Theater booking system  project. Java OOP (Object-Oriented Programming)',
    authorName: 'Autsadawut, Phattraporn, Theeraphat',
    authorPosition: 'Fetch data from the database to show information about each user, such as movie showtimes, movie tickets. And send data to the database. Design UI user page using java swing.',
    href: 'https://github.com/Dewz10/Theater-booking-system-project-',
  },
  {
    authorImg: <FiGithub />,
    authorText:
      'Github',
    authorName: 'autsadawut.kl',
    authorPosition: '',
    href: 'https://github.com/Dewz10',
  },
];

// contact
export const contact = [
  {
    icon: <FiPhone />,
    title: '098-087-0841',
    subtitle: 'I am here to help you.',
    description: 'Email me at hello@youremail.com',
  },
  {
    icon: <FiMail />,
    title: 'autsadawut.dew10@gmail.com',
    subtitle: 'I am here to help you.',
    description: 'Email me at hello@youremail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Nakhon Pathom, 73000',
    subtitle: 'Bucharest, Romania',
    description: 'Serving clients worldwide',
  },
];
