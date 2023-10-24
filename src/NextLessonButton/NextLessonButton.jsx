import React from "react";
import "./backButton.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faForward } from "@fortawesome/free-solid-svg-icons";

function NextLessonButton() {}

return (
  <div className="BackButton">
    <div className="backBox">
      <Link to={backlink} className="link-backbox">
        Next Lesson
        <FontAwesomeIcon
          id="faForward"
          icon={faForward}
          style={{ color: "#8739f9" }}
        />{" "}
      </Link>
    </div>
  </div>
);

export default NextLessonButton;
