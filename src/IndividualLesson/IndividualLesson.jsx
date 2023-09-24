import React from 'react';
import './IndividualLesson.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

function IndividualLesson(props) {
  return (
    <div className='IndividualLesson'>
           <div className='contentContainerOuterBox'>
      {props.lesson.map((lesson, index) => (
        <div key={index}>
          {/* <h1>{lesson.Lesson_title}</h1>
          <p>{lesson.description}</p> */}
          <h1>What are {lesson.lesson_title}?</h1>
          <p>{lesson.what_are}</p>
          
          <h2>Lets get started!</h2>
     
                  {/* Render HTML content safely */}
          <div className='contentContainer' dangerouslySetInnerHTML={{ __html: lesson.content }} />
                <h3>Quiz</h3>
          <p>Test your knowledge of {lesson.lesson_title} with our <Link to={lesson.gameUrl}> quiz!</Link>  </p>
          <br/>
        </div>
        
      ))}
    </div>
    </div>
  );
}

export default IndividualLesson;
