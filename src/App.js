import './App.css';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Project from './Components/Project/Project';
import Resume from './Components/Resume/Resume'
import MainLayout from './Components/Layouts/MainLayout';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <Router >
      <ScrollToTop/>
      <Navbar />
      <Routes basename={process.env.PUBLIC_URL}>
        <Route exact path="/" element={<MainLayout />} />
        <Route path="/project" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
