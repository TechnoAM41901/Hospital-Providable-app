// src/components/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1 id='heading'>Hospital Management System</h1>
            <nav>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/patientinfo">Patient Info</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/staffs">Staff Member</Link>
                <Link to="/doctors">Doctors</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
        </header>
    );
};

export default Header;
