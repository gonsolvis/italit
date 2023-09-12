import React from 'react';
import './individualLevelLandingPage.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import lessonsData from "../DataFolder/LessonContent/LessonInformation/A1"
import definiteArticlesLesson from "../DataFolder/LessonContent/LessonInformation/DefArt"
// Import the lessonsData array here

function IndividualLesson() {
  return (
    <div className='IndividualLevelLandingPage'>
      {definiteArticlesLesson.map((lesson, index) => (
        <div key={index}>
          <h1>{lesson.title}</h1>
          <p>{lesson.description}</p>

          {lesson.sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2>{section.heading}</h2>
              <p>{section.content}</p>
              
              {section.items && section.items.length > 0 && (
                <ul>
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}

              {/* You can add a link to the quiz page here */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default IndividualLesson;
