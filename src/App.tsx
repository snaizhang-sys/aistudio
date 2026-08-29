import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { KeyOfferings } from './components/KeyOfferings';
import { SuccessStories } from './components/SuccessStories';
import { Footer } from './components/Footer';
import { DetailModal } from './components/DetailModal';
import { Toast } from './components/Toast';
import { ModalType } from './types';

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleShowToast = (message: string) => {
    setToastMessage(message);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Navigation Bar */}
      <Navbar 
        onOpenModal={(modal) => setActiveModal(modal)} 
        onNavigate={handleNavigate} 
      />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* Hero Carousel with Absolute Control */}
        <HeroCarousel 
          onOpenModal={(modal) => setActiveModal(modal)} 
        />

        {/* Section: Our Key Offerings */}
        <KeyOfferings 
          onOpenModal={(modal) => setActiveModal(modal)} 
        />

        {/* Section: Featured Success Stories */}
        <SuccessStories 
          onOpenModal={(modal) => setActiveModal(modal)} 
        />
      </main>

      {/* Footer with Copyright and Legal links */}
      <Footer 
        onOpenModal={(modal) => setActiveModal(modal)} 
      />

      {/* Interactive Detail / Action Modal */}
      <DetailModal 
        modal={activeModal} 
        onClose={() => setActiveModal(null)} 
        onShowToast={handleShowToast} 
      />

      {/* Global Toast Notification */}
      <Toast 
        message={toastMessage} 
        onClose={() => setToastMessage(null)} 
      />
    </div>
  );
}
