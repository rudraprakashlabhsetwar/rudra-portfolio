import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, Check, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleDownload = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#a855f7', '#6366f1', '#38bdf8']
      });
    } catch {
      // Ignore if confetti fails
    }
  };

  const handleCopyLink = () => {
    const url = window.location.origin + personalInfo.resumePath;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#0e0f14] border border-white/[0.1] rounded-2xl shadow-2xl shadow-purple-950/30 overflow-hidden z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.08] bg-[#12131a]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base sm:text-lg flex items-center gap-2">
                    {personalInfo.name} — Resume
                    <span className="text-xs font-normal px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      PDF
                    </span>
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Official Resume • Web3 Business Development & Ecosystem Growth
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.resumePath}
                  download="Rudra_Labhasetwar_Resume.pdf"
                  onClick={handleDownload}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-purple-600 hover:bg-purple-500 text-white transition-colors shadow-lg shadow-purple-600/20"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download PDF
                </a>
                <a
                  href={personalInfo.resumePath}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                  title="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Viewer Body */}
            <div className="flex-1 min-h-[500px] max-h-[calc(90vh-140px)] w-full bg-[#0a0a0d] overflow-hidden relative">
              <iframe
                src={`${personalInfo.resumePath}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                className="w-full h-full border-0 min-h-[500px]"
                title="Rudra Labhasetwar Resume"
              />
            </div>

            {/* Footer with actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-3.5 border-t border-white/[0.08] bg-[#12131a] text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <span>Looking to connect regarding a Web3 opportunity?</span>
                <a
                  href={`mailto:${personalInfo.email}?subject=Opportunity%20Discussion%20-%20Web3%20BD`}
                  className="text-purple-400 hover:text-purple-300 font-medium underline underline-offset-2"
                >
                  Email Directly
                </a>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Copy PDF Link</span>
                    </>
                  )}
                </button>

                <a
                  href={personalInfo.resumePath}
                  download="Rudra_Labhasetwar_Resume.pdf"
                  onClick={handleDownload}
                  className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium bg-purple-600 text-white"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
