import React, { useState } from 'react';

export default function ToggleSwitch() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='toggle-container'>
      <div className={`toggle ${toggle ? 'toggle-on' : 'toggle-off'}`} onClick={() => setToggle(!toggle)}>
        <div className={`circle ${toggle ? 'circle-on' : 'circle-off'}`}></div>
      </div>
      <p className="label">{toggle ? 'ON' : 'OFF'}</p>
    </div>
  );
}
