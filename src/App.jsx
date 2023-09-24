import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './NavFooter/Nav';
import Footer from './NavFooter/Footer';
import HomePage from './HomePage/HomePage';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LESSONS_BREAKDOWN from './DataFolder/LessonsBreakdown';
import IndividualLevelLandingPage from './IndividualLevelLandingPage/IndividualLevelLandingPage.jsx';
import IndividualLesson from './IndividualLesson/IndividualLesson.jsx';
import lessons_index from './DataFolder/Lessons_index';
import ARTICLES_GAME from "./DataFolder/GameInformation/ARTICLES_GAME"
import GameStructure from "./GameStructure/GameStructure"
function App() {
  return (
    <Router>
      <div className='appComp'>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />

          {LESSONS_BREAKDOWN.map((level, index) => (
            <Route
              key={index}
              path={level.levelUrl}
              element={<IndividualLevelLandingPage lessons={level.classes} />}
            />
            
          ))}

{lessons_index.lessons.map((lesson, index) => (
            <Route
              key={index}
              path={lesson.lessonUrl}
              element={<IndividualLesson lesson={lesson.lesson} />}
            />
            
          ))}

{lessons_index.lessons.map((lesson, index) => {
            console.log("numbers language", lesson.game[0].gameObject);
            return (
              <Route
                key={index}
                path={`/${lesson.gameUrl}`}
                element={<GameStructure cards={lesson.game[0].gameObject} lessonUrl={lesson.lessonUrl}/>}
              />
            );
          })}
       
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
