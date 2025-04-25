import ExperienceCard from "../ui/experience-card";

const Experience = () => {
  const EXPERIENCE = [
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
  ];

  return (
    <div className="border-b border-border border-dashed">
      <div className="xl:border-x border-border border-dashed p-4 max-w-screen-xl w-full mx-auto space-y-4 py-8 md:py-16">
        <div className="inline-flex items-center justify-center gap-1 font-normal tracking-tight text-xl">
          <h2 className="font-normal drop-shadow-xs text-xl md:text-3xl text-muted-foreground">
            Experience
          </h2>
        </div>
        <div className="flex flex-col justify-center gap4">
          {EXPERIENCE.map((exp, index) => (
            <ExperienceCard
              key={index}
              id={exp.id}
              role={exp.role}
              companyName={exp.company}
              startDate={exp.startDate}
              endDate={exp.endDate}
              link={exp.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
