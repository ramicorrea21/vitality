'use client'
import React, { useState, useEffect } from 'react';

type AnimatedTextProps = {
  textList: string[];
  interval: number;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ textList, interval }) => {
  const [currentText, setCurrentText] = useState(textList[0]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const textChangeInterval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentText(textList[(textList.indexOf(currentText) + 1) % textList.length]);
        setFade(true);
      }, 250);
    }, interval);

    return () => {
      clearInterval(textChangeInterval);
    };
  }, [textList, interval, currentText]);

  return (
    <span className="text-violet-600">
      ganar{' '}
      <span
        className={`transition-opacity duration-500 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {currentText}
      </span>
    </span>
  );
};

export default AnimatedText;
