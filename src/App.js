// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PatientList from './components/PatientList';
import PatientDetails from './components/PatientDetails';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import './App.css';
import Home from './pages/Home';
import { Patient } from './components/Patient';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import About from './pages/About';
import { Doctor } from './components/Doctor';
import StaffMembers from './pages/StaffMembers';


const App = () => {
    const [selectedPatientId, setSelectedPatientId] = useState(null);
 
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Routes>
                        {/* <Route path="/about" element={
                            <div>
                                {selectedPatientId ? (
                                    <PatientDetails patientId={selectedPatientId} />
                                ) : (
                                    <PatientList onSelectPatient={setSelectedPatientId} />
                                )}
                                
                            </div>
                        } /> */}
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/doctors" element={<Doctor />} />
                        <Route path="/staffs" element={<StaffMembers/>} />
                        <Route path="/patientinfo" element={<Patient/>} />
                        <Route path="/login" element={<LoginPage/>} />
                        <Route path="/register" element={<RegisterPage/>} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
