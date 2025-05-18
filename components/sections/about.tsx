import userData from "@/data/userData";
import TextButton from "../ui/text-button";

const About = () => {
  const { about } = userData;

  return (
    <div className="border-b border-border border-dashed">
      <div className="xl:border-x border-border border-dashed p-4 max-w-screen-xl w-full mx-auto space-y-4 py-8 md:py-16">
        <div className="text-muted-foreground justify-between gap-8 rounded-2xl">
          {about.split("A software engineer")[0]}
          <div className="mt-4">
            A&nbsp;
            <span className="border-b border-dashed inline-block border-foreground text-foreground">
              <TextButton text="SOFTWARE ENIGNEER" textSize={16} />
            </span>
            &nbsp;{about.split("A software engineer")[1]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;