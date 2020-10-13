import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Luther Wardle', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'welcome to the site', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "What's up, i'm ",
  name: 'Luther W',
  subtitle: 'A fullstack js developer and ethical hacker',
  cta: 'see more',
};

// ABOUT DATA
export const aboutData = {
  img: 'meyo.jpg',
  paragraphOne: "I aim to solve problems utilizing web development techniques combined with machine learning, networking and data projection.",
  paragraphTwo: "When I'm not keeping myself up on new frameworks and libraries, I'm normally testing out bug bounty programs looking for XSS and DOM vulnerability bugs in modern js libraries like React and Vue",
  paragraphThree: "I host all my source code on github and my static projects as github pages -> for the free SSL ;), for server side programs and applications I typically use heroku",
  resume: 'https://github.com/lwardlegit/resume/blob/main/newestResume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'randomquotes.png',
    title: 'The Random Quotes Generator',
    info: 'a classic for any simple portfolio, some neat quotes flashed at random',
    info2: 'hit for a random quote, powered by github pages',
    url: 'https://lwardlegit.github.io/A-Random-Quote-Generator/',
    repo: 'https://github.com/lwardlegit/A-Random-Quote-Generator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'reqmanage.png',
    title: 'Google Sheet Meeting Requester',
    info: 'Okay I maintain a lot of code for other people, mostly friends, but I also run a fairly large google apps script group on facebook.',
    info2: 'This app manages requests from people who email me and sends back default responses for me after I finish fixing their bugs! and is powered by apispreadsheets.com',
    url: 'https://lwardlegit.github.io/requestsManager/',
    repo: 'https://github.com/lwardlegit/requestsManager', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pagination.png',
    title: 'paginated results and search',
    info: 'this sample is a series of paginated results returned from a data array full of student objects',
    info2: 'the project also contains a search feature allowing you to search students by name',
    url: 'https://lwardlegit.github.io/paginationSample/',
    repo: 'https://github.com/lwardlegit/paginationSample', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'esrimap.png',
    title: 'esri arcgis environmental risk map',
    info: 'this application is an arcgis sample application showing current fires floods and earthquake data in a react js application',
    info2: 'the project also contains a search feature allowing you to search your current location and center the map on your search',
    url: '',
    repo: 'https://github.com/lwardlegit/esrimap', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'luthertester@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/luther-wardle-271a0a198/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/lwardlegit',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
