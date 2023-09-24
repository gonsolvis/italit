import React from 'react';
import './CircularButton.css'; // Import your component-specific CSS file
import { Link } from 'react-router-dom'; 

function CircularButton(props) {
    return (
    <div className='individualButtonDiv'>
       <Link to={props.levelUrl} className="circular-button-link" >
      <button className="circular-button" style={{ backgroundColor: props.color }}>
        {props.title}
           </button>
           </Link>
    </div>
  );
}

export default CircularButton;
