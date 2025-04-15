import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Footer from "@/components/sections/footer";
import { GithubIcon, XIcon } from "@/components/icons";
import Projects from "@/components/sections/projects";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-border border-dashed sticky top-0 bg-site-background/80 backdrop-blur-md z-50">
        <div className="p-4 max-w-screen-xl w-full mx-auto border-border border-dashed xl:border-x">
          <div className="flex items-center gap-4 justify-between h-8">
            <Link href="/" className="flex items-center gap-2 justify-center">
              <Image
                src="/pfp.png"
                alt="logo"
                width={104}
                height={104}
                className="size-10"
              />
              <div className="flex flex-col items-start justify-start font-medium tracking-tight text-sm">
                <span className="text-base">LOKENDRA KUSHWAH</span>
                <span className="text-sm -mt-1 font-normal text-muted-foreground">
                  SOFTWARE  DEVELOPER
                </span>
              </div>
            </Link>
            <div className="flex items-center">
              <Button variant="ghost" size="icon" asChild>
                <Link target="_blank" href="https://x.com/lokendratwt">
                  <XIcon className="size-3.5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  target="_blank"
                  href="https://github.com/lokendrakushwah12"
                >
                  <GithubIcon className="size-5" />
                </Link>
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
