import React, { useState } from 'react';
import { Menu, X, Layers, PhoneCall, Sparkles } from 'lucide-react';
import { ModalType } from '../types';

interface NavbarProps {
  onOpenModal: (modal: ModalType) => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header id="main-header" className="sticky top-0 z-40 w-full bg-[#12161f] border-b border-slate-800/80 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Brand Logo */}
          <div 
            id="brand-logo" 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:bg-blue-500 transition-colors">
              <span className="text-white font-extrabold text-lg tracking-tight font-sans">B</span>
            </div>
            <span className="text-white font-bold text-lg sm:text-xl tracking-tight">
              BootstrapStudio
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-8">
            <button
              id="nav-home-btn"
              onClick={() => handleNavClick('hero')}
              className="text-slate-200 hover:text-white text-sm font-medium transition-colors cursor-pointer py-1"
            >
              Home
            </button>
            <button
              id="nav-about-btn"
              onClick={() => onOpenModal({ type: 'about' })}
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors cursor-pointer py-1"
            >
              About
            </button>
            <button
              id="nav-services-btn"
              onClick={() => handleNavClick('offerings')}
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors cursor-pointer py-1"
            >
              Services
            </button>
            <button
              id="nav-contact-btn"
              onClick={() => onOpenModal({ type: 'contact' })}
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors cursor-pointer py-1"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="md:hidden bg-[#161b26] border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <button
            id="mobile-nav-home"
            onClick={() => handleNavClick('hero')}
            className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-slate-800/80 transition-colors"
          >
            Home
          </button>
          <button
            id="mobile-nav-about"
            onClick={() => { setMobileMenuOpen(false); onOpenModal({ type: 'about' }); }}
            className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
          >
            About
          </button>
          <button
            id="mobile-nav-services"
            onClick={() => handleNavClick('offerings')}
            className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
          >
            Services
          </button>
          <button
            id="mobile-nav-contact"
            onClick={() => { setMobileMenuOpen(false); onOpenModal({ type: 'contact' }); }}
            className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-blue-400 hover:text-blue-300 hover:bg-slate-800/80 transition-colors flex items-center justify-between"
          >
            <span>Contact Us</span>
            <PhoneCall className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
