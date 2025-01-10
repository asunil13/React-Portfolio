import { useState, useEffect } from 'react';
import AnimatedLetters from "../AnimatedLetters";
import Loader from 'react-loaders';
import './index.scss';
import { Link } from 'react-router-dom';
import Research from '../../../src/research.pdf';
import DataReport from '../../../src/datareport.pdf';

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [isVisible, setIsVisible] = useState(false);
  const projectArray = ['P', 'R', 'O', 'J', 'E', 'C', 'T', 'S'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
      setIsVisible(true); // Start card animations after title animation
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: 'Second Serve - Leftover Food Marketplace App',
      description: 'Developed a mobile app that allows restaurants to list leftover food items at reduced prices for college students, helping reduce waste and offering affordable meals. Integrated location services to show nearby restaurants and push notifications to alert students of new food items.',
      link: 'https://github.com/Second-Serve/frontend',
      buttonText: "GitHub",
      isExternal: true,
      secondButton: {
        text: 'Demo Video',
        link: 'https://www.youtube.com/watch?v=NroWwZBAIfc',
      }
    },
    {
      title: 'Medical Chatbot',
      description: 'Developed a medical chatbot focused on kidney cancer using OpenAIs GPT-3.5 Turbo, GPT-4, and other LLMs. Created a working graphical user interface.',
      link: Research,
      buttonText: "Presentation",
      isExternal: true,
      secondButton: {
        text: 'Website',
        link: 'https://mimrtl.radiology.wisc.edu/2024/04/26/mimrtl-undergraduate-team-members-participate-in-the-2024-undergraduate-research-symposium/'
      }
    },   
    {
      title: 'Yoga4You App',
      description: 'Developing Yoga4You, an app that generates custom yoga sequences based on user preferences, skill progression, and goals. Designing the UI for both the web application (React) and the mobile app, focusing on intuitive navigation and real-time feedback to correct yoga poses, enhancing user experience across platforms.',
    },
    {
      title: 'Memory Card Game',
      description: 'Created a memory card game using HTML/CSS/JAVASCRIPT with randomization, scoring, and multiple levels, featuring a layout that adapts seamlessly to various screen sizes.',
      link: 'https://github.com/asunil13/Memory-Game',
      buttonText: "GitHub",
      isExternal: true,
      secondButton: {
        text: 'Play Game',
        link: 'https://asunil13.github.io/card_game/index.html'
      }
    },
    {
      title: 'Movie Timer',
      description: 'Developed a smart movie timer in JAVA that provides tailored recommendations by matching film durations with users available time slots, using a Red-Black Tree to efficiently manage and retrieve movie data.',
    },
    {
      title: 'Dancing Badgers',
      description: 'Created a graphical simulation of a badger dance show in a basketball arena, using object-oriented principles, inheritance, interfaces, casting, and graphical user interfaces.',
    },
    {
      title: 'Data Analysis Report',
      description: 'Used R to explore the correlations between a Pokémons health, attack, defense, and legendary status, producing detailed numerical and graphical summaries, including regression analysis and t-test confidence intervals.',
      link: DataReport,
      isExternal: true,
      buttonText: "Report"
    }
  ];

  const renderButton = (link, text, isExternal) => {
    if (isExternal) {
      return (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="learn-more-btn"
        >
          {text}
        </a>
      );
    }
    return (
      <Link to={link} className="learn-more-btn">
        {text}
      </Link>
    );
  };

  return (
    <>
      <div className="container project-page">
        <div className="text-zone2">
          <h1 className="project-title">
            <AnimatedLetters letterClass={letterClass} strArray={projectArray} idx={15} />
          </h1>
          <p>Below are some of the projects I have worked on. Scroll to see them all!</p>
        </div>

        <div className="projects-gallery">
          {projects.map((project, index) => (
            <div 
              className={`project-card ${isVisible ? 'show' : ''}`} 
              key={index}
              style={{ 
                animationDelay: `${index * 200}ms` // Each card appears 200ms after the previous one
              }}
            >
              <h3>{project.title}</h3>
              <p className='description'>{project.description}</p>
              <div className="button-container">
                {project.buttonText && renderButton(project.link, project.buttonText, project.isExternal)}
                {project.secondButton && (
                  <a 
                    href={project.secondButton.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="learn-more-btn second-btn"
                  >
                    {project.secondButton.text}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Project;