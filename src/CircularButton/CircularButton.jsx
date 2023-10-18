import React from 'react';
import './CircularButton.css'; // Import your component-specific CSS file
import { Link } from 'react-router-dom'; 
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTriangleExclamation} from "@fortawesome/free-solid-svg-icons"

function CircularButton(props) {
    return (
    <div className='individualButtonDiv'>
      
       <Link to={props.levelUrl} className="circular-button-link" >
      <button className="circular-button" style={{ backgroundColor: props.color }}>
     
      {props.title === "A1" ? (props.title) : (<>{props.title} <FontAwesomeIcon id="faArrowLeft" icon={faTriangleExclamation} style={{ color: "white" }} /></>)}
      
           </button>
           </Link>
    </div>
  );
}

export default CircularButton;
