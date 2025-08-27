import React from 'react';
import './Home.css';
import Me from '../../assets/saksham/saksham.jpg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' width='120' />
                <h1 className="home__name">Saksham Agarwal</h1>
                <span className="home__education">Aspiring Java and C++ Developer | Problem Solver <br></br> Competitive Programming Enthusiast </span>

                <HeaderSocials />

                <a href="#contact" className="btn"> Contact Me</a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home