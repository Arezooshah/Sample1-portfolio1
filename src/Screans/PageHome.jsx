import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Project from "../components/Project";
import Skills from "../components/Skills";

const PageHome = () => {
  return (
    <div>
      <Header />
      <About />
      <Project />
      {/* <Experience /> */}
      <Skills />
      <Contact />
    </div>
  );
};

export default PageHome;
