import React from 'react';
import './projects.css'

const Projects = () => {
  const projectList = [
    {
      title: "Budget Tracker",
      description: "A simple budget tracker application that allows users to manage their income and expenses.",
      techStack: "HTML, CSS and Javascript",
      link: "https://ajay-hum.github.io/Budget-Tracker/",
    },
    {
      title: "Travel and Tours Website",
      description: "This application allows users to explore and book exciting travel packages to various destinations around the world.",
      techStack: "React, CSS/Styled components",
      link: "https://ajay-hum.github.io/Travel-and-Tours-website/ ",
    },
    {
      title: "Online Bookstore",
      description: "This is a web application built using React.js that allows users to browse, search, and purchase books online. The application features a user-friendly interface with various components to enhance the shopping experience.",
      techStack: "React, CSS/Styled components",
      link: "https://ajay-hum.github.io/Online-Bookstore-Website/ "
    }
    // Add more projects here
  ];

  return (
    <section className='project container'>
      <h2>Latest Work</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
