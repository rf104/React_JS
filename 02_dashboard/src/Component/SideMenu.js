import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Sidebar.css';

function SideMenu() {
  return (
    <div className="bg-dark col-auto col-md-3 min-vh-100 d-flex flex-column justify-content-between">
      <div>
        <Link to="/" className="text-decoration-none text-white d-flex align-items-center p-3">
          <i className="fs-4 bi bi-house-heart"></i>
          <span className="ms-1 fs-4">Hospital</span>
        </Link>
        <hr className="text-secondary" />
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link text-white fs-5 my-1">
              <i className="bi bi-speedometer2"></i>
              <span className="ms-3">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/home" className="nav-link text-white fs-5 my-1">
              <i className="bi bi-house"></i>
              <span className="ms-3">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/patients" className="nav-link text-white fs-5 my-1">
              <i className="bi bi-person-lines-fill"></i>
              <span className="ms-3">Patients</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/doctors" className="nav-link text-white fs-5 my-1">
              <i className="bi bi-person-badge"></i>
              <span className="ms-3">Doctors</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/schedule" className="nav-link text-white fs-5 my-1">
              <i className="bi bi-calendar3"></i>
              <span className="ms-3">Schedule</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="dropdown open p-3">
        <a
          className="text-decoration-none text-white dropdown-toggle"
          type="button"
          id="triggerId"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="bi bi-person-circle"></i>
          <span className="ms-2">Receptionists</span>
        </a>
        <div className="dropdown-menu" aria-labelledby="triggerId">
          <a className="dropdown-item" href="#">
            Profile
          </a>
          <a className="dropdown-item" href="#">
            Settings
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
