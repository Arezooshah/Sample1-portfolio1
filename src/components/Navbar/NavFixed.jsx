import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logoDark from "../../assets/images/logo.png";
import logoWhite from "../../assets/images/logo1.png";

import Social from "../Social";
import SocialNav from "./SocialNav";
import HambergerMenu from "./HambergerMenu";

const NavFixed = () => {
  const [isOpen, setMenu] = useState(true);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    activateMenu();
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  const getClosest = (elem, selector) => {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(
              s
            ),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {}
          return i > -1;
        };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;
  };

  const activateMenu = () => {
    var menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {
      var matchingMenuItem = null;
      for (var idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");

        var immediateParent = getClosest(matchingMenuItem, "li");

        if (immediateParent) {
          immediateParent.classList.add("active");
        }

        var parent = getClosest(immediateParent, ".child-menu-item");
        if (parent) {
          parent.classList.add("active");
        }

        var parent = getClosest(parent || immediateParent, ".parent-menu-item");

        if (parent) {
          parent.classList.add("active");

          var parentMenuitem = parent.querySelector(".menu-item");
          if (parentMenuitem) {
            parentMenuitem.classList.add("active");
          }

          var parentOfParent = getClosest(parent, ".parent-parent-menu-item");
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        } else {
          var parentOfParent = getClosest(
            matchingMenuItem,
            ".parent-parent-menu-item"
          );
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        }
      }
    }
  };
  const toggleMenu = () => {
    setMenu(!isOpen);
    if (document.getElementById("navigation")) {
      const anchorArray = Array.from(
        document.getElementById("navigation").getElementsByTagName("a")
      );
      anchorArray.forEach((element) => {
        element.addEventListener("click", (elem) => {
          const target = elem.target.getAttribute("href");
          if (target !== "") {
            if (elem.target.nextElementSibling) {
              var submenu = elem.target.nextElementSibling.nextElementSibling;
              submenu.classList.toggle("open");
            }
          }
        });
      });
    }
  };

  return (
    <>
      <nav
        id="topnav"
        className={`${scroll ? "nav-sticky" : ""} defaultscroll is-sticky`}
      >
        <div className="relative mx-28">
          <Link className="logo" to="/">
            <img
              src={logoDark}
              className="inline-block dark:hidden h-20"
              alt=""
            />
            <img
              src={logoWhite}
              className="dark:inline-block hidden h-20"
              alt=""
            />
          </Link>
          <div className="menu-extras">
            <div className="menu-item">
              <Link
                to="home"
                className="navbar-toggle"
                id="isToggle"
                onClick={toggleMenu}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </Link>
            </div>
          </div>
          {/* social navbar in nav top */}
          {/* <SocialNav /> */}

          {/* hamberger Meno  */}
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
        <Social />
      </nav>
    </>
  );
};
export default NavFixed;
