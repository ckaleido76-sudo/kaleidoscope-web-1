'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import KaleidoscopeLogo from '@/components/shared/KaleidoscopeLogo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keep items in visible site order
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Problem', href: '#problem' },
    { name: 'Approach', href: '#approach' },
    { name: 'Method', href: '#method' },
    { name: 'Testimonial', href: '#testimonial' },
    { name: 'Book', href: '#book' },
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const el = document.querySelector(href);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-[90] transition-all duration-300',
      isScrolled 
        ? 'bg-white/70 backdrop-blur-md border-b border-border' 
        : 'bg-transparent'
    )}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#hero"
              onClick={(e) => handleAnchorClick(e, '#hero')}
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <KaleidoscopeLogo
                size="md"
                showText={true}
                className="hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className="text-primary hover:text-primary/80 px-3 py-2 text-base font-medium transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <a
              href="#cta"
              onClick={(e) => handleAnchorClick(e, '#cta')}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              Are You Ready?
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-colors duration-300"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={cn(
        'md:hidden transition-all duration-300 ease-in-out',
        isMenuOpen 
          ? 'max-h-96 opacity-100 visible' 
          : 'max-h-0 opacity-0 invisible overflow-hidden'
      )}>
        <div className="px-4 pt-2 pb-6 bg-white/90 backdrop-blur-md border-t border-border">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="text-primary hover:text-primary/80 text-base font-medium transition-colors duration-300 py-2"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#cta"
              onClick={(e) => handleAnchorClick(e, '#cta')}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full text-base font-medium transition-all duration-300 w-full mt-2 text-center"
            >
              Are You Ready?
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
