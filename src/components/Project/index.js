import { useState, useEffect } from 'react';
import AnimatedLetters from "../AnimatedLetters";
import Loader from 'react-loaders';
import './index.scss';

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const projectArray = ['P', 'R', 'O', 'J', 'E', 'C', 'T', 'S'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container project-page">
        <div className="text-zone2">
          <h1 className="project-title">
            <AnimatedLetters letterClass={letterClass} strArray={projectArray} idx={15} />
          </h1>
          <p>
            Below are some of the projects I have worked on. Click on them to learn more!
          </p>
        </div>

        <div className="projects-gallery">
          {/* Add your project cards or content here */}
          <p className="coming-soon">More projects coming soon!</p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Project;
