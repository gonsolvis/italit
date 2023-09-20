import React from 'react';
import './IndividualLesson.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

function IndividualLesson(props) {
  return (
    <div className='IndividualLesson'>
      {props.lesson.map((lesson, index) => (
        <div key={index}>
          <h1>{lesson.Lesson_title}</h1>
          <p>{lesson.description}</p>
          <h2>What are {lesson.lesson_title}?</h2>
          <p>{lesson.what_are}</p>
          <h2>Examples of {lesson.lesson_title}</h2>
          
          {/* Render HTML content safely */}
          <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
          
          
          <h2>When to Use {lesson.lesson_title}</h2>
          <p>{lesson.when_to_use}</p>
          <h2>Quiz</h2>
          <p>Test your knowledge of {lesson.lesson_title} with our quiz!</p>
        </div>
      ))}
    </div>
  );
}

export default IndividualLesson;
