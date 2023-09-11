import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CircularButton from '../CircularButton/CircularButton';
import HOME_PAGE_CIRCLES_MAPPING_DATA from "../DataFolder/HomePageCirclesMappingData"
import './HomePage.css';

function HomePage() {
    console.log("HOME_PAGE_CIRCLES_MAPPING_DATA", HOME_PAGE_CIRCLES_MAPPING_DATA)
  return (
    <div className='homePage'>
       
        <div className='buttonMappingBox'>
       {HOME_PAGE_CIRCLES_MAPPING_DATA.map((circle) => (
           <CircularButton
           key={circle.id}
           title={circle.title}
           color={circle.color}
           />
          ))}
        </div>
        </div>
        
  );
}

export default HomePage;
