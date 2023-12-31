import React from 'react';
import './nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LessonsBreakdown from '../DataFolder/LessonsBreakdown';
import { Link } from 'react-router-dom'; // Import the Link component
import logo from '../images/homepage-nav.png'; // Replace with the actual path to your image


function Nav() {
  return (
    <nav className="navbar navbar-expand">
      <div className="container-fluid">
      <img src={logo} alt="My Image" className='nav-logo' />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="dropdown" // Bootstrap 5 dropdown toggle
          data-bs-bs="dropdown"     // Bootstrap 5 dropdown
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown" // Bootstrap 5 dropdown toggle
                data-bs-bs="dropdown"     // Bootstrap 5 dropdown
                aria-expanded="false"
              >
                Levels
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown" id="heefoidsmoids">
                {LessonsBreakdown.map((lesson, index) => (
                  <li key={index}>
                    <Link to={lesson.levelUrl} className="dropdown-item">
                      {lesson.level}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
              </div>
      </div>
    </nav>
  );
}

export default Nav;
