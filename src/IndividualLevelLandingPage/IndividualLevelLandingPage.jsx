import React from "react";
import "./individualLevelLandingPage.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import BackButton from "../BackButton/BackButton";

function IndividualLevelLandingPage(props) {
  return (
    <div className="IndividualLevelLandingPage">
      <h1 className="IndividualLevelLandingPage-h1"> Lessons {props.level}</h1>
     <div className="IndividualLevelLandingPage-backbutton">
      <button>
      <BackButton />
      </button>
      </div>
      <div className="card-container">
        {props.lessons.map((lesson, index) => (
          <div className="card" key={index}>
            <div className="card-body">
              <h5 className="card-title">{lesson.title}</h5>
              <Link to={lesson.lessonUrl} className="card-link">
                See Lesson
              </Link>
              <Link to={lesson.gameUrl} className="card-link">
                Test your knowledge
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndividualLevelLandingPage;
