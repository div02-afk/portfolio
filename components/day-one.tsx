import FluidMenu from "./ui/fluid-menu";

const DayOne = () => {
  return (
    <div className="border-b border-border border-dashed">
      <div className="xl:border-x border-border border-dashed p-4 max-w-screen-xl w-full mx-auto space-y-4 h-[480px]">
        <div className="inline-flex items-center justify-center gap-1 font-normal font-mono tracking-tight text-xl">
          <span>Day 1</span>
          <span className="text-border">/</span>
          <h2 className="tracking-[-0.03em] drop-shadow-xs">
            Fluid Menu Animation
          </h2>
        </div>
        <div className="flex flex-col min-h-[400px] justify-between gap-8 rounded-2xl bg-background dark:bg-surface p-6 shadow-xs border border-border">
          <FluidMenu />
        </div>
      </div>
    </div>
  );
};

export default DayOne;
