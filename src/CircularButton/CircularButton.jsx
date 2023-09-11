import React from 'react';
import './CircularButton.css'; // Import your component-specific CSS file

function CircularButton(props) {
    return (
    <div className='individualButtonDiv'>
      <button className="circular-button"  style={{ backgroundColor: props.color }}>
        {props.title}
           </button>
    </div>
  );
}

export default CircularButton;
