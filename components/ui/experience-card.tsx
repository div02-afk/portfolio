import Link from "next/link";
import TextButton from "./text-button";

type ExperienceCardProps = {
  id: number;
  companyName: string;
  role: string;
  startDate: string;
  endDate: string;
  link: string;
};

const ExperienceCard = ({
  id,
  companyName,
  role,
  startDate,
  endDate,
  link,
}: ExperienceCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col px-2 md:px-4 justify-center gap-2"
    >
      <div className="flex justify-center items-start gap-3">
        <div className="flex flex-col justify-center items-center">
          <div className={` w-[1px] h-1.5 ${id === 1 ? "bg-transparent" : "bg-muted"}`} />
          <div className={`${id === 1 ? "bg-muted-foreground" : "bg-muted"} rounded-full size-3`} />
          <div className={` w-[1px] bg-muted ${id === 3 ? "h-0" : "h-12"}`} />
        </div>
        <div className="size-full">
          <TextButton text={role} textSize={16} uppercase="capitalize" />
          <div className="flex w-full justify-between items-center">
            <p className="text-sm text-muted-foreground w-[100px]">
              {companyName}</p>
            <div className="flex-grow border-b border-dashed border-border" />
            <p className="text-sm text-muted-foreground text-right w-[170px]">
              {startDate} - {endDate}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExperienceCard;
