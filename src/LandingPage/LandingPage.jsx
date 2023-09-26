import React from 'react';
import "./landingPage.css"
import { Link } from 'react-router-dom';

function LandingPage() {
   
  return (
    <div className='landingPage' >
      <div className='leftside' id='leftsideId'>  
        
     </div>
     <div className='rightside'>    
     <div className='minirightside'>       
  <h1> ItaLit</h1>
  <p> Welcome to our attempt of teaching italian! I am not a native speaker and neither is chatGpt but we only try our best to teach for free those who want to learn. </p>
   <p id='p-extraInfo'>
    Click Below to choose the lessons from the different levels we have available! </p>
     <Link to="{lesson.gameUrl}" >
     <button>
     See the levels 
     </button>
     </Link>
     </div>
     </div>
     </div>
        
  );
}

export default LandingPage;
