import React, { useState, useEffect } from 'react';
import './styles.css';

const AnimatedText = ({ text }) => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    setChars(text.split(''));
  }, [text]);

  return (
    <div className="animated-text">
      {chars.map((char, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;