import React from 'react';
import './home.css';
import profilePic from '../../Assets/images/profile photo.jpg';

const Home = () => {
    return (
        <div className="home">
            <img src={profilePic} alt="Profile" className="profile-pic" />
            <h1 className="name">Justus Asogwa</h1>
            <p className="title">Data and Machine Learning Specialist / Front-End Developer</p>
            <a href="#contact" className="contact-button">Get in touch →</a>
        </div>
    );
};

export default Home;
