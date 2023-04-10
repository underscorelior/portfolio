import React, { useState } from "react";
import NavbarItems from "./Nav/NavbarItems";
import { motion, AnimatePresence } from "framer-motion";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isToggled, setToggle] = useState(false);

  const navContainer = {
    visible: {
      //x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
    hidden: {
      //x: -250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
  };
  

  return (
    <>
      <button className='mobile-nav-btn' onClick={() => setToggle(!isToggled)}>
        {isToggled ? <GrClose /> : <GiHamburgerMenu />}
      </button>
      <AnimatePresence>
        {isToggled && (
          <motion.nav
            className='mobile-navbar'
            initial='hidden'
            animate={isToggled ? "visible" : "hidden"}
            exit='hidden'
            variants={navContainer}>
            <NavbarItems isToggled={isToggled} />
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
