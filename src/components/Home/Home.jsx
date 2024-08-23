import React, {useEffect} from 'react';
import './home.css';
import profilePic from '../../Assets/images/profile photo.jpg';

import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-scroll'

const Home = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

    return (
        <div className="home">
            <img src={profilePic} alt="Profile" data-aos="fade-up" data-aos-duration="1000"className="profile-pic" />
            <h1 data-aos="fade-up" data-aos-duration="1500" className="name">Justus Asogwa</h1>
            <p data-aos="fade-up" data-aos-duration="2000" className="title">Data and Machine Learning Specialist / Front-End Developer</p>
            <Link to="contact" smooth={true} duration={500} data-aos="fade-left" data-aos-duration="2500" className="contact-button">Get in touch →</Link>
        </div>
    );
};

export default Home;
