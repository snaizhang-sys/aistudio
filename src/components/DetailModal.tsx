import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Zap, Star, Building2, Send, Clock, Quote } from 'lucide-react';
import { ModalType } from '../types';

interface DetailModalProps {
  modal: ModalType;
  onClose: () => void;
  onShowToast: (message: string) => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ modal, onClose, onShowToast }) => {
  // Form states
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactCompany, setContactCompany] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [selectedService, setSelectedService] = useState('Custom Development');

  if (!modal) return null;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      onShowToast('Inquiry sent successfully! Our engineering team will follow up within 24 hours.');
      onClose();
    }, 1200);
  };

  return (
    <div 
      id="detail-modal-backdrop" 
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div 
        id="detail-modal-content"
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70 sticky top-0 z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
              B
            </div>
            <span className="font-bold text-slate-800 text-sm tracking-tight">BootstrapStudio</span>
          </div>
          <button
            id="close-modal-btn"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">

          {/* OFFERING DETAILS */}
          {modal.type === 'offering' && (
            <div className="space-y-6">
              <div className="relative rounded-xl overflow-hidden aspect-[16/9] shadow-inner bg-slate-900">
                <img 
                  src={modal.data.image} 
                  alt={modal.data.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-extrabold text-white tracking-tight">{modal.data.title}</h3>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">Practice Overview</h4>
                <p className="text-slate-700 leading-relaxed text-base">
                  {modal.data.fullDetails?.overview || modal.data.description}
                </p>
              </div>

              {modal.data.fullDetails?.highlights && (
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-3">Core Engineering Capabilities</h4>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {modal.data.fullDetails.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {modal.data.fullDetails?.techStack && (
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-2.5">Integrated Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {modal.data.fullDetails.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-slate-100 border border-slate-200 text-slate-700 rounded-md text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-slate-100 flex gap-3 justify-end">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onShowToast(`Consultation requested for ${modal.data.title}`);
                    onClose();
                  }}
                  className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
                >
                  Request Technical Consultation
                </button>
              </div>
            </div>
          )}

          {/* STORY DETAILS */}
          {modal.type === 'story' && (
            <div className="space-y-6">
              <div className="relative rounded-xl overflow-hidden aspect-[16/9] shadow-inner bg-slate-900">
                <img 
                  src={modal.data.image} 
                  alt={modal.data.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    {modal.data.fullStory?.client || 'Case Study'}
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight mt-1">{modal.data.title}</h3>
                </div>
              </div>

              {/* Key Metric Banner */}
              {modal.data.fullStory?.metric && (
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-medium text-blue-700 uppercase tracking-wider block">Key Business Metric</span>
                    <span className="text-xl sm:text-2xl font-extrabold text-blue-900">{modal.data.fullStory.metric}</span>
                  </div>
                  <Zap className="w-8 h-8 text-blue-500 opacity-80" />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">Challenge</h5>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {modal.data.fullStory?.challenge || modal.data.description}
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">Solution</h5>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {modal.data.fullStory?.solution || 'Integrated modern architectural frameworks and optimized pipelines.'}
                  </p>
                </div>
              </div>

              {modal.data.fullStory?.quote && (
                <div className="p-4 bg-slate-900 text-white rounded-xl relative overflow-hidden">
                  <Quote className="w-8 h-8 text-blue-400/30 absolute right-4 bottom-3" />
                  <p className="text-sm italic text-slate-200 mb-3 relative z-10">
                    "{modal.data.fullStory.quote.text}"
                  </p>
                  <div className="text-xs text-slate-400 font-medium">
                    <span className="text-white font-semibold">{modal.data.fullStory.quote.author}</span> — {modal.data.fullStory.quote.role}
                  </div>
                </div>
              )}

              <div className="pt-2 border-t border-slate-100 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
                >
                  Back to Overview
                </button>
              </div>
            </div>
          )}

          {/* GET STARTED / ONBOARDING */}
          {modal.type === 'getStarted' && (
            <div className="space-y-5">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900">Initiate Your Enterprise Build</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Start building production-grade web layouts and microservices with our architecture team.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto animate-bounce" />
                  <h4 className="text-lg font-bold text-slate-900">Registration Complete</h4>
                  <p className="text-sm text-slate-600">Connecting you with our lead architect shortly...</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Alex Morgan" 
                        className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Work Email</label>
                      <input 
                        type="email" 
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="alex@enterprise.com" 
                        className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Primary Area of Interest</label>
                    <select 
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option>Custom Development & Modern Front-End</option>
                      <option>Cloud Infrastructure & Automatic Scaling</option>
                      <option>Strategic Analytics & Business Roadmaps</option>
                      <option>Full Architecture Audit & UX Modernization</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Project Details</label>
                    <textarea 
                      rows={3} 
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Outline your timeline, current stack, or expected milestones..." 
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md"
                    >
                      Get Started
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* CONTACT MODAL */}
          {modal.type === 'contact' && (
            <div className="space-y-5">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900">Get in Touch</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Have inquiries regarding enterprise licensing, technical consulting, or platform integration?
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-900">Message Received</h4>
                  <p className="text-sm text-slate-600">Our enterprise representative will reach out shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Your Name</label>
                      <input 
                        type="text" 
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Jordan Lee" 
                        className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Work Email</label>
                      <input 
                        type="email" 
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="jordan@company.com" 
                        className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Company / Organization</label>
                    <input 
                      type="text" 
                      value={contactCompany}
                      onChange={(e) => setContactCompany(e.target.value)}
                      placeholder="Acme Global Inc." 
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Message</label>
                    <textarea 
                      rows={4} 
                      required
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="How can our engineering solutions assist your team?" 
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* ABOUT MODAL */}
          {modal.type === 'about' && (
            <div className="space-y-5">
              <div className="text-center pb-2">
                <h3 className="text-2xl font-bold text-slate-900">About BootstrapStudio</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Empowering digital-first enterprises to design with absolute architectural control.
                </p>
              </div>

              <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
                <p>
                  BootstrapStudio provides engineering leadership, custom software development, and battle-tested cloud architectures for forward-thinking organizations worldwide.
                </p>
                <p>
                  We combine the world's most versatile front-end foundations with robust microservices, real-time analytics pipelines, and sustainable cloud computing practices.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-slate-50 p-3 rounded-lg text-center border border-slate-100">
                  <div className="text-xl font-bold text-blue-600">500+</div>
                  <div className="text-xs text-slate-500 mt-0.5">Enterprise Deployments</div>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg text-center border border-slate-100">
                  <div className="text-xl font-bold text-blue-600">99.99%</div>
                  <div className="text-xs text-slate-500 mt-0.5">Uptime Standard</div>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg text-center border border-slate-100">
                  <div className="text-xl font-bold text-blue-600">24/7</div>
                  <div className="text-xs text-slate-500 mt-0.5">Global Architecture Support</div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* PRIVACY POLICY */}
          {modal.type === 'privacy' && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Privacy Policy</h3>
              <p className="text-xs text-slate-500">Effective Date: January 1, 2026</p>
              <div className="text-sm text-slate-700 space-y-3 leading-relaxed max-h-72 overflow-y-auto pr-2">
                <p>
                  At BootstrapStudio, protecting your data privacy and maintaining system integrity is our highest priority.
                </p>
                <h5 className="font-bold text-slate-800">1. Information Collection</h5>
                <p>
                  We collect strictly necessary corporate contact details when you request architectural whitepapers, service consultations, or telemetry demos.
                </p>
                <h5 className="font-bold text-slate-800">2. Data Security & Storage</h5>
                <p>
                  All client telemetry is secured using AES-256 encryption at rest and TLS 1.3 in transit across certified multi-tenant cloud data centers.
                </p>
                <h5 className="font-bold text-slate-800">3. Third-Party Sharing</h5>
                <p>
                  We never monetize, rent, or distribute organizational data to third-party advertisers.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
                >
                  Acknowledge
                </button>
              </div>
            </div>
          )}

          {/* TERMS OF SERVICE */}
          {modal.type === 'terms' && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Terms of Service</h3>
              <p className="text-xs text-slate-500">Last Revised: January 2026</p>
              <div className="text-sm text-slate-700 space-y-3 leading-relaxed max-h-72 overflow-y-auto pr-2">
                <p>
                  Welcome to BootstrapStudio. By accessing our services, enterprise tools, or consulting resources, you agree to comply with standard service guidelines.
                </p>
                <h5 className="font-bold text-slate-800">1. Platform License</h5>
                <p>
                  Enterprise licenses grant non-exclusive, worldwide rights to deploy custom layout toolkits and microservice blueprints for commercial operations.
                </p>
                <h5 className="font-bold text-slate-800">2. Service Level Agreement</h5>
                <p>
                  Production cloud architecture contracts include guaranteed 99.99% availability backed by tier-1 engineering escalation teams.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
                >
                  Accept Terms
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
