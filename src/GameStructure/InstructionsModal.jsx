import React, { useState } from "react";
import "./endModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function InstructionModal(props) {
  const toggleModal = () => {
    console.log("I am being fucking clicked");
  };

  return (
    <>
      <div onClick={toggleModal} className="overlay"></div>
      <div className="modal-content">
        <div className="you-have-lost">
          <h2>
            Instuctions <FontAwesomeIcon icon={faStopwatch} />
          </h2>

          <button
            className="restart-button my-3 mx-5"
            // onClick={}
          >
            Restart Game
          </button>
          <button className="restart-button my-3 mx-5">
            {/* <Link to={} className="modal-button-link">
              Want to study more?
            </Link> */}
          </button>
        </div>
      </div>
    </>
  );
}
