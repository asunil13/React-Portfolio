import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
import { Link, NavLink } from 'react-router-dom';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelope, faHome, faLightbulb, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to="/">
      <img src={LogoS} alt="logo" />
    </Link>

    <nav>
        <NavLink exact activeClassName="active" to="/" className="home-link">
          <FontAwesomeIcon icon={faHome} color="#CB2D6F" />
        </NavLink>
        <NavLink activeClassName="active" to="/about" className="about-link">
            <FontAwesomeIcon icon={faUser} color="#CB2D6F" />
        </NavLink>
        <NavLink activeClassName="active" to="/skills" className="skills-link">
            <FontAwesomeIcon icon={faLightbulb} color="#CB2D6F" />
        </NavLink>
        <NavLink activeClassName="active" to="/experience" className="experience-link">
            <FontAwesomeIcon icon={faBriefcase} color="#CB2D6F" />
        </NavLink>
        <NavLink activeClassName="active" to="/contact" className="contact-link">
            <FontAwesomeIcon icon={faEnvelope} color="#CB2D6F" />
        </NavLink>
    </nav>

    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/aditi-sunil/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/asunil13"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="mailto:aditisunil13@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
);

export default Sidebar;
