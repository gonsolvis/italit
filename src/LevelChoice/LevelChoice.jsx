import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CircularButton from '../CircularButton/CircularButton';
import LESSONS_BREAKDOWN from '../DataFolder/LessonsBreakdown';
import './levelChoice.css';

function LevelChoice() {
   
  return (
    <div className='LevelChoice'>
      <div className='InnerLevelChoice'> 
      <h1 className='h1-LevelChoice'>  Choose a level</h1>

 <div className="card" id='chooseLevelCard'>
  
  <div className="card-body">
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
