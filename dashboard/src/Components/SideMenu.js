import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/js/dist/dropdown'
import './Sidebar.css'

function SideMenu() {
return (
    <div className="container-fluid">
    <div className="row">
        <div className="bg-dark col-auto col-md-3 min-vh-100 d-flex justify-content-between flex-column">
            <div>
            <a className="text-decoration-none d-none d-sm-inline text-white d-flex align-items-center p-3">
                <i className="fs-4 bi bi-house-heart"></i>
                <span className="ms-1 fs-4">Hospital</span>
            </a>
            <hr className='text-secondary'/>
            <ul className="nav flex-column">
            <li className="nav-item">
            <a href="#" className="nav-link text-white fs-5 my-1">
                <i className="bi bi-speedometer2"></i>
                <span className="ms-3 d-none d-sm-inline">Dashboard</span>
            </a>
            </li>
            <li className="nav-item">
            <a href="#" className="nav-link text-white fs-5 my-1">
                <i className="bi bi-house"></i>
                <span className="ms-3 d-none d-sm-inline">Home</span>
            </a>
            </li>
            <li className="nav-item">
            <a href="#" className="nav-link text-white fs-5">
                <i className="bi bi-person-lines-fill"></i>
                <span className="ms-3 d-none d-sm-inline">Patients</span>
            </a>
            </li>
            <li className="nav-item">
            <a href="#" className="nav-link text-white fs-5 my-1">
                <i className="bi bi-person-badge"></i>
                <span className="ms-3 d-none d-sm-inline">Doctors</span>
            </a>
            </li>
            <li className="nav-item">
            <a href="#" className="nav-link text-white fs-5 my-1">
                <i className="bi bi-calendar3"></i>
                <span className="ms-3 d-none d-sm-inline">Schedule</span>
            </a>
            </li>
            </ul>
            </div>
            
            <div class="dropdown open">
                <a
                    class="text-decoration-none text-white dropdown-toggle p-3"
                    type="button"
                    id="triggerId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    <i className='bi bi-person-circle'></i> 
                    <span className='ms-2 d-none d-sm-inline'>Receptionists</span>
                </a>
                <div class="dropdown-menu" aria-labelledby="triggerId">
                    <a class="dropdown-item" href="#">Profile</a>
                    <a class="dropdown-item" href="#">Settings</a>
                </div>
            </div>
            
        </div>
    </div>
    </div>
);
}

export default SideMenu;
