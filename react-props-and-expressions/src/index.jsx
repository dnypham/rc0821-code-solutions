import React from 'react';
import ReactDOM from 'react-dom';

function CustomButtom(props) {
  return (
    <button>{props.text}</button>
  );
}

const element = (
  <div>
    <CustomButtom text="I" />
    <CustomButtom text="know" />
    <CustomButtom text="React!" />
  </div>
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
