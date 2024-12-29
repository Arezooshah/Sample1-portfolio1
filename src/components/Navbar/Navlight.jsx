import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logoDark from "../../assets/images//logoDark.png";
import logoWhite from "../../assets/images/logo.png";
import logolight from "../../assets/images/logo1.png";

import { FiDribbble, FiLinkedin, FiGithub } from "../../assets/icons/vander";

export default function Navlight() {
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
        <div className="relative container">
          <Link className="logo" to="/">
            <span className="inline-block dark:hidden">
              <img src={logoDark} className="h-5 l-dark" alt="" />
              <img src={logoWhite} className="h-5 l-light" alt="" />
            </span>
            <img
              src={logolight}
              className="dark:inline-block hidden h-5"
              alt=""
            />
          </Link>
          <div className="menu-extras">
            <div className="menu-item">
              <Link
                to=""
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
          <ul className="space-x-1 mb-0 list-none buy-button">
            <li className="inline mb-0">
              <Link
                to=""
                className="inline-flex justify-center items-center border-orange-500 hover:border-orange-600 bg-orange-500 hover:bg-orange-600 border rounded-xl w-8 h-8 text-[15px] text-center text-white tracking-wide duration-500 align-middle"
              >
                <FiDribbble className="w-[14px] h-[14px] align-middle" />
              </Link>
            </li>
            <li className="inline mb-0">
              <Link
                to=""
                className="inline-flex justify-center items-center border-orange-500 hover:border-orange-600 bg-orange-500 hover:bg-orange-600 border rounded-xl w-8 h-8 text-[15px] text-center text-white tracking-wide duration-500 align-middle"
              >
                <FiLinkedin className="w-[14px] h-[14px] align-middle" />
              </Link>
            </li>
            <li className="inline mb-0">
              <Link
                to=""
                className="inline-flex justify-center items-center border-orange-500 hover:border-orange-600 bg-orange-500 hover:bg-orange-600 border rounded-xl w-8 h-8 text-[15px] text-center text-white tracking-wide duration-500 align-middle"
              >
                <FiGithub className="w-[14px] h-[14px] align-middle" />
              </Link>
            </li>
          </ul>

          <div
            id="navigation"
            className={`${isOpen === true ? "hidden" : "block"}`}
          >
            <ul className="justify-end nav-light navigation-menu">
              <li>
                <Link to="/aboutus" className="sub-menu-item">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="sub-menu-item">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="sub-menu-item">
                  Project
                </Link>
              </li>
              <li>
                <Link to="/contactus" className="sub-menu-item">
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/contactus" className="sub-menu-item">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
