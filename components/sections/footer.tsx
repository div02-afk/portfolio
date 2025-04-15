const Footer = () => {
  return (
    <div className="border-b border-border border-dashed">
      <div className="xl:border-x border-border border-dashed p-4 max-w-screen-xl w-full mx-auto space-y-4 py-16">
        <div className="flex w-full justify-between gap-1 items-center">
          <p className="text-xs font-normal text-muted-foreground">
            Last updated by Lokendra on MARCH 25, 2025, 12:35 AM IST
          </p>
          <div className="flex-grow border-b border-dashed border-border" />
          <p className="text-xs font-normal text-muted-foreground text-right">
            Lokendrakushwah8051@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
