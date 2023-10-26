/* eslint-disable react/prop-types */
import "../assets/css/Navbar.css";
import {
  motion,
} from "framer-motion";

import { useEffect, useState } from "react";
import { ReactComponent as SunSvg } from "../assets/images/sun.svg";
import { ReactComponent as MoonSvg } from "../assets/images/moon.svg";

import { ReactComponent as ArrowLeft } from "../assets/images/ArrowLeft.svg";
import { useLocation, useNavigate } from "react-router-dom";
import Menu from "./Menu";

const Navbar = ({
  toggleOnPlay,
  toggleOnWork,
  toggleDirection,
  toggleTheme,
  theme,
}) => {

  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 500;

      setIsVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);


  // const location = useLocation();
  const [buttonStyle, setButtonStyle] = useState({
    transform: "translate3d(0.739px, 0.739px, 0px)",
  });

  const handleMouseMove = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const maxOffset = 3; // Maximum offset in pixels

    const translateX = Math.min(
      maxOffset,
      Math.max(-maxOffset, ((x - rect.width / 2) / rect.width) * maxOffset * 2)
    );
    const translateY = Math.min(
      maxOffset,
      Math.max(
        -maxOffset,
        ((y - rect.height / 2) / rect.height) * maxOffset * 2
      )
    );

    setButtonStyle({
      transform: `translate3d(${translateX}px, ${translateY}px, 0px)`,
    });
  };

  const handleMouseLeave = () => {
    setButtonStyle({
      transform: "translate3d(0.739px, 0.739px, 0px)",
    });
  };

  const navigate = useNavigate();

  const iconVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 },
  };




  return (
    <>
      {location.pathname === "/" ? (
        <motion.div
          className="flex justify-between nav-menu"
          initial={{ y: -200 }}
          animate={{ y: isVisible ? 0 : -200 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="primary-nav flex justify-center items-center bg-[#6b46c1] dark:bg-[#f6ad55] "
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 0.9 }}
            onClick={toggleTheme}
          >
            <motion.div
              initial="initial"
              animate="animate"
              transition={{ duration: 0.1 }}
              style={{ originX: 1, originY: 1 }}
            >
              {theme == "dark" ? (
                <motion.div key="moon" variants={iconVariants}>
                  <SunSvg className="dark:text-white" />
                </motion.div>
              ) : (
                <motion.div key="sun" variants={iconVariants}>
                  <MoonSvg className="text-white" />
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          <div
            className="tabs-toggle-background dark:bg-black"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={buttonStyle}
          >
            <div className="flex w-full justify-around items-center z-20">
              <div
                className="black-gradient-span text-lg w-full text-center"
                onClick={toggleOnWork}
              >
                Work
              </div>
              <div
                className="color-gradient-span text-lg w-full text-center"
                onClick={toggleOnPlay}
              >
                Life
              </div>
            </div>

            <motion.div
              className="sliding-toggle-indicator"
              animate={{ x: toggleDirection }}
              style={{ background: "#fff" }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 40,
                duration: 0.08,
              }}
            />
          </div>

          <Menu theme={theme} />
        </motion.div>
      ) : (
        <nav className="flex justify-between nav-menu dark:text-white">
          <motion.div
            className="primary-nav animoji-button flex justify-center items-center dark:bg-black dark:text-white"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 0.9 }}
            onClick={() => navigate("/")}
          >
            <ArrowLeft />
          </motion.div>
          <Menu theme={theme} />
        </nav>
      )}
    </>
  );
};

export default Navbar;
