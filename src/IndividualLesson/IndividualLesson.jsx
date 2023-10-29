import React from "react";
import "./IndividualLesson.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
import LessonImage from "../LessonImage/LessonImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

function IndividualLesson(props) {
  return (
    <div className="IndividualLesson">
      <div className="marginBox">
        {props.lesson.map((lesson, index) => (
          <div key={index} className="contentContainerOuterBox">
            <BackButton />
            <LessonImage />
            <h1 className="h1-IndividualLesson">{lesson.Lesson_title}</h1>
            <p>{lesson.what_are}</p>
            <div
              className="contentContainer"
              dangerouslySetInnerHTML={{ __html: lesson.content }}
            />
            <p>
              {props.gameUrl ? (
                <>
                  Test your knowledge of {lesson.Lesson_title} with our
                  <Link className="individuallesson-link" to={props.gameUrl}>
                    {" "}
                    QUIZ!{" "}
                    <FontAwesomeIcon
                      id="faChartSimple"
                      icon={faGamepad}
                      style={{ color: "var(--purple)" }}
                    />
                  </Link>
                </>
              ) : (
                ""
              )}
            </p>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndividualLesson;
