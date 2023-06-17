import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./NavBar/NavBar";
import { AboutMe } from "./components/Aboutme";
import { ContactMe } from "./components/Contact";
import { ProjectsMe } from "./components/Projects";
import { SkillsMe } from "./components/Skills";
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "./Header/Head";
import { Footer } from "./Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<ProjectsMe />} />
          <Route path="/skills" element={<SkillsMe />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </BrowserRouter>
      <ChakraProvider>
        <Navbar />
        <Header />
        <Footer />
      </ChakraProvider>
    </div>
  );
}
            {/*I am a front-end developer who has adapted a constant learning criteria, during my process I find challenges that help me to find new application skills */}

export default App;
