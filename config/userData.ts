export interface PersonalInfo {
  name: string;
  profession: string;
  email: string;
  github: string;
  twitter: string;
  linkedIn: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  link: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  Livelink?: string;
  gitHubLink: string;
  imageSrc?: string;
  date: string;
  working?: boolean;
}

export interface LastUpdated {
  date: string;
  time: string;
}

export interface UserData {
  personalInfo: PersonalInfo;
  about: string;
  experience: Experience[];
  projects: Project[];
  lastUpdated: LastUpdated;
}

const userData: UserData = {
  personalInfo: {
    name: "DIVYAM SHARMA",
    profession: "SOFTWARE ENGINEER",
    email: "divyam.7379@gmail.com",
    github: "https://github.com/div02-afk",
    twitter: "https://x.com/DivyamsSharma",
    linkedIn: "https://www.linkedin.com/in/sharma-divyam/",
  },
  about:
    "Hello, I'm Divyam.\n I create software that solves problems and scales, always learning by trying a bit of everything.",
  experience: [
    {
      id: 1,
      role: "Software Engineer Intern",
      company: "Mastercard",
      startDate: "May 2025",
      endDate: "Jul 2025",
      link: "https://www.mastercard.com/",
    },
    {
      id: 2,
      role: "Backend developer Intern",
      company: "LeadExpo",
      startDate: "Jan 2025",
      endDate: "Mar 2025",
      link: "",
    },

  ],
  projects: [
    {
      title: "Light Hooks",
      description: "A React and TypeScript based hook library for rapid web development.",
      tags: ["Typescript","React.js"],
      Livelink: "https://www.lighthooks.com/",
      gitHubLink: "https://github.com/Gourav2609/light-hooks",
      imageSrc: "/projects/lighthooks.webp",
      date: "AUG 2025",
      working: false,
    },
    {
      title: "MEET-BOT",
      description: "Real-Time Meeting Transcription Made Effortless",
      tags: ["NODE.JS", "WebSocket", "Redis", "Puppeteer"],
      gitHubLink: "https://github.com/Lokendrakushwah12/meet-bot",
      imageSrc: "/projects/meet-bot.webp",
      date: "MAR 2025",
      working: false,
    },
    {
      title: "Cauldron",
      description:
        "Video generation platform that allows users to create videos using AI.",
      tags: [
        "REACT.JS",
        "MOVIEPY",
        "PYTHON",
        "PILLOW",
        "EDGE TTS",
        "BEAUTIFULSOUP",
      ],
      Livelink: "https://cauldron-nine.vercel.app/",
      gitHubLink: "https://github.com/Statwals/cauldron",
      imageSrc: "/projects/cauldron.webp",
      date: "OCT 2024",
      working: false,
    },
    
  ],
  lastUpdated: {
    date: "SEPT 02, 2025",
    time: "23:36 PM IST",
  },
};

export default userData;
