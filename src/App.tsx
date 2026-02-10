import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Placeholder components until we implement the real ones
const AboutPlaceholder = () => <div className="container py-20 text-center"><h1 className="text-4xl font-bold">About Page Coming Soon</h1></div>;
const ProjectsPlaceholder = () => <div className="container py-20 text-center"><h1 className="text-4xl font-bold">Projects Page Coming Soon</h1></div>;
const ContactPlaceholder = () => <div className="container py-20 text-center"><h1 className="text-4xl font-bold">Contact Page Coming Soon</h1></div>;

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
