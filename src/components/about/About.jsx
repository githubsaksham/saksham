import React from 'react';
import './About.css';
import Image from '../../assets/saksham/saksham.jpg';
import Resume from '../../assets/saksham/CV.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }

    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Image} alt="Profile" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello! I'm Saksham Agarwal, a Computer Science Engineering student at Lovely Professional University, currently in my 4th year (2022–2026).
                        </p>
                        <p className="about__description">
                            I am passionate about <b>Data Structures and Algorithms in C++</b> and enjoy simplifying complex coding concepts for students. I actively practice problem-solving and believe in teaching through real-world examples and structured problem sets.
                        </p>
                        <p className="about__description">
                            My core programming skills include <b>C++ and Java</b>, with strong fundamentals in Object-Oriented Programming, Algorithm Design, and Competitive Programming. I maintain a GitHub repository of topic-wise DSA problems with detailed solutions to support learners.
                        </p>
                        <p className="about__description">
                            I have also completed certifications in C++ programming. Currently, my focus is on creating effective <b>teaching materials</b> like lecture slides, coding notes, and interview prep content for DSA learners.
                        </p>
                        <p className="about__description">
                            🚀 Let's learn, solve, and grow together!
                        </p>

                        <h3 className="skills__title">Skills</h3>
                        <ul className="about__list">
                            <li className="about__list-item">
                                <span className="about__list-icon">💻</span>
                                <span className="about__list-text">Programming: C++ | Java | Python | C | JavaScript</span>
                            </li>
                            <li className="about__list-item">
                                <span className="about__list-icon">📚</span>
                                <span className="about__list-text">DSA Topics: Arrays | Linked List | Stack | Queue | Trees | Graphs | DP</span>
                            </li>
                            <li className="about__list-item">
                                <span className="about__list-icon">🛠</span>
                                <span className="about__list-text">Tools & Platforms: Git |  SQL | VS Code</span>
                            </li>
                            <li className="about__list-item">
                                <span className="about__list-icon">🎯</span>
                                <span className="about__list-text">Core Concepts: OOPS | DBMS | OS | Networking | Automata</span>
                            </li>
                            <li className="about__list-item">
                                <span className="about__list-icon">🏆</span>
                                <span className="about__list-text">Special Focus: Competitive Programming | Coding Interview Prep</span>
                            </li>
                        </ul>
                        <button className="btn about__btn" onClick={downloadResume}>Download CV</button>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About;
