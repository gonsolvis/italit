import React from "react";
import "./IndividualLesson.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import BackButton from "../BackButton/BackButton";


function IndividualLesson(props) {
  return (
    <div className="IndividualLesson">
        {props.lesson.map((lesson, index) => (
        <div key={index} className="contentContainerOuterBox">
         <BackButton

         />
          <h1 className="h1-IndividualLesson">
            What are {lesson.Lesson_title}?
          </h1>
          <p>{lesson.what_are}</p>
          <div
            className="contentContainer"
            dangerouslySetInnerHTML={{ __html: lesson.content }}
          />
          <br />
          {/* <h3>Quiz</h3> */}
          <p>
            Test your knowledge of {lesson.lesson_title} with our
            <Link className="individuallesson-link" to={props.gameUrl}> QUIZ!</Link></p>
          <br />
        </div>
      ))}
    </div>
  );
}

export default IndividualLesson;
