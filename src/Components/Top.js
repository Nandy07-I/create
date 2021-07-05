import React from 'react';
import top from '../top.png';
import photo from '../images.jfif';

function Top(props) {
    return (<div>
        <div>
        <img src={top} class='top' alt='TOP'/>
        <h2 class='t'>Top Achievers</h2>
      </div>
      <div class='container'>
      <div class='row'>
        <div class='col'>
          <div class='det p'>
          <h2>Losliya</h2>
          <p>1023/1200</p>
          <p>Maths</p>
          </div>
          <div class='img'>
            <img src={photo} alt='losliya'/>
          </div>
        </div>
      </div>
      <div class='row'>
        <div class='col'>
        <div class='det p'>
          <h2>Losliya</h2>
          <p>1023/1200</p>
          <p>Maths</p>
          </div>
          <div class='img'>
            <img src={photo} alt='losliya'/>
          </div>
        </div>
        
      </div>
      <div class='row'>
        <div class='col'>
        <div class='det p'>
          <h2>Losliya</h2>
          <p>1023/1200</p>
          <p>Maths</p>
          </div>
          <div class='img'>
            <img src={photo} alt='losliya'/>
          </div>
        </div>
      </div>
      <div class='row2'>
        <div class='col'>
        <div class='det p'>
          <h2>Losliya</h2>
          <p>1023/1200</p>
          <p>Maths</p>
          </div>
          <div class='img'>
            <img src={photo} alt='losliya'/>
          </div>
        </div>
      </div>
      <div class='row2'>
        <div class='col'>
        <div class='det p'>
          <h2>Losliya</h2>
          <p>1023/1200</p>
          <p>Maths</p>
          </div>
          <div class='img'>
            <img src={photo} alt='losliya'/>
          </div>
        </div>
        
      </div>
      <div class='row2'>
        <div class='col'>
          <div class='det p'>
          <h2>Losliya</h2>
          <p>1023/1200</p>
          <p>Maths</p>
          </div>
          <div class='img'>
            <img src={photo} alt='losliya'/>
          </div>
        </div>
      </div>
      </div>
      
    </div>
    );
}

export default Top;