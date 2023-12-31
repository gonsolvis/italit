  import React from "react";
  import "./backButton.css";
  import "bootstrap/dist/js/bootstrap.bundle.min.js";
  import { Link } from "react-router-dom";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
  import { useLocation } from 'react-router-dom';
  
  function BackButton() {
    const location = useLocation();
    let backlink = null;
    let text = null


    
  
    if (location.pathname.includes("/italian-grammar/a1/")) {
      backlink = "/italian-grammar/a1";
      text = "Back to Lessons"
    } 
      if (location.pathname === "/italian-grammar/a1" || location.pathname === "/italian-grammar/a2" || location.pathname === "/italian-grammar/b1") {
      backlink = "/level_choice";
      text = "Back to Levels";
    }
    console.log("backlink:", backlink);
    return (
      <div className="BackButton">
          <div className="backBox">
      <Link to={backlink} className="link-backbox"> <FontAwesomeIcon id="faArrowLeft" icon={faArrowLeft} style={{ color: "#8739f9" }} /> {text} </Link> 
      </div> 
    
      </div>
    );
  }

  export default BackButton;
