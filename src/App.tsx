import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuickEnquiryModal } from './components/QuickEnquiryModal';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Academics } from './pages/Academics';
import { Admissions } from './pages/Admissions';
import { Campus } from './pages/Campus';
import { StudentLife } from './pages/StudentLife';
import { Achievements } from './pages/Achievements';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

// Helper component to scroll to top on route change & update document title
const ScrollToTopAndTitle: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Dynamic Title Management
    let pageTitle = 'Greenfield Matriculation School | Coimbatore';
    switch (pathname) {
      case '/':
        pageTitle = 'Greenfield Matriculation School | Home';
        break;
      case '/about':
        pageTitle = 'About Greenfield Matriculation School | Coimbatore';
        break;
      case '/academics':
        pageTitle = 'Academics | Greenfield Matriculation School';
        break;
      case '/admissions':
        pageTitle = 'Admissions 2026-2027 | Greenfield Matriculation School';
        break;
      case '/campus':
        pageTitle = 'Campus Facilities | Greenfield Matriculation School';
        break;
      case '/student-life':
        pageTitle = 'Student Life & Clubs | Greenfield Matriculation School';
        break;
      case '/achievements':
        pageTitle = 'Achievements & Honors | Greenfield Matriculation School';
        break;
      case '/gallery':
        pageTitle = 'Photo Gallery | Greenfield Matriculation School';
        break;
      case '/contact':
        pageTitle = 'Contact Us | Greenfield Matriculation School';
        break;
      default:
        pageTitle = 'Page Not Found | Greenfield Matriculation School';
    }
    document.title = pageTitle;
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const openEnquiry = () => setIsEnquiryOpen(true);
  const closeEnquiry = () => setIsEnquiryOpen(false);

  return (
    <Router>
      <ScrollToTopAndTitle />
      <div className="min-h-screen flex flex-col bg-[#faf9f5] text-gray-800 antialiased font-sans">
        
        {/* Sticky Main Navbar */}
        <Navbar onOpenEnquiry={openEnquiry} />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenEnquiry={openEnquiry} />} />
            <Route path="/about" element={<About onOpenEnquiry={openEnquiry} />} />
            <Route path="/academics" element={<Academics onOpenEnquiry={openEnquiry} />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/campus" element={<Campus onOpenEnquiry={openEnquiry} />} />
            <Route path="/student-life" element={<StudentLife onOpenEnquiry={openEnquiry} />} />
            <Route path="/achievements" element={<Achievements onOpenEnquiry={openEnquiry} />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Multi-column Footer */}
        <Footer onOpenEnquiry={openEnquiry} />

        {/* Global Quick Admissions Enquiry Popup Modal */}
        <QuickEnquiryModal isOpen={isEnquiryOpen} onClose={closeEnquiry} />

      </div>
    </Router>
  );
};

export default App;
