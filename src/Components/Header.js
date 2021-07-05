import React from 'react';
import '../App.css';
import logo from '../logo.png';
import Intro from './Intro';
import Top from './Top';
import Syllabus from './Syllabus';
import Footer from './Footer';
function Header(props) {
    return (<div>
  <Intro/>
  <Top/>
  <Syllabus/>
  <Footer/>
  </div>
    );
}

export default Header;