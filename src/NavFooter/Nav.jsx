import React from 'react';
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LessonsBreakdown from '../DataFolder/LessonsBreakdown';
import { Link } from 'react-router-dom'; // Import the Link component

function Nav() {
  return (
    <nav className="navbar navbar-expand">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">ItaLit</Link>
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
            {/* 
            <li className="nav-item">
              <Link className="nav-link" to="/italian-grammar/A1">A1</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/italian-grammar/A2">A2</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/italian-grammar/B1">B1</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/italian-grammar/B2">B2</Link>
            </li> */}
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
                Lessons
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
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
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
