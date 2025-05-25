import { ThemeProvider } from "@/contexts";
import { Features } from "./components/sections/Features";
import { Hero } from "./components/sections/Hero";
import { Footer } from "./components/sections/Footer";
import { ProjectConcept } from "./components/sections/ProjectConcept";

function App() {
    return (
        <ThemeProvider>
          <Hero />
          <ProjectConcept />
          <Features />
          <Footer />
        </ThemeProvider>
    );
}

export default App;
