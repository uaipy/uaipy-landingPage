import { ThemeProvider } from "@/contexts";
import { Features } from "./components/sections/Features";
import { Hero } from "./components/sections/Hero";
import { Footer } from "./components/sections/Footer";

function App() {
    return (
        <ThemeProvider>
          <Hero />
          {/* <Features /> */}
          <Footer />
        </ThemeProvider>
    );
}

export default App;
