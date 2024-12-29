import { Route } from "react-router-dom";
import Router from "../routs/router";
import { RouterProvider } from "react-router-dom";
import React from "react";
// import NavFixed from "../components/Navbar/Navfixed";
// import Header from "../components/Header";
// import About from "../components/About";
// import Experience from "../components/Experience";
// import Project from "../components/Project";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";
// import Switcher from "../components/Switcher";

const App = () => {
  return (
    <div>
      {/* for use router */}
      <RouterProvider router={Router} />

      {/* <NavBar /> */}
      {/* <NavFixed />
      <Header />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
      <Switcher /> */}
    </div>
  );
};

export default App;
