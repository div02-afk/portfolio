const Experience = () => {
  return (
    <div className="border-b border-border border-dashed">
      <div className="xl:border-x border-border border-dashed p-4 max-w-screen-xl w-full mx-auto space-y-4 py-16">
        <div className="inline-flex items-center justify-center gap-1 font-normal font-mono tracking-tight text-xl">
          <h2 className="font-normal drop-shadow-xs text-3xl text-muted-foreground">
            Experience
          </h2>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <div className="flex flex-col transition-all hover:bg-card-foreground/[3%] p-4 rounded-2xl justify-center gap-2">
            <h3 className="text-base font-medium">Software Engineer</h3>
            <div className="flex w-full justify-between items-center">
              <p className="text-sm text-muted-foreground w-[120px]">
                Company Name
              </p>
              <div className="flex-grow border-b border-dashed border-border" />
              <p className="text-sm text-muted-foreground text-right w-[170px]">
                Feb 2025 - Present
              </p>
            </div>
          </div>
          <div className="flex flex-col transition-all hover:bg-card-foreground/[3%] p-4 rounded-2xl justify-center gap-2">
            <h3 className="text-base font-medium">Software Engineer</h3>
            <div className="flex w-full justify-between items-center">
              <p className="text-sm text-muted-foreground w-[120px]">
                Company Name
              </p>{" "}
              <div className="flex-grow border-b border-dashed border-border" />
              <p className="text-sm text-muted-foreground text-right w-[170px]">
                Dec 2022 - Jan 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
