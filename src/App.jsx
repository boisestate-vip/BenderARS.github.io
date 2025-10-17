import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Competition from './pages/Competition.jsx';
import Join from './pages/Join.jsx';
import Sponsors from './pages/Sponsors.jsx';
import Advisors from './pages/Advisors.jsx';
import Outreach from './pages/Outreach.jsx';
import PressKit from './pages/PressKit.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';
import Donate from './pages/Donate.jsx';

/**
 * The top‑level router mapping.  Each route corresponds to a page
 * described in the provided website structure.  A common Layout
 * wraps each page to provide consistent navigation and footer.
 */
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/competition" element={<Competition />} />
        <Route path="/join" element={<Join />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/advisors" element={<Advisors />} />
        <Route path="/outreach" element={<Outreach />} />
        <Route path="/presskit" element={<PressKit />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </Layout>
  );
}

export default App;