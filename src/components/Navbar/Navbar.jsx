import React from 'react';
import './Navber.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center py-3">
      <div className="container">
        <a href="/" className="navbar-brand">
          <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap">
            <use xlinkHref="#bootstrap"></use>
          </svg>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav" style={{ margin: '0 auto' }}> {/* Add margin for centering */}
          <ul className="navbar-nav fw-bold">
            <li className="nav-item">
              <a href="#" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Schedules</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Membership</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Pricing</a>
            </li>
          </ul>
        </div>

        <div className="d-flex">
          <button type="button" className="btn me-2">Offers</button>
          <button type="button" className="btn btn-primary btn-rounded round-orange-button">Courses</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
