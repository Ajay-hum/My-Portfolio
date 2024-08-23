import React from 'react';
import './skills.css'

const Skills = () => {
  const skills = ["HTML", "JavaScript", "React", "CSS", "Python", "Data-Analysis", "Machine-Learning"];

  return (
    <section className='skills container'>
      <h2>My Specializations include:</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
