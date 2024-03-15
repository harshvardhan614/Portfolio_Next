/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "EcoTracker",
    description: "Track your carbon footprint",
    date: "2022-08-15",
    demoLink: "https://ecotracker.example.com",
  },
  {
    id: 2,
    name: "ArtGallery Online",
    description: "Digital art showcase platform",
    date: "2022-06-20",
    demoLink: "https://artgalleryonline.example.com",
  },
  {
    id: 3,
    name: "BudgetPlanner",
    description: "Plan and track expenses",
    date: "2022-09-10",
    demoLink: "https://budgetplanner.example.com",
  },
  {
    id: 4,
    name: "HealthBeat",
    description: "Monitor heart rate zones",
    date: "2022-05-30",
    demoLink: "https://healthbeat.example.com",
  },
  {
    id: 5,
    name: "RecipeFinder",
    description: "Discover new recipes",
    date: "2022-07-12",
    demoLink: "https://recipefinder.example.com",
  },
  {
    id: 6,
    name: "JourneyLogger",
    description: "Log your travels",
    date: "2022-10-01",
    demoLink: "https://journeylogger.example.com",
  },
  {
    id: 7,
    name: "StudyBuddy",
    description: "Collaborative learning platform",
    date: "2022-04-18",
    demoLink: "https://studybuddy.example.com",
  },
  {
    id: 8,
    name: "TechTalk",
    description: "Tech news aggregator",
    date: "2022-11-05",
    demoLink: "https://techtalk.example.com",
  },
  {
    id: 9,
    name: "FitTrack",
    description: "Fitness and workout tracker",
    date: "2022-03-22",
    demoLink: "https://fittrack.example.com",
  },
  {
    id: 10,
    name: "MindfulMoments",
    description: "Meditation and mindfulness app",
    date: "2022-02-14",
    demoLink: "https://mindfulmoments.example.com",
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Experience", link: "/experience", icon: "work", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/harshvardhan614",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/harshvardhan614",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "X",
    link: "https://twitter.com/HARSHVA99743638",
    icon: "twitter",
    newTab: true,
  },  
];

// export const skills = [
//   {
//     title: "Web Development",
//     icon: "web_icon.png",
//     skills:
//      {
//       HTML: { "skillValue": "Advanced", "percentageValue": 90 },
//       CSS: { "skillValue": "Intermediate", "percentageValue": 70 },
//       JavaScript: { "skillValue": "Advanced", "percentageValue": 90 },
//       React: { "skillValue": "Intermediate", "percentageValue": 70 }
//     }
//   }
// ]

export const Frontend_skill = [
  {
    skill_name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java Script",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    Image: "/mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    Image: "/reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Type Script",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
];

export const Backend_skill = [
  {
    skill_name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express js",
    Image: "/express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Fire base",
    Image: "/Firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "Postger SQL",
    Image: "/postger.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "My SQL",
    Image: "/mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    Image: "/prisma.webp",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    Image: "/graphql.png",
    width: 80,
    height: 80,
  },
];

export const Full_stack = [
  {
    skill_name: "React Native",
    Image: "/ReactNative .png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    Image: "/tauri.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    Image: "/docker.webp",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    Image: "/figma.png",
    width: 50,
    height: 50,
  },

];

export const Tools = [
  {
    skill_name: "VS Code",
    Image: "/vscode.svg",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Github",
    Image: "/github.svg",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Vercel",
    Image: "/vercel.svg",
    width: 60,
    height: 60,
  },
];

export const Other_skill = [
  {
    skill_name: "ThreeJS",
    Image: "/threejs.svg",
    width: 60,
    height: 60,
  },
];


