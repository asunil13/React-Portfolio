import { useState, useEffect } from 'react';
import AnimatedLetters from "../AnimatedLetters";
import Loader from 'react-loaders';
import './index.scss';
import Image1 from '../../assets/images/c.png';
import Image3 from '../../assets/images/css-icon.svg';
import Image4 from '../../assets/images/docker.webp';
import Image5 from '../../assets/images/git.png';
import Image6 from '../../assets/images/html-icon.svg';
import Image7 from '../../assets/images/java.webp';
import Image8 from '../../assets/images/js-icon.svg';
import Image9 from '../../assets/images/kotlin.png';
import Image14 from '../../assets/images/microsoft.webp';
import Image15 from '../../assets/images/powerautomate.png';
import Image16 from '../../assets/images/powerbi.png';
import Image17 from '../../assets/images/python.png';
import Image18 from '../../assets/images/r.png';
import Image19 from '../../assets/images/sql.png';
import Image20 from '../../assets/images/react-icon.svg';
import Image21 from '../../assets/images/powerapps.png';
import Image22 from '../../assets/images/figma.png';

const Skill = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const skillsArray = ['S', 'K', 'I', 'L', 'L', 'S'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animated-hover');
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const images = [
    { src: Image6, alt: "HTML" },
    { src: Image3, alt: "CSS" },
    { src: Image8, alt: "JS" },
    { src: Image20, alt: "React" },
    { src: Image17, alt: "Python" },
    { src: Image7, alt: "Java" },
    { src: Image18, alt: "R" },
    { src: Image1, alt: "C" },
    { src: Image19, alt: "SQL" },
    { src: Image4, alt: "Docker" },
    { src: Image9, alt: "Kotlin" },
    { src: Image5, alt: "Git" },
    { src: Image14, alt: "Microsoft" },
    { src: Image15, alt: "Power Automate" },
    { src: Image16, alt: "Power BI" },
    { src: Image21, alt: "Power Apps",
      src: Image22, alt: "Figma"}
  ];

  return (
    <>
      <div className="container skill-page">
        <div className="text-zone2">
          <h1 className="skills-title">
            <AnimatedLetters letterClass={letterClass} strArray={skillsArray} idx={15} />
          </h1>
          <p className="skills-text">
            Languages, frameworks, and tools I have worked with.
          </p>
        </div>

        <div className="skills-images">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="skill-img"
              style={{ '--delay': `${index * 0.2}s` }}
            />
          ))}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Skill;
