import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import logo from "../../../assets/loadimage.png";
import { motion, useCycle } from "framer-motion";
import MenuItem from "./MenuItem";
// import JoinUsModal from '../../JoinUsModal/JoinUsModal';
// import Music from '../Music/Music';
import { LazyLoadImage } from "react-lazy-load-image-component";

const headerVariant = {
  open: {
    height: "auto",
  },

  closed: {
    height: "0px",
  },
};

const sidebar = {
  open: (height = 1000) => ({
    backgroundColor: "#222831",
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    backgroundColor: "#9d9d9d",
    clipPath: "circle(25px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Path = (props) => (
  <motion.path
    strokeWidth="2.5"
    stroke="#eeeeee"
    strokeLinecap="round"
    {...props}
  />
);

const ulVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    display: "block",
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    display: "none",
  },
};

const buttonVariant = {
  open: {
    backgroundColor: "#222831",
  },
  closed: {
    backgroundColor: "#9d9d9d",
  },
};

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef();

  useEffect(() => {
    // set header height
    const containerHeight = containerRef.current.offsetHeight;
    setHeight(containerHeight);
  }, []);

  return (
    <>
      <motion.header
        initial={false}
        variants={headerVariant}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="header"
      >
        <motion.div className="headerBG" variants={sidebar}></motion.div>
        {/* navigation menu */}
        <motion.ul variants={ulVariants} className="nav_menu">
          <MenuItem
            onClick={() => toggleOpen()}
            variant="link"
            to="/"
            className="logo"
          >
            <LazyLoadImage src={logo} alt="logo" />
          </MenuItem>
          <MenuItem
            onClick={() => toggleOpen()}
            variant="navLink"
            className="nav_link"
            data-hover-text="Home"
            to="/"
          >
            Home
          </MenuItem>
          <MenuItem
            onClick={() => toggleOpen()}
            variant="navLink"
            className="nav_link"
            data-hover-text="Events"
            to="/events"
          >
            Events
          </MenuItem>
          <MenuItem
            onClick={() => toggleOpen()}
            variant="navLink"
            className="nav_link"
            data-hover-text="About Us"
            to="/about"
          >
            About Us
          </MenuItem>
          <MenuItem
            onClick={() => toggleOpen()}
            variant="navLink"
            className="nav_link"
            data-hover-text="Team"
            to="/"
          >
            Team
          </MenuItem>
        </motion.ul>
        {/* toggle button */}
        <motion.button onClick={() => toggleOpen()} className="menu_btn">
          <svg
            viewBox="0 0 1024 1024"
            class="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M981.3 170.7H320c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7h661.3c23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7zM981.3 938.7H320c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7h661.3c23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7zM981.3 554.7H320c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7h661.3c23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7z"
                fill="#d97724"
              ></path>
              <path
                d="M106.7 128m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
                fill="#d4d72d"
              ></path>
              <path
                d="M106.7 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
                fill="#d4d72d"
              ></path>
              <path
                d="M106.7 896m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
                fill="#d4d72d"
              ></path>
            </g>
          </svg>
        </motion.button>
      </motion.header>
    </>
  );
};

export default Header;
