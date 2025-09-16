'use client';

import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Problem', href: '#problem' },
    { name: 'Approach', href: '#approach' },
    { name: 'Method', href: '#method' },
    { name: 'Testimonial', href: '#testimonial' },
    { name: 'Book', href: '#book' }
  ];

  const resources = [
    { name: 'Download "Smashed"', href: '#book' },
    { name: 'Free Assessment', href: '#cta' },
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'HIPAA Notice', href: '/hipaa' },
    { name: 'Accessibility', href: '/accessibility' }
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-light text-foreground mb-4">kaleidoscope</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                A radical recovery solution for those ready to be free from drinking and the pain beneath it.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-text-secondary">
                <Phone className="w-5 h-5" />
                <a href="tel:1-800-RECOVER" className="hover:text-primary transition-colors">
                  1-800-RECOVER
                </a>
              </div>
              <div className="flex items-center space-x-3 text-text-secondary">
                <Mail className="w-5 h-5" />
                <a href="mailto:hello@kaleidoscope.recovery" className="hover:text-primary transition-colors">
                  hello@kaleidoscope.recovery
                </a>
              </div>
              <div className="flex items-start space-x-3 text-text-secondary">
                <MapPin className="w-5 h-5 mt-0.5" />
                <div>
                  <p>123 Recovery Lane</p>
                  <p>Austin, TX 78701</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="text-text-secondary hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-medium text-foreground mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    onClick={(e) => handleAnchorClick(e, resource.href)}
                    className="text-text-secondary hover:text-primary transition-colors duration-300"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-medium text-foreground mb-6">Stay Connected</h4>
            <p className="text-text-secondary mb-4">
              Get weekly insights and inspiration delivered to your inbox.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-white border border-border rounded-l-lg text-foreground placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent opacity-50 cursor-not-allowed"
                  disabled
                  aria-disabled
                />
                <button className="px-6 py-3 bg-primary/50 text-white rounded-r-lg transition-all duration-300 transform hover:scale-95 cursor-not-allowed opacity-50" disabled aria-disabled>
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-text-secondary mb-4">Follow us</p>
              <div className="flex space-x-4">
                <button
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-text-secondary transition-all duration-300 transform hover:scale-95 hover:bg-primary/20 cursor-not-allowed opacity-50"
                  disabled aria-disabled
                >
                  <Facebook className="w-5 h-5" />
                </button>
                <button
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-text-secondary transition-all duration-300 transform hover:scale-95 hover:bg-primary/20 cursor-not-allowed opacity-50"
                  disabled aria-disabled
                >
                  <Instagram className="w-5 h-5" />
                </button>
                <button
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-text-secondary transition-all duration-300 transform hover:scale-95 hover:bg-primary/20 cursor-not-allowed opacity-50"
                  disabled aria-disabled
                >
                  <Twitter className="w-5 h-5" />
                </button>
                <button
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-text-secondary transition-all duration-300 transform hover:scale-95 hover:bg-primary/20 cursor-not-allowed opacity-50"
                  disabled aria-disabled
                >
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-wrap items-center justify-center lg:justify-start space-x-6 text-sm text-text-secondary">
              {legal.map((item, index) => (
                <React.Fragment key={item.name}>
                  <a 
                    href={item.href}
                    className="transition-colors hover:text-primary"
                  >
                    {item.name}
                  </a>
                  {index < legal.length - 1 && <span className="text-foreground/20">•</span>}
                </React.Fragment>
              ))}
            </div>

            <div className="text-sm text-text-secondary text-center lg:text-right">
              <p>© {currentYear} Kaleidoscope Recovery. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
