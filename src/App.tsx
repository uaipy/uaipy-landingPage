import { ThemeProvider } from "@/contexts";
import { Features } from "./components/sections/Features";
import { Hero } from "./components/sections/Hero";

function App() {
    return (
        <ThemeProvider>
          <Hero />
          {/* <Features /> */}
        </ThemeProvider>
    );
}

export default App;
