import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./NavFooter/Nav";
import Footer from "./NavFooter/Footer";
import Home from "./Home/Home";
import LevelChoice from "./LevelChoice/LevelChoice";
import LESSONS_BREAKDOWN from "./DataFolder/LessonsBreakdown";
import IndividualLevelLandingPage from "./IndividualLevelLandingPage/IndividualLevelLandingPage.jsx";
import IndividualLesson from "./IndividualLesson/IndividualLesson.jsx";
import lessons_index from "./DataFolder/LESSONS_INDEX";
import GameStructure from "./GameStructure/GameStructure";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

function App() {

  return (
    <div className="appComp">
      <Router>
        <Nav />
        <Routes>
          <Route path="/level_choice" element={<LevelChoice />} />
          <Route path="/" element={<Home />} />

          {LESSONS_BREAKDOWN.map((level, index) => (
            <Route
              key={index}
              path={level.levelUrl}
              element={
                <IndividualLevelLandingPage
                  lessons={level.classes}
                  level={level.level}
                />
              }
            />
          ))}

          {lessons_index.lessons.map((lesson, index) => (
            <Route
              key={index}
              path={lesson.lessonUrl}
              element={
                <IndividualLesson
                  lesson={lesson.lesson}
                  gameUrl={lesson.gameUrl}
                />
              }
            />
          ))}

          {lessons_index.lessons.map((lesson, index) => {
                return (
              <Route
                key={index}
                path={`/${lesson.gameUrl}`}
                element={
                  <GameStructure
                    cards={lesson.game[0].gameObject}
                    lessonUrl={lesson.lessonUrl}
                  />
                }
                console
              />
            );
          })}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
