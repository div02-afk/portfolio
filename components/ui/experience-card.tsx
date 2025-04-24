import Link from "next/link";

type ExperienceCardProps = {
  companyName: string;
  role: string;
  startDate: string;
  endDate: string;
  link: string;
};

const ExperienceCard = ({
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
      className="flex flex-col active:scale-[0.98] transition-all hover:bg-card-foreground/[3%] p-2 md:p-4 rounded-lg md:rounded-2xl justify-center gap-2"
    >
      <h3 className="text-base font-medium">{role}</h3>
      <div className="flex w-full justify-between items-center">
        <p className="text-sm text-muted-foreground w-[100px]">{companyName}</p>
        <div className="flex-grow border-b border-dashed border-border" />
        <p className="text-sm text-muted-foreground text-right w-[170px]">
          {startDate} - {endDate}
        </p>
      </div>
    </Link>
  );
};

export default ExperienceCard;
