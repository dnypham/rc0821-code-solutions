import React, { useState } from 'react';

export default function HotButton() {
  const [count, setCount] = useState(0);

  const getButtonColor = () => {
    if (count < 3) {
      return 'neutral';
    } else if (count < 6) {
      return 'cold';
    } else if (count < 9) {
      return 'cool';
    } else if (count < 12) {
      return 'warm';
    } else if (count < 15) {
      return 'hot';
    } else if (count < 18) {
      return 'scalding';
    } else if (count >= 18) {
      return 'lava';
    }
  };

  return (
    <div className='button-container'>
      <button className={`btn ${getButtonColor()}`} onClick={() => setCount(count + 1)}>Hot Button</button>
    </div>
  );
}
