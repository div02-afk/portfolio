const Projects = () => {
  return (
    <div className="border-b border-border border-dashed">
      <div className="xl:border-x border-border border-dashed p-4 max-w-screen-xl w-full mx-auto space-y-4 h-[480px]">
        <div className="inline-flex items-center justify-center gap-1 font-normal font-mono tracking-tight text-xl">
          <h2 className="font-normal drop-shadow-xs text-3xl text-muted-foreground">
            PROJECTS
          </h2>
        </div>
        {/* grid with 2 col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col min-h-[200px] justify-between gap-8 rounded-2xl border border-border border-dashed p-4">
            <h3 className="text-lg font-semibold">Project 1</h3>
            <p className="text-sm text-muted-foreground">
              A brief description of project 1 goes here.
            </p>
            <div className="flex items-center justify-between mt-4">
              <a href="#" className="text-blue-500 hover:underline">
                View Project
              </a>
              <span className="text-sm text-muted-foreground">Date</span>
            </div>
          </div>
          <div className="flex flex-col min-h-[200px] justify-between gap-8 rounded-2xl bg-card-foreground/[3%] hover:bg-card-foreground/[5%] transition-all border border-border border-dashed p-4">
            <h3 className="text-lg font-normal">VASKORA</h3>
            <p className="text-sm text-muted-foreground">
              seamless job-swiping experience
            </p>
            <div className="flex items-center justify-between mt-4">
              <a href="#" className="text-blue-500 hover:underline">
                View Project
              </a>
              <span className="text-sm text-muted-foreground">Date</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
