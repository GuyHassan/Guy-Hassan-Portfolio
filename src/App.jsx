import { ThemeContextProvider } from './context/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';
import Cursor from './components/ui/Cursor/Cursor';
import Navbar from './components/layout/Navbar/Navbar';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Timeline from './components/sections/Timeline/Timeline';
import Skills from './components/sections/Skills/Skills';
import Projects from './components/sections/Projects/Projects';
import Personal from './components/sections/Personal/Personal';
import Contact from './components/sections/Contact/Contact';
import ThemeSwitcher from './components/ui/ThemeSwitcher/ThemeSwitcher';

function App() {
  return (
    <ThemeContextProvider>
      <GlobalStyles />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <Personal />
        <Contact />
      </main>
      <ThemeSwitcher />
    </ThemeContextProvider>
  );
}

export default App;
