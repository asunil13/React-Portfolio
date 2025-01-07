import './App.scss';
import Home from './components/Home';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Project';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
