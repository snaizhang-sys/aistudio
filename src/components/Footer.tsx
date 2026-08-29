import React from 'react';
import { ModalType } from '../types';

interface FooterProps {
  onOpenModal: (modal: ModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  return (
    <footer id="main-footer" className="w-full bg-[#131722] text-slate-400 py-10 sm:py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          
          {/* Copyright text */}
          <div id="footer-copyright" className="text-slate-400 font-normal order-2 sm:order-1 text-center sm:text-left">
            © 2026 BootstrapStudio, Inc. All rights reserved.
          </div>

          {/* Legal / Policy Links */}
          <div id="footer-links" className="flex items-center space-x-6 order-1 sm:order-2">
            <button
              id="footer-privacy-btn"
              onClick={() => onOpenModal({ type: 'privacy' })}
              className="text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              id="footer-terms-btn"
              onClick={() => onOpenModal({ type: 'terms' })}
              className="text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
