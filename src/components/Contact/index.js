import { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);  
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again');
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1 className='contact-title'>
            <AnimatedLetters 
              letterClass={letterClass} 
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} 
              idx={15} 
            />
          </h1>
          <p>
            If you have any questions or would like to get in touch, please contact me using this form!
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-row">
                <input placeholder="Name" type="text" name="name" required />
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <input
                placeholder="Subject"
                type="text"
                name="subject"
                required
              />
              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>
              <button type="submit" className="flat-button">SEND</button>
            </form>
          </div>
        </div>

        
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Contact;
