import React, { useState } from "react";
import NavbarItems from "./Nav/NavbarItems";
import { motion, AnimatePresence } from "framer-motion";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isToggled, setToggle] = useState(false);

  function toggleNav() {
    setToggle(!isToggled);
      if(!isToggled){
        document.body.style.overflow = 'hidden';
      }   
      else { 
        document.body.style.overflow = 'unset';
      }
  }

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
      <nav className="mobile-navbar">
        <h1 className="mobile-navbar-name">Lior</h1>
        <button className='mobile-nav-btn' onClick={() => toggleNav()}>
          {isToggled ? <GrClose /> : <GiHamburgerMenu />}
        </button>
      </nav>
      <AnimatePresence>
        {isToggled && (
          <motion.nav
            className='mobile-navbar-menu'
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
