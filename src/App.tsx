import { ThemeProvider } from "@/contexts";
import { Features } from "./components/sections/Features";
import { Hero } from "./components/sections/Hero";
import { Footer } from "./components/sections/Footer";
import { ProjectConcept } from "./components/sections/ProjectConcept";
import { Team } from "./components/sections/Team";
import { RepoRedirect } from "./components/sections/RepoRedirect";
import { TechEvents } from "./components/sections/TechEvents";

function App() {
    return (
        <ThemeProvider>
          <Hero />
          <ProjectConcept />
          <Features />
          <Team />
          <RepoRedirect />
          <TechEvents />
          <Footer />
        </ThemeProvider>
    );
}

export default App;
