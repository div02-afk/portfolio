import userData from "@/config/userData";
import CopyButton from "../ui/copy-button";
import LastUpdated from "../ui/last-updated";

const Footer = () => {
  const { email } = userData.personalInfo;

  return (
    <div className="border-b border-border border-dashed">
      <div className="xl:border-x border-border border-dashed p-4 max-w-screen-xl w-full mx-auto space-y-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row w-full justify-between gap-2 md:gap-1 items-start md:items-center">
          <LastUpdated />
          <div className="md:flex-grow hidden border-b border-dashed border-border" />
          <CopyButton email={email} />
        </div>
      </div>
    </div>
  );
};

export default Footer;