import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CircularButton from '../CircularButton/CircularButton';
import LESSONS_BREAKDOWN from '../DataFolder/LessonsBreakdown';
import romulus from "../images/romulus.png"
import './HomePage.css';

function HomePage() {
   
  return (
    <div className='homePage'>

 <div className="card w-75 h-100">
  <div className="card-body">
 <img className="home-image" src={romulus} alt="react logo" />
  <p >Italian, the language of love and art, beckons with its enchanting melodies and cultural riches. Learning Italian opens doors to a world of passion, culinary delights, and timeless beauty.

Why learn Italian? It's your key to exploring Italy's artistic treasures, from Da Vinci's masterpieces to Dante's epic poetry.</p> 

<p>Beyond the classics, Italian is a vibrant language spoken in multiple countries, making it a practical choice for travelers and enthusiasts.

Immerse yourself in Italian, savor its beauty, and embark on a journey filled with culture and delight. Buona fortuna! (Good luck!)</p>
{/* <img className="home-image" src={romulus} alt="react logo" /> */}
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

          

          
        </div>
        
        </div>
        
  );
}

export default HomePage;
