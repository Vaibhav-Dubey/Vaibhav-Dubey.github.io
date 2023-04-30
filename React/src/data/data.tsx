import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.png';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Vaibhav Dubey',
  description: "A website about me !!",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Vaibhav Dubey.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a mumbai based <strong className="text-stone-100">Software Engineer</strong>, currently working
        at <strong className="text-stone-100">LTImindtree</strong> helping build web apps and integrate third party apps to client web apps.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training for <strong className="text-stone-100">a Marathon or in the Gym</strong>,
        spending time on my <strong className="text-stone-100"> console</strong>, or playing{' '}
        <strong className="text-stone-100">Football</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assests/Resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a trained full stack MERN developer with expertise in nodejs. Django and Flask are some python frameworks that I have dabbled in every now and then.
  I have had good opportunities to work both individually and as a part of a team on interactive full stack projects in the industry along with being an avid practitioner of agile methodologie`,
  aboutItems: [
    {label: 'Location', text: 'Mumbai,India', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Football, Blogging , Gaming', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Mumbai', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Senior Software Engineer', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 10,
      },
      {
        name: 'Marathi',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Typescript',
        level: 5,
      },
      {
        name: 'HTML - css - Bootstrap',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 7,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'Flutter',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Memories-SocialMedia App',
    description: 'A webapp where users can add photos , comments, like to the photos. CRUD application with React-Redux functionalities.',
    url: 'https://github.com/Vaibhav-Dubey/Memories-SocialMediaApp',
    image: porfolioImage1,
  },
  {
    title: 'Vaibhav Personal Website',
    description: 'Personal website made with only css , bootstrap and html (not updated the info though :P)',
    url: 'https://github.com/Vaibhav-Dubey/Vaibhav-Dubey.github.io',
    image: porfolioImage2,
  },
  {
    title: 'Drowsy Driver Detection System',
    description: 'A python project that tracks eye lids of a person using open cv module',
    url: 'https://github.com/Vaibhav-Dubey/DrowsyDriver',
    image: porfolioImage3,
  },
  {
    title: 'CryptoVerse',
    description: 'React app that gives information about latest cryptopcurrencies',
    url: 'https://github.com/Vaibhav-Dubey/cryptoverse',
    image: porfolioImage4,
  },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage5,
  // },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2017 - 2021',
    location: 'Father Conceicao Rodrigues Institute of Technology, Navi Mumbai, University of Mumbai',
    title: 'Bachelor of Engineering in Electronics and Telecommunication,',
    content: <p>CGPA : 9.23/10</p>,
  },
  // {
  //   date: 'March 2003',
  //   location: 'School of Business',
  //   title: 'What did you study 101',
  //   content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  // },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jul 21 - Present',
    location: 'LTIMindtree',
    title: 'Senior Software Engineer',
    content: (
      <p>
        Formally trained in Full Stack Development, Agile Methodologies, and DevOps Concepts. Working in the
        Insurance Tech Unit, and assigned to a project involving the MERN stack.
        Working on the Development of Integrations for the Client's Website.
        Enhancing and making the present code base bug free with code improvements.
      </p>
    ),
  },
  {
    date: 'May 2020 - March 2021',
    location: ' Botonomics Automation',
    title: 'Trainee Backend Developer',
    content: (
      <p>
        Worked on creating a Drupal Integration for the Company website.
        Developed a web app for a sub-product using Django.
        Developed a Bot in the telegram app to communicate through a desktop app.
        Worked on frontEnd of the firm's mobile application on flutter.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Mr Praveen Sharma',
      text: 'Vaibhav is a skilled developer and is able to work individually and with the team excellently on any of the user stories that are assigned to him. He has an eye for detail and always is thorough with his analysis and preparation of different tasks and client presentations. He is always ready to help others to expedite overall delivery. The client has always appreciated his communication skill, asking the right set of questions during the client call. He has got a product engineering mindset for implementing the Delivery unit projects for the client in the stipulated time.',
      image: 'https://media.licdn.com/dms/image/C4E03AQGG-qU1SCOi5A/profile-displayphoto-shrink_800_800/0/1516993561441?e=1683763200&v=beta&t=GpKrhZITqa_3auXBuA_jkkLqPgBGT-E_7Wc-uVQr3nU',
    },
    {
      name: 'Dr Megha Kolhekar',
      text: 'I have known Vaibhav for about three years now. Having taught him courses in Image Processing & Machine Vision and Neural Networks & Fuzzy Logic; I have got to know him quite well. The most striking features of his academic personality are his intelligence, keen interest, not taking concepts in their face values, learning through experimenting, meticulousness, and good hand in technical articulation. He is very observant, frames his questions so rightfully that they provide a deeper insight',
      image: 'https://media.licdn.com/dms/image/C4D03AQF4Uk4kwGOGbg/profile-displayphoto-shrink_800_800/0/1517232249230?e=1683763200&v=beta&t=k6ebELr1UEcnc7zxTJxrpfQRfXNw6r-fwbJP27PkzSc',
    },
    {
      name: 'Ms Anjali Sherikar',
      text: 'Vaibhav is a very passionate and hardworking developer. He is always willing to give his best in every situation. He consistently delivered quality work well in time. He takes on complex technology problems head-on and is very persistent in learning and solving them. His out-of-the-box thinking has earned him appreciation from client as well. He is a team player who has always helped everyone to complete the tasks before deadline. It was a great time working with him! I will recommend him to anyone who is hiring, he will be a very important asset and contributing member in the team.',
      image: 'https://media.licdn.com/dms/image/D4D03AQGd6rNN2qUy0A/profile-displayphoto-shrink_800_800/0/1668853026163?e=1683763200&v=beta&t=LMDodugMQL_7EynZpTG6nHh2O8OX52BwQujZD4-dAMI',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Please make sure to contact me if you any questions or are interested in the work I have done.',
  items: [
    {
      type: ContactType.Email,
      text: 'vaibhavdubey1999@gmail.com',
      href: 'mailto:vaibhavdubey1999@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Mumbai, India',
      href: 'https://goo.gl/maps/zMEztWQ6cBjz5FP29',
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    {
      type: ContactType.Github,
      text: 'Vaibhav-Dubey',
      href: 'https://github.com/Vaibhav-Dubey',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Vaibhav-Dubey'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/vaibhav-dubey-2a3295131/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/vaibhavdubey2499/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/ayee_dubey'},
];
