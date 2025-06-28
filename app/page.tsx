import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Projects from "@/components/sections/projects";
import LinesBG from "@/components/ui/lines-bg";

export default function Page() {
  return (
    <div className="flex flex-col h-full lg:max-w-screen-lg overflow-clip mx-auto">
      <Header />
      <About />
      <LinesBG />
      <Experience />
      <LinesBG />
      <Projects />
      <LinesBG />
      <Footer />
    </div>
  );
}
