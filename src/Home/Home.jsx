import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import logoHome from "../images/homepage-image.png"; // Replace with the actual path to your image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="Home">
      <div className="leftside" id="leftsideId"></div>
      <div className="rightside">
        {/* <div className="minirightside"> */}
        {/* <h1 className="h1-home"> ItaLit</h1> */}
        <img src={logoHome} alt="My Image" className="logohome" />
        <p className="p-home">
          Welcome to our attempt of teaching italian! I am not a native speaker
          and neither is chatGpt but we only try our best to teach for free
          those who want to learn.
        </p>
        <p id="p-extraInfo">
          Click Below to choose the lessons from the different levels we have
          available!
        </p>
        <Link className="levelChoiceLink" to="/level_choice">
          <button className="button-home">
            <span>See the levels</span>
            <span>
              {" "}
              <FontAwesomeIcon
                id="faChartSimple"
                icon={faChartSimple}
                style={{ color: "var(--white)" }}
              />
            </span>
          </button>
        </Link>
      </div>
    </div>
    // </div>
  );
}

export default Home;
