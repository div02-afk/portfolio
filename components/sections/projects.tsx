import ProjectCard from "../ui/project-card";

const Projects = () => {
  const PROJECTS = [
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
      Livelink: "https://vask.app",
      gitHubLink: "https://github.com/Lokendrakushwah12/vaskora",
      date: "APR 2025",
    },
    {
      title: "CAULDRON",
      description:
        "Faceless Video Engine - Automate and dominate YouTube without ever showing your face!",
      tags: ["NEXT.JS", "TAILWIND CSS", "FIREBASE", "PYTHON"],
      Livelink: "https://cauldron.live",
      gitHubLink: "https://github.com/Statwarts/Cauldron",
      date: "JUN 2024",
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
    },
    {
      title: "PIXA/UI",
      description:
        "Pixa UI - Collection of Open Source Components for React + Tailwind-CSS for your Project.",
      tags: ["REACT.JS", "TAILWIND CSS", "FRAMER MOTION", "NPM PACKAGE"],
      Livelink: "https://pixa-ui-dev.vercel.app",
      gitHubLink: "https://github.com/Lokendrakushwah12/pixaui",
      date: "AUG 2024",
    },
  ];

  return (
    <div className="border-b border-border border-dashed">
      <div className="xl:border-x border-border border-dashed p-4 max-w-screen-xl w-full mx-auto space-y-4 py-8 md:py-16">
        <div className="inline-flex items-center justify-center gap-1 font-normal tracking-tight text-xl">
          <h2 className="font-normal drop-shadow-xs text-xl md:text-3xl text-muted-foreground">
            PROJECTS
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              liveLink={project.Livelink}
              gitHubLink={project.gitHubLink}
              date={project.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
