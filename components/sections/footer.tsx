const Footer = () => {
  return (
    <div className="border-b border-border border-dashed">
      <div className="xl:border-x border-border border-dashed p-4 max-w-screen-xl w-full mx-auto space-y-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row  w-full justify-between gap-2 md:gap-1 items-start md:items-center">
          <p className="text-xs font-normal text-muted-foreground">
            Last updated by Lokendra on APRIL 15, 2025, 14:03 PM IST
          </p>
          <div className="md:flex-grow hidden border-b border-dashed border-border" />
          <p className="text-xs font-normal text-muted-foreground text-right">
            Lokendrakushwah8051@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
