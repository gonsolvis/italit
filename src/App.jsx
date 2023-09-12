import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './NavFooter/Nav';
import Footer from './NavFooter/Footer';
import HomePage from './HomePage/HomePage';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LESSONS_BREAKDOWN from './DataFolder/LessonsBreakdown';
import IndividualLevelLandingPage from './IndividualLevelLandingPage/IndividualLevelLandingPage.jsx';
import IndividualLesson from './IndividualLesson/IndividualLevelLandingPage.jsx';

function App() {
  
  return (
    <Router>
      <div className='appComp'>
        <Nav />
        <Routes>
        <Route path="/" element={<HomePage />} />
        
        {LESSONS_BREAKDOWN.map((lesson, index) => (
            <Route
              key={index}
              path={`/${lesson.levelUrl}`}
              element={
                <IndividualLevelLandingPage
                lessons={lesson.classes}
                      />
              }
            />
          ))}

<Route path="/italian-grammar/a1/greetings" element={<IndividualLesson />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
