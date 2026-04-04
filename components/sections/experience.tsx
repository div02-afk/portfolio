import ExperienceCard from "../ui/experience-card";
import { getAllExperiences } from "@/lib/experience";

export default async function Experience() {
  const experiences = getAllExperiences();

  return (
    <div className="border-b border-border border-dashed">
      <div className="xl:border-x border-border border-dashed p-4 max-w-screen-xl w-full mx-auto space-y-4 py-8 md:py-16">
        <div className="inline-flex items-center justify-center gap-1 font-normal tracking-tight text-xl">
          <h2 className="font-normal drop-shadow-xs text-xl md:text-3xl text-muted-foreground">
            EXPERIENCE
          </h2>
        </div>
        <div className="flex flex-col justify-center gap4">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              id={index + 1}
              role={exp.metadata.role}
              companyName={exp.metadata.company}
              startDate={exp.metadata.startDate}
              endDate={exp.metadata.endDate}
              slug={exp.metadata.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
};