import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import Loader from 'react-loaders';
import Resume from "/Users/aditisunil/Documents/Personal/React-Portfolio/src/Resume.pdf";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "B", "O", "U", "T", " ", "M", "E"]}
              idx={15}
              delay={100}
            />
          </h1>
          <p>
            Hi! My name is Aditi, and I am a current Junior at the University of
            Wisconsin-Madison. I am double majoring in Computer Science and Data
            Science. I am passionate about web development and artificial
            intelligence. Look through my website to learn more about my
            experiences, skills, and projects!
          </p>
        </div>
        {/* Button Below the Box */}
        <div className="button-container">
          <a href={Resume} className="flat-button" download>VIEW MY RESUME</a>
          <a href="https://www.credly.com/users/aditi-sunil" target="_blank" className="flat-button">
            CREDLY CERTIFICATES
          </a>
          <a href="https://www.linkedin.com/in/aditi-sunil/" target="_blank" className="flat-button">
            LINKEDIN
          </a>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
