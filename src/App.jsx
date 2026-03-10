import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ProjectionModal from './components/ProjectionModal';
import { ModalProvider, useModal } from './context/ModalContext';

function AppContent() {
  const { isModalOpen, closeModal } = useModal();

  return (
    <>
      <header role="banner">
        <Navbar />
      </header>
      <main id="main-content" role="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
      <ProjectionModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

import { ToastProvider } from './context/ToastContext';

function App() {
  return (
    <ToastProvider>
      <ModalProvider>
        <AppContent />
      </ModalProvider>
    </ToastProvider>
  );
}

export default App;
