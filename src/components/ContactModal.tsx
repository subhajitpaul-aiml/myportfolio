import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Copy, Mail, Send, Sparkles } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const email = 'subhajit.creator3d@studio.art';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      onClose();
    }, 2400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg rounded-[32px] sm:rounded-[40px] border border-[#D7E2EA]/30 bg-[#0C0C0C] p-6 sm:p-8 md:p-10 text-[#D7E2EA] shadow-2xl overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute -top-20 -right-20 w-52 h-52 bg-[#B600A8]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-52 h-52 bg-[#7621B0]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full border border-white/10 hover:border-white/30 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-[#B600A8]" />
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-medium">
                Let&apos;s collaborate
              </span>
            </div>
            <h3 className="hero-heading text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4">
              Get in Touch
            </h3>
            <p className="text-sm sm:text-base text-[#D7E2EA]/80 font-light leading-relaxed mb-6">
              Have a full-stack web, software, or application project in mind? Let&apos;s build
              something unforgettable together.
            </p>

            {/* Direct Email Pill */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/10 mb-6">
              <div className="flex items-center gap-3 overflow-hidden">
                <Mail className="w-5 h-5 text-[#B600A8] flex-shrink-0" />
                <span className="font-mono text-xs sm:text-sm truncate text-[#D7E2EA]">
                  {email}
                </span>
              </div>
              <button
                onClick={copyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-medium uppercase tracking-wider transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Contact Form */}
            {formSent ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-2xl bg-white/5 border border-green-500/30 text-center"
              >
                <Check className="w-10 h-10 text-green-400 mx-auto mb-2" />
                <h4 className="text-lg font-medium text-white mb-1">Message Sent!</h4>
                <p className="text-xs sm:text-sm text-white/70">
                  Thanks for reaching out! Subhajit will get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#B600A8] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#B600A8] transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    rows={3}
                    required
                    placeholder="Project details, timeline & vision..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#B600A8] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="contact-btn-glow w-full py-3.5 rounded-full text-white font-medium uppercase tracking-widest text-sm flex items-center justify-center gap-2 cursor-pointer hover:brightness-110 active:scale-95 transition-all mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
