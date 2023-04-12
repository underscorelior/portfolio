import React, { Component } from "react";
import header from "../../assets/header.json"
class BlobHeader extends Component {
  render() {
    return (
      <div className='relative w-full flex justify-center mt-6 md:mt-20 max-w-[90%] md:max-w-[75%]'>
        <div className='relative max-w-lg'>
          <div className='blob-pink'></div>
          <div className='blob-blue'></div>
          <div className='blob-green'></div>
        </div>
        <div className='relative flex justify-center'>
          <div className='rounded-lg flex justify-center mt-8 md:mt-20 md:w-[81%] flex-col'>
            <h1 className='header-subtitle'>
              {header.subtitle}
            </h1>
            <div className='mt-8 md:mt-8'>
              <span className='header-description'>
                {header.description}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlobHeader;
