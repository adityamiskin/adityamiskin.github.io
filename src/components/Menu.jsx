import { useState } from "react";
import { MenuButton } from "./MenuButton";
import { motion } from "framer-motion";
import { ReactComponent as House } from "../assets/images/House.svg";
import { ReactComponent as User } from "../assets/images/User.svg";

const Menu = ({ theme }) => {
  const [isOpen, setOpen] = useState(false);

  const variants = {
    closed: { scale: 0, opacity: 0 },
    open: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
  };

  return (
    <>
      <button
        className="primary-nav flex justify-center items-center dark:bg-black bg-white"
        onClick={() => setOpen(!isOpen)}
        type="button"
      >
        <MenuButton
          isOpen={isOpen}
          strokeWidth="2"
          lineProps={{ strokeLinecap: "round" }}
          transition={{ ease: "easeIn", duration: 0.2 }}
          width="24"
          height="16"
          color={theme === "dark" ? "#fff" : "#000"}
        />
      </button>

      <motion.div
        className={`menu-container dark:bg-black ${isOpen ? "open" : "closed"}`}
        initial={isOpen ? "open" : "closed"}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <a
          href="/"
          aria-current="page"
          className="menu-item flex p-4 rounded-lg"
        >
          <House className="menu-item-icon" />
          <div className="menu-item-text dark:text-white">Home</div>
        </a>
        <a href="/about" className="menu-item flex p-4 rounded-lg">
          <User className="menu-item-icon" />
          <div className="menu-item-text dark:text-white">About</div>
        </a>
      </motion.div>
    </>
  );
};

export default Menu;
