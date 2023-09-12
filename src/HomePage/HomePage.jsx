import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CircularButton from '../CircularButton/CircularButton';
import LESSONS_BREAKDOWN from '../DataFolder/LessonsBreakdown';
import './HomePage.css';

function HomePage() {
   
  return (
    <div className='homePage'>
       
        <div className='buttonMappingBox'>
       {LESSONS_BREAKDOWN.map((circle, index) => (
           <CircularButton
           key={index}
           title={circle.level}
           color={circle.color}
           />
          ))}

          

          
        </div>
        
        </div>
        
  );
}

export default HomePage;
