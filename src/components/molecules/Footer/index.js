import React from "react";
import {  FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  const year = new Date();

  return (
    <>
      <footer
        className="w-full text-center p-6 bg-accent"
        style={{ backgroundColor: "#313131" }}
      >
        <div className="flex items-center justify-center mb-6">
          <a
            className="inline-block mx-2"
            href="https://youtube.com/@TeamLearnLegacy?si=jW0QUxOf9Ys9z_De"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoYoutube className="text-2xl text-red-600" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://www.linkedin.com/in/learn-legacy-68a0b62b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-blue-400" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://www.facebook.com/learnlegay?sfnsn=wiwspwa&mibextid=RUbZ1f"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl text-black" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://www.instagram.com/learn_legacy_?igsh=MWsxODhzcWN4OWM0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl text-pink-500" />
          </a>
        </div>
        {/* <div className="hidden  md:flex items-center justify-center mb-6 flex-wrap">
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="https://www.fiverr.com/berthutapea"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fiverr
          </a>
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="https://www.upwork.com/freelancers/~0171c0d54d5dea86ec"
            target="_blank"
            rel="noopener noreferrer"
          >
            UpWork
          </a>
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="http://freelancer.com/u/berthutapea"
            target="_blank"
            rel="noopener noreferrer"
          >
            Freelancer
          </a>
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="https://themeforest.net/user/berthutapea"
            target="_blank"
            rel="noopener noreferrer"
          >
            ThemeForest
          </a>
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="https://remotehub.com/gilbert.hutapea"
            target="_blank"
            rel="noopener noreferrer"
          >
            RemoteHub
          </a>
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="https://dribbble.com/berthutapea"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dribbble
          </a>
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="https://drive.google.com/file/d/19rnbukAhf9oPhadMhsvI3xnWF6FIYeMT/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div> */}

        <div className="w-full h-[2px] bg-gray-600"></div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-4">
          <p>&copy; Copyright All Rights Reserved {year.getFullYear()}</p>
          <p>
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/learn-legacy-68a0b62b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="text-primary hover:underline"
              target="blank"
            >
              Team Learn Legacy
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;