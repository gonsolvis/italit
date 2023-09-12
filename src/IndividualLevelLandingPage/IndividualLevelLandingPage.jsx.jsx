import React from 'react';
import './individualLevelLandingPage.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function IndividualLevelLandingPage(props) {
console.log("propssss", props)
  return (
    <div className='IndividualLevelLandingPage'>
      {props.lessons.map((lesson) => (
          <div className="card" style={{ width: "20rem", height:"10rem" }}>
          <div className="card-body" key={lesson.id}>
            <h5 className="card-title">{lesson.title}</h5> 
            <Link to={lesson.lessonUrl} className="card-link">
              See Lesson
            </Link>
            <Link to={lesson.gameUrl} className="card-link">
              See Lesson
            </Link>
        </div>
        </div>
     
          ))}
      </div>
  );
}

export default IndividualLevelLandingPage;
