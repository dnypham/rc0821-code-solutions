import React, { useState } from 'react';

export default function Stopwatch() {
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  const handleClick = () => {
    if (intervalId) {
      setToggle(false);
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }

    setToggle(true);

    const time = setInterval(() => {
      setCount(previousCount => previousCount + 1);
    }, 1000);

    setIntervalId(time);

  };

  const handleReset = () => {
    if (!toggle) setCount(0);
  };

  return (
    <div className="stopwatch-container">
      <div className="row">
        <div className="column">
          <div className="circle" onClick={() => handleReset()}>
            <h1 className="time noselect">{count}</h1>
          </div>
          <div className="icon">
            <i className={toggle ? 'fas fa-pause fa-3x' : 'fas fa-play fa-3x'} onClick={() => handleClick()}></i>
          </div>
        </div>
      </div>
    </div>
  );
}
