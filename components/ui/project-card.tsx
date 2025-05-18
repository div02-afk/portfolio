import Link from "next/link";
import { GithubIcon } from "../icons";
import TextButton from "./text-button";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  liveLink: string;
  date: string;
  gitHubLink: string;
};

const ProjectCard = ({
  title,
  description,
  tags,
  liveLink,
  date,
  gitHubLink,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col min-h[200px] justify-between gap-3 rounded-2xl bg-card-foreground/[3%] hover:bg-card-foreground/[5%] transition-all border border-border border-dashed p-4">
      {/* <h3 className="text-lg font-normal">{title}</h3> */}
      <span className="inline-block">
        <TextButton text={title} textSize={18} uppercase="capitalize" />
      </span>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="flex gap-2 flex-wrap">
        {tags?.map((tag, index) => (
          <span
            key={index}
            className="text-xs text-muted-foreground bg-card-foreground/[5%] rounded-full px-2 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex justify-center items-center gap-2">
          <Link
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground text-sm hover:underline transition-all"
          >
            Live link
          </Link>
          <Link
            href={gitHubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-all"
          >
            <GithubIcon />
          </Link>
        </div>
        <span className="text-sm text-muted-foreground">{date}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
