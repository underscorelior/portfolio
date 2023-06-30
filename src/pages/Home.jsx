import React, { Component } from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Contact />
        <Link to='/quiz'>Quiz</Link>
        <h1 className='py-96 my-96'>a</h1>
        {/* This is just to test navbar and scrolling */}
      </div>
    );
  }
}

export default Home;
