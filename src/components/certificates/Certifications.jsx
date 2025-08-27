import React from 'react';
import './Certifications.css';
import { RiExternalLinkLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'Generative AI with Large Language Models',
    platform: 'Coursera (AWS)',
    skills: [
      'Artificial Intelligence and Machine Learning (AI/ML)',
      'Prompt Engineering',
      'Natural Language Processing',
    ],
    date: '2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/ZEHK9JUBK9UR?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
  },
  {
    title: 'Dynamic Programming, Greedy Algorithms',
    platform: 'Coursera',
    skills: ['Algorithms', 'Computational Thinking', 'Problem Solving', 'Data Structures'],
    date: '2024',
    link: 'https://www.coursera.org/account/accomplishments/certificate/JEJX42Y4459T',
  },
  {
    title: 'Approximation Algorithms and Linear Programming',
    platform: 'Coursera',
    skills: ['Algorithms'],
    date: '2024',
    link: 'https://www.coursera.org/account/accomplishments/certificate/7ADZZMP3JPAZ',
  },
  {
    title: 'Introduction to Cybersecurity Essentials',
    platform: 'Coursera',
    skills: ['System Security', 'Network Security', 'Cyberattacks','Cryptography'],
    date: '2024',
    link: 'https://www.coursera.org/account/accomplishments/certificate/XQG8SVJWAT3L',
  }
];
const Certifications = () => {
  return (
    <section className="certifications container section" id="certifications">
      <h2 className="section__title">Certifications</h2>

      <div className="certifications__container grid">
        {certifications.map((cert, index) => (
          <motion.div
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="certification__card"
            key={index}
          >
            <div className="certification__content">
              <h3 className="certification__title">{cert.title}</h3>
              <div className="certification__platform">
                <span className="platform__name">{cert.platform}</span>
                <span className="certification__date">{cert.date}</span>
              </div>
              <div className="certification__skills">
                {cert.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill__tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="certification__link"
            >
              <RiExternalLinkLine />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
