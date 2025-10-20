'use client';

import React from 'react';
import { Mail, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          {/* Email Contact */}
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-primary flex-shrink-0" />
            <a
              href="mailto:connect@kaleidoscope.life"
              className="text-text-primary hover:text-primary transition-colors text-lg"
            >
              connect@kaleidoscope.life
            </a>
          </div>

          {/* Social Media Icons */}
          <div>
            <p className="text-text-secondary mb-4">Follow us</p>
            <div className="flex space-x-4 justify-center">
              <button
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-text-secondary transition-all duration-300 transform hover:scale-105 hover:bg-primary/20 cursor-not-allowed opacity-50"
                disabled aria-disabled
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-text-secondary transition-all duration-300 transform hover:scale-105 hover:bg-primary/20 cursor-not-allowed opacity-50"
                disabled aria-disabled
              >
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-text-secondary">
            <p>© 2025 Kaleidoscope Ventures, LLC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;