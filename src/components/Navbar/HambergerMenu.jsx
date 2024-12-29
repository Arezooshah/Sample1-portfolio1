import React, { useState } from "react";
import { Link } from "react-router-dom";
const HambergerMenu = () => {
  const [isOpen, setMenu] = useState(true);

  return (
    <div>
      <div
        id="navigation"
        className={`${isOpen === true ? "hidden" : "block"}`}
      >
        <ul className="justify-end navigation-menu">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="sub-menu-item"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="sub-menu-item"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="project"
              smooth={true}
              duration={500}
              className="sub-menu-item"
            >
              Project
            </Link>
          </li>

          <li>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="sub-menu-item"
            >
              Experience
            </Link>
          </li>

          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="sub-menu-item"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HambergerMenu;
