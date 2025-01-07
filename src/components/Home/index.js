import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters'; 
import Loader from 'react-loaders';
import Headshot from '../../assets/images/headshot.jpeg';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const helloArray = ['H', 'e', 'l', 'l', 'o', '!', ' ', 'I', "'", 'm', ' '];
  const nameArray = ['A', 'd', 'i', 't', 'i', ' ', 'S', 'u', 'n', 'i', 'l', ','];
  const jobArray = ['a', ' ', 'S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={helloArray} idx={11} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={8} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={15} />
          </h1>
          <h2>Frontend Developer / UI / UX / AI</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <img src={Headshot} alt="Aditi Sunil" className="headshot" />
      </div>
    <Loader type="pacman"/>
    </>
  );
};

export default Home;