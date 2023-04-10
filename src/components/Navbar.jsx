import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <div className='max-w-[90%] px-4 mx-auto'>
          <div className='flex items-center justify-between h-16'>
            <span className='text-4xl text-neutral-900/90 font-semibold'>
              Lior
            </span>
            <div className='flex space-x-8 text-neutral-900 text-xl VHcenter'>
              <a href='#'>About</a>
              <a href='#'>Contact</a>
              <a href='#' className='bg-gray-900 text-gray-100 p-4 rounded-2xl'>
                View Work
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
