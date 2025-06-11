export interface PersonalInfo {
  name: string;
  profession: string;
  email: string;
  github: string;
  twitter: string;
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
  Livelink: string;
  gitHubLink: string;
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
    name: "LOKENDRA KUSHWAH",
    profession: "SOFTWARE ENGINEER",
    email: "Lokendrakushwah8051@gmail.com",
    github: "https://github.com/lokendrakushwah12",
    twitter: "https://x.com/lokendratwt",
  },
  about:
    "Hi, I'm Lokendra. A software engineer who codes and designs with purpose. I build standout products by blending problem-solving with design thinking — getting 1% better every day.",
  experience: [
    {
      id: 1,
      role: "Frontend Engineer",
      company: "Induced AI",
      startDate: "Apr 2025",
      endDate: "Present",
      link: "https://www.induced.ai/",
    },
    {
      id: 2,
      role: "Software developer Intern",
      company: "Unolo",
      startDate: "Feb 2025",
      endDate: "Apr 2025",
      link: "https://unolo.com",
    },
    {
      id: 3,
      role: "UI/UX Designer",
      company: "Snipe",
      startDate: "Aug 2024",
      endDate: "Jan 2025",
      link: "https://snipeit.ai",
    },
  ],
  projects: [
    {
      title: "VASKORA",
      description:
        "Swipe jobs, generate personalized cold emails, Resume & Messages and apply effortlessly—tailored to your resume.",
      tags: [
        "NEXT.JS",
        "REACT QUERY",
        "NODE.JS",
        "EXPRESS.JS",
        "TAILWIND CSS",
        "PUPPETEER",
      ],
      Livelink: "https://vaskora.vercel.app",
      gitHubLink: "https://github.com/Lokendrakushwah12/vaskora",
      date: "APR 2025",
      working: true,
    },
    {
      title: "CAULDRON",
      description:
        "Faceless Video Engine - Automate and dominate YouTube without ever showing your face!",
      tags: ["NEXT.JS", "TAILWIND CSS", "FIREBASE", "PYTHON"],
      Livelink: "https://cauldron.live",
      gitHubLink: "https://github.com/Statwarts/Cauldron",
      date: "JUN 2024",
      working: false,
    },
    {
      title: "ANUBHAV",
      description:
        "It is a web-based platform that offers articles and resources focused on college placements and interview experiences.",
      tags: [
        "REACT.JS",
        "TAILWIND CSS",
        "FRAMER MOTION",
        "NODE.JS",
        "EXPRESS.JS",
      ],
      Livelink: "https://anubhav.aitoss.club",
      gitHubLink: "https://github.com/aitoss/Anubhav-frontend-23",
      date: "OCT 2024",
      working: false,
    },
    {
      title: "PIXA/UI",
      description:
        "Pixa/UI - Curated collection of versatile Next.js components.",
      tags: ["NEXT.JS", "TAILWIND CSS", "FRAMER MOTION", "NPM PACKAGE"],
      Livelink: "https://pixaui.com",
      gitHubLink: "https://github.com/Lokendrakushwah12/pixa-ui",
      date: "AUG 2024",
      working: true,
    },
  ],
  lastUpdated: {
    date: "JUNE 11, 2025",
    time: "23:12 PM IST",
  },
};

export default userData;
