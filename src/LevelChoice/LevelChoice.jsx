import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CircularButton from "../CircularButton/CircularButton";
import LESSONS_BREAKDOWN from "../DataFolder/LessonsBreakdown";
import "./levelChoice.css";

function LevelChoice() {
  return (
    <div className="LevelChoice">
      <div className="InnerLevelChoice">
        <h1 className="h1-LevelChoice"> Choose a level</h1>

        <p className="p-levelchoice">
          Choose below from lessons starting from A1 to C2.
          We will help you along the way with lessons and games!{" "}
        </p>

        <p className="p-levelchoice-extra">
          At A1, beginners learn greetings, numbers, and basic vocabulary for
          simple present tense sentences. A2 builds vocabulary, introduces basic
          grammar, and enables elementary conversations. B1 adds past tenses,
          complex topics, and improves listening and writing skills. B2 involves
          advanced conversations, newspaper reading, and mastering the
          subjunctive. C1 demonstrates fluency, complex literature reading, and
          cultural mastery, while C2 showcases near-native proficiency across
          all language aspects, opening advanced opportunities!{" "}
        </p>
      </div>
      <div className="buttonMappingBox">
        {LESSONS_BREAKDOWN.map((circle, index) => (
          <CircularButton
            key={index}
            title={circle.level}
            color={circle.color}
            levelUrl={circle.levelUrl}
          />
        ))}

        {LESSONS_BREAKDOWN.map((circle, index) => (
          <CircularButton
            key={index}
            title={circle.level}
            color={circle.color}
            levelUrl={circle.levelUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default LevelChoice;
