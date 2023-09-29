import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CircularButton from '../CircularButton/CircularButton';
import LESSONS_BREAKDOWN from '../DataFolder/LessonsBreakdown';
import romulus from "../images/romulus.png"
import './levelChoice.css';

function LevelChoice() {
   
  return (
    <div className='LevelChoice'>
      <div className='InnerLevelChoice'> 

 <div className="card w-50 h-75">
  
  <div className="card-body">
  <h1> Choose your level</h1>
  {/* <img className="home-image" src={romulus} alt="react logo" /> */}
 <img className="home-image" />
  <p >Choose below from lessons starting from A1 (Beginner) to C2 (Native).
    We will help you along the way with lessons and games!  </p> 
  </div> 
  </div> 
  </div>
        <div className='buttonMappingBox'>
       
       {LESSONS_BREAKDOWN.map((circle, index) => (
           <CircularButton
           key={index}
           title={circle.level}
           color={circle.color}
           levelUrl={circle.levelUrl}
           />
          ))}

{LESSONS_BREAKDOWN.map((circle, index) => (
           <CircularButton
           key={index}
           title={circle.level}
           color={circle.color}
           levelUrl={circle.levelUrl}
           />
          ))}

          
        </div>
        
        </div>
        
  );
}

export default LevelChoice;
