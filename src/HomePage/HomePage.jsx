import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CircularButton from '../CircularButton/CircularButton';
import LESSONS_BREAKDOWN from '../DataFolder/LessonsBreakdown';
import romulus from "../images/romulus.png"
import './HomePage.css';

function HomePage() {
   
  return (
    <div className='homePage'>
      <div className='innerhomepage'> 

 <div className="card w-75 h-75">
  <div className="card-body">
 <img className="home-image" src={romulus} alt="react logo" />
  <p >Italian, the language of love and art, beckons with its enchanting melodies and cultural riches. Learning Italian opens doors to a world of passion, culinary delights, and timeless beauty.

Why learn Italian? It's your key to exploring Italy's artistic treasures, from Da Vinci's masterpieces to Dante's epic poetry.</p> 
{/* <img className="home-image" src={romulus} alt="react logo" /> */}
  </div> 
  </div> 
  </div>
        <div className='buttonMappingBox'>
          <h1> Choose your level</h1>
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

export default HomePage;
