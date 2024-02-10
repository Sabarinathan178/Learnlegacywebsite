import React, { useEffect, useState } from "react";
// import "./Contact.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { motion, useAnimation } from "framer-motion";
import {
  FaUserAlt,
  FaPhoneAlt,
  // FaLocationArrow,
  FaLinkedin,
  // FaGithubSquare,
  // FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { headingAnimation, contactAnimation } from "../../hooks/useAnimation";
import { BottomLine } from "../../components";

const Contact = () => {
  const [ inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  return (
    <div className="parent py-24 -mt-20  ">
      <motion.div
        // initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-neutral text-center">Feel Free To Contact Us</h3>
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          Get In <span className="text-primary">Touch</span>
        </h1>
        <BottomLine />
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <motion.div
          className=""
          // initial={{ y: 50, opacity: 0 }}
          animate={viewDiv && "visible"}
          variants={contactAnimation}
        >
          <h2 className="text-2xl font-medium">Contact Info</h2>
          <div className="flex items-center my-6">
            <FaUserAlt className="text-2xl mr-8 hover:text-primary cursor-pointer duration-300"></FaUserAlt>
            <h3 className="font-medium text-primary">Kanishkar</h3>
          </div>
          <div className="flex items-center my-6">
            <FaPhoneAlt className="text-2xl mr-8 hover:text-primary cursor-pointer duration-300"></FaPhoneAlt>
            <h3 className="font-medium text-primary">+91 6384281065</h3>
          </div>
          <div className="flex items-center my-6">
            <MdEmail className="text-3xl mr-8 hover:text-primary cursor-pointer duration-300"></MdEmail>
            <h3 className="font-medium text-primary">teamlearnlegacy@gmail.com</h3>
          </div>
          {/* <div className="flex items-center my-6">
            <FaLocationArrow className="text-2xl mr-8 hover:text-primary cursor-pointer duration-300"></FaLocationArrow>

            <h3 className="font-medium text-primary">
              Karawang, Jawa Barat, Indonesia
            </h3>
          </div> */}
          <div className="mt-8 flex items-center">
            <h3 className="text-xl text-neutral">Social</h3>
            <div className="bg-gray-400 w-10 h-[2px] mx-4"></div>
            <a
              href="https://www.linkedin.com/in/learn-legacy-68a0b62b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="blank"
              className="text-3xl text-neutral hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaLinkedin></FaLinkedin>
            </a>
            <a
              href="https://www.facebook.com/learnlegay?sfnsn=wiwspwa&mibextid=RUbZ1f"
              target="blank"
              className="text-3xl text-neutral hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaFacebook></FaFacebook>
            </a>
            <a
              href="https://youtube.com/@TeamLearnLegacy?si=jW0QUxOf9Ys9z_De"
              target="blank"
              className="text-3xl text-neutral hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <IoLogoYoutube></IoLogoYoutube>
            </a>
            <a
              href="https://www.instagram.com/learn_legacy_?igsh=MWsxODhzcWN4OWM0"
              target="blank"
              className="text-3xl text-neutral hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaInstagramSquare></FaInstagramSquare>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;