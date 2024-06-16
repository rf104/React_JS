import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideMenu from './Component/Dashboard';
import Dashboard from './Component/Dashboard';
import Home from './Component/Home';
import Patients from './Component/Patients';
import Doctors from './Component/Doctors';
import Schedule from './Component/Schedule'

function App() {
  return (
    <Router>
      <div className="d-flex">
        <SideMenu />
        <div className="content-container">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/" element={<Dashboard />} /> {/* Default to Dashboard */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
