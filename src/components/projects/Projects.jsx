import React from 'react';
import './Projects.css';

const data = [
  {
    id: 1,
    title: 'Name_Sorter',
    techStack: ['C++', 'Merge Sort', 'DSA Concepts'],
    description:
      'This C++ program allows users to enter a list of names and sorts them alphabetically (A-Z) using the Merge Sort algorithm. It demonstrates practical application of Data Structures & Algorithms, along with dynamic memory allocation, string handling, and input validation.',
    features: [
      'Sorts a dynamic list of 20–50 names.',
      'Handles C-style strings with strcmp for accurate comparison.',
      'Allows the user to sort multiple lists in one execution.',
    ],
  },
  {
    id: 2,
    title: 'Snake-Game-project',
    techStack: [
      'C++',
      'Linear Search',
      '2D Arrays',
    ],
    description:
      'This is a simple terminal-based Snake Game created using fundamental programming and DSA (Data Structures & Algorithms) concepts. The game runs in a 2D grid where the player controls a snake that grows in length each time it consumes food. The game ends when the snake collides with the wall or itself.',
    features: [
      '2D Grid Game Board ',
      'Snake Movement – Controlled using W, A, S, D keys.',
      "Game Over Conditions – Collision with walls or with the snake's own body ends the game",
    ],
  },
  {
    id: 3,
    title: 'Portfolio',
    techStack: ['HTML', 'CSS', 'Javascript'],
    description:
      ' Developed a clean and responsive portfolio website using HTML, CSS, JavaScript, and Bootstrap. Applied UI/UX best practices to ensure intuitive navigation, fast loading, and an engaging user experience across all devices. ',
    features: [
      'Showing my achievements and skills',
      'Supports light and dark Mode',
      'Mobile Friendly UI',
    ],
  },
];

const Projects = () => {
  return (
    <section className="projects container section" id="projects">
      <h2 className="section__title">Projects</h2>

      <div className="projects__container grid">
        {data.map(({ id, title, description, techStack, features }) => {
          return (
            <div className="projects__card" key={id}>
              <h3 className="projects__title">{title}</h3>
              <p className="projects__description">{description}</p>

              <div className="projects__tech">
                <h4>Tech Stack:</h4>
                <div className="tech-tags">
                  {techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="projects__features">
                <h4>Key Features:</h4>
                <ul>
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
