import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder='Please enter your email...' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter