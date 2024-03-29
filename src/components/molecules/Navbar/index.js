import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import {
  RiMenu3Fill,
  RiContactsBook2Fill,
  RiFolderInfoFill,
} from "react-icons/ri";
import { GiCrossMark } from "react-icons/gi";
import { FaHome, FaDownload } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import "../../../pages/shared/Shared.css";
import { PrimaryBtn } from "../../atoms";
import br from "../../../assets/brouchre.pdf"
export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navLinks = [
    { title: "Home", link: "/", icon: <FaHome /> },
    { title: "About", link: "/about", icon: <RiFolderInfoFill /> },
    // { title: "Project", link: "/project", icon: <MdWork /> },
    { title: "Courses", link: "/courses", icon: <ImBlog /> },
    { title: "Register", link: "/register", icon: <RiContactsBook2Fill /> },
  ];
  const activeLink = ({ isActive }) => {
    return {
      fontWeight: 500,
      color: isActive && "#FF651C",
    };
  };

  // Show Navbar on Scroll UP
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          setShow(true);
        } else {
          setShow(false);
        }
        setLastScrollY(window.scrollY);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={`visible ${show && "nav-hidden"} shadow-lg bg-[#313131] 
     z-50`}
    >
      <div className="w-full flex items-center justify-between px-3 md:px-24 py-3">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className={`h-24 mt-1 mr-2 ${
                window.innerWidth > 770 ? "-ml-16 w-full" : "-ml-6"
              }`}
            />{" "}
            {/* Adjust the height as needed */}
            {/* Alternatively, you can use text instead of an image */}
            {/* <h1 className="text-2xl text-primary font-lobster">Learn Legacy</h1> */}
          </Link>
        </div>
        <div>
          <ul className="lg:flex items-center hidden">
            {navLinks.map((navItem) => (
              <li className="mx-4" key={navItem.title}>
                <NavLink
                  to={navItem.link}
                  style={activeLink}
                  className="text-white hover:text-primary duration-300"
                >
                  {navItem.title}
                </NavLink>
              </li>
            ))}

            <a
              className="inline-block ml-4"
              href={br}
              target="blank" download
            >
              <PrimaryBtn>
                 <span className="text-sm">Brochure</span> 
                <span>
                  <FaDownload />
                </span>
              </PrimaryBtn>
            </a>
          </ul>
          <div className="block lg:hidden">
            <button onClick={toggleDrawer} className="btn btn-ghost text-white text-2xl">
              <RiMenu3Fill></RiMenu3Fill>
            </button>
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="right"
              style={{ backgroundColor: "#212121" }}
              className="bla bla bla flex flex-col justify-between pb-4 w-32"
            >
              <ul className="">
                <li className="mt-6 mb-10 ml-4">
                  <GiCrossMark
                    className="cursor-pointer hover:text-primary duration-300 text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                  ></GiCrossMark>
                </li>
                {navLinks.map((navItem) => (
                  <li
                    className="m-4"
                    key={navItem.title}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <NavLink
                      to={navItem.link}
                      style={activeLink}
                      className="flex items-center text-white hover:text-primary duration-300"
                    >
                      <span className="mr-3">{navItem.icon}</span>
                      <span>{navItem.title}</span>
                    </NavLink>
                  </li>
                ))}
                <li className="text-center m-4">
                  <a
                    className="inline-block w-full"
                    href={br}
                    target="blank" download
                  >
                    <button className="primary-button w-full text-white">
                      <span>Brochure</span>
                      <span>
                        <FaDownload />
                      </span>
                    </button>
                  </a>
                </li>
              </ul>
              <div className="text-center">
                <p className="text-neutral">
                  &copy; Copyright 2024, Team Learn Legacy. All Rights Reserved
                </p>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}
