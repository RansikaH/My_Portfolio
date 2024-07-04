import styles from "./App.module.css";

import { Skills } from "./components/Skills/Skills";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <about/>
      <Skills />
      <Projects />

    </div>
  );
}

export default App;
