import React from 'react';
import '../App.css';
import pic from '../hero.svg';
function intro(props) {
    return (
        <div class="main">
    <h2><span class='s'>Online</span> Test</h2>
    <p class='p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer.</p>
    <button onclick='#' class='b'>Register Now</button>
    <div>
      <img src={pic} class='i' alt='hero'/>
    </div>
  </div>
    );
}

export default intro;