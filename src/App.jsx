// import styles from "./App.module.css"
// import './fonts/fonts.css';
// import { About } from "./components/About/About";
// import { Contact } from "./components/Contact/Contact";
// import { Experience } from "./components/Experience/Experience";
// import { Hero } from "./components/Hero/Hero";
// import { Navbar } from "./components/Navbar/Navbar";
// import { Projects } from "./components/Projects/Projects";

// function App() {

//   return (
//     <>
//       <div className={styles.App}>
//         <Navbar />
//         <Hero />
//         <Experience />
//         <About />
//         <Projects />
//         <Contact />
//       </div>
//     </>
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './fonts/fonts.css';
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
import { ProjectDetail } from "./components/ProjectDetail/ProjectDetail";
import { Navbar } from "./components/Navbar/Navbar"; // Importez la Navbar ici
import styles from "./App.module.css";

const Home = () => {
  return (
    <>
      <Navbar /> {/* Incluez la Navbar ici */}
      <Hero />
      <Experience />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;