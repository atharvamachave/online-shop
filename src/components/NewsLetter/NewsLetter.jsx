import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Email</h1>
      <p>Subscribe to our news-letter and stay updated </p>
      <div>
        <input type="email" placeholder="Email Id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
