import { useState, useEffect } from 'react';
import AnimatedLetters from "../AnimatedLetters"; // Import your AnimatedLetters component
import Loader from 'react-loaders'; // Import the Loader component for animation
import './index.scss'; // Import the styles for the component
import Image1 from '../../assets/images/c.png'; // Import the image for the component
import Image2 from '../../assets/images/c++.png'; // Import the image for the component
import Image3 from '../../assets/images/css-icon.svg'; // Import the image for the component
import Image4 from '../../assets/images/docker.webp'; // Import the image for the component
import Image5 from '../../assets/images/git.png'; // Import the image for the component
import Image6 from '../../assets/images/html-icon.svg'; // Import the image for the component
import Image7 from '../../assets/images/java.webp'; // Import the image for the component
import Image8 from '../../assets/images/js-icon.svg'; // Import the image for the component
import Image9 from '../../assets/images/kotlin.png'; // Import the image for the component
import Image14 from '../../assets/images/microsoft.webp'; // Import the image for the component
import Image15 from '../../assets/images/powerautomate.png'; // Import the image for the component
import Image16 from '../../assets/images/powerbi.png'; // Import the image for the component
import Image17 from '../../assets/images/python.png'; // Import the image for the component
import Image18 from '../../assets/images/r.png'; // Import the image for the component
import Image19 from '../../assets/images/sql.png'; // Import the image for the component
import Image20 from '../../assets/images/react-icon.svg'; // Import the image for the component 
import Image21 from '../../assets/images/powerapps.png'; // Import the image for the component 

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
        <div className="text-zone2">
          <h1 className="skills-title">
            <AnimatedLetters letterClass={letterClass} strArray={skillsArray} idx={15} />
          </h1>
          <p className="skills-text">
              Languges, frameworks, and tools I have worked with.
          </p>
        </div>
        
        <div className="skills-images">
          <img src={Image6} alt="HTML" className="skill-img" />
          <img src={Image3} alt="CSS" className="skill-img" />
          <img src={Image8} alt="JS" className="skill-img" />
          <img src={Image20} alt="React" className="skill-img" />
          <img src={Image17} alt="Python" className="skill-img" />
          <img src={Image7} alt="Java" className="skill-img" />
          <img src={Image18} alt="R" className="skill-img" />
          <img src={Image1} alt="C" className="skill-img" />
          <img src={Image2} alt="C++" className="skill-img" />
          <img src={Image19} alt="SQL" className="skill-img" />
          <img src={Image4} alt="Docker" className="skill-img" />
          <img src={Image9} alt="Kotlin" className="skill-img" />
          <img src={Image5} alt="Git" className="skill-img" />
          <img src={Image14} alt="Microsoft" className="skill-img" />
          <img src={Image15} alt="Power Automate" className="skill-img" />
          <img src={Image16} alt="Power BI" className="skill-img" />
          <img src={Image21} alt="Power Apps" className="skill-img" />
          <img src={Image17} alt="Python" className="skill-img" />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Skill;
