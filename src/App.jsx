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
import LESSONS_INDEX from "./DataFolder/Lessons_index";
import GameStructure from "./GameStructure/GameStructure";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import GameStructure2 from "./GameStructure/GameStructure2";

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

          {LESSONS_INDEX.lessons.map((lesson, index) => (
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

          {LESSONS_INDEX.lessons.map((lesson, index) => {
            return (
              <Route
                key={index}
                path={`/${lesson.gameUrl}`}
                element={
                  lesson.game[0].gameType == 2 ? (
                    <GameStructure2
                      cards={lesson.game[0].gameObject}
                      lessonUrl={lesson.lessonUrl}
                    />
                  ) : (
                    <GameStructure
                      cards={lesson.game[0].gameObject}
                      lessonUrl={lesson.lessonUrl}
                    />
                  )
                }
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
