import { useState, useEffect } from 'react';
import AnimatedLetters from "../AnimatedLetters"; // Import your AnimatedLetters component
import Loader from 'react-loaders'; // Import the Loader component for animation
import './index.scss'; // Import the styles for the component

const Skill = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const skillsArray = ['S', 'K', 'I', 'L', 'L', 'S'];  // Array for "SKILLS" animation

  // Using useEffect hook to transition the animation class after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);  // Animation transition after 4 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container skill-page">
        <div className="text-zone">
          <h1 className="skills-title">
            <AnimatedLetters letterClass={letterClass} strArray={skillsArray} idx={15} />
          </h1>
        </div>
        
        {/* <div className="skills-images">
          <img src="../../assets/images/python.png" alt="Python" className="skill-img" />
          <img src="../../assets/images/javascript.png" alt="JavaScript" className="skill-img" />
          <img src="../../assets/images/java.png" alt="Java" className="skill-img" />
          <img src="../../assets/images/cpp.png" alt="C++" className="skill-img" />
          <img src="../../assets/images/html5.png" alt="HTML5" className="skill-img" />
          <img src="../../assets/images/css3.png" alt="CSS3" className="skill-img" />
        </div> */}
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Skill;
