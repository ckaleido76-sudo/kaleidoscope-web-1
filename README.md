# Kaleidoscope Recovery Website

A revolutionary recovery solution website built with Next.js 15, featuring trauma-informed healing approaches and the innovative 3-phase Kaleidoscope Method.

## 🎯 Project Overview

This website showcases Kaleidoscope Recovery's radical approach to alcohol recovery, featuring:

- **Immersive Hero Animation**: Custom kaleidoscope canvas animation with performance optimizations
- **3-Phase Recovery System**: Interactive visualization of the transformation journey  
- **Theme Switcher**: Three distinct visual themes (Ethereal, Bold, Organic)
- **Mobile-First Design**: Optimized for all devices with strict no-horizontal-scroll policy
- **Performance Focused**: 90+ Lighthouse scores with advanced optimizations
- **Accessibility First**: WCAG 2.1 AA compliant with comprehensive keyboard navigation

## 🚀 Features

### Core Sections
- **Hero Section**: Animated kaleidoscope background with compelling messaging
- **About Section**: Statistics and key differentiators
- **Problem Section**: Comparison of traditional vs. Kaleidoscope approach
- **Method Section**: Interactive 3-phase system explanation
- **Testimonials**: Video placeholder with success metrics
- **Book Section**: "Smashed" book promotion with 3D effects
- **CTA Section**: Email capture with success animations
- **Footer**: Comprehensive links and crisis support resources

### Technical Features
- **Theme System**: Dynamic CSS custom properties with localStorage persistence
- **Responsive Design**: Mobile-first with breakpoint optimization
- **Performance**: Image optimization, code splitting, lazy loading
- **SEO**: Complete meta tags, Open Graph, JSON-LD structured data
- **Accessibility**: Screen reader support, keyboard navigation, reduced motion
- **Security**: CSP headers, XSS protection, secure configurations

## 🛠 Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS with custom design system
- **Typography**: Epilogue font from Google Fonts
- **Animations**: Framer Motion + Custom CSS animations
- **Icons**: Lucide React
- **Performance**: Built-in Next.js optimizations
- **Deployment**: Vercel with edge functions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/devenspear/Kaleidoscope.git
   cd Kaleidoscope1.0
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📱 Development Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production  
npm run start        # Start production server
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript type checking
```

## 🎨 Design System

### Color Palette
- **Primary**: #5B2CFA (Purple)
- **Secondary**: #FFBC44 (Gold)  
- **Background**: #0A0A0F (Near black)
- **Surface**: #1A1A2E (Dark purple-gray)
- **Text Primary**: #FFFFFF
- **Text Secondary**: #B8B8C8
- **Accent Light**: #E5D9FF

### Typography
- **Primary Font**: Helvetica (system fallback)
- **Secondary Font**: Epilogue (Google Fonts)
- **Responsive Scaling**: clamp() functions for fluid typography

### Themes
1. **Ethereal** (Default): Soft purples with flowing animations
2. **Bold Transformation**: High contrast with geometric patterns  
3. **Organic Healing**: Nature-inspired greens with organic movements

## 🌐 Deployment

### Vercel Deployment (Recommended)

The project is currently deployed at: **https://url1234.com**

1. **Connect to Vercel**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Link to existing project
   vercel link --project url1234-com
   
   # Deploy
   vercel --prod
   ```

2. **GitHub Integration**
   - Connected to GitHub repository: `devenspear/Kaleidoscope`
   - Auto-deployment on push to main branch
   - Branch previews for pull requests

## 🔒 Security & Performance Features

- Content Security Policy headers
- XSS protection mechanisms  
- CSRF protection for forms
- **Lighthouse Performance**: 90+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Mobile-First**: Optimized for all device sizes

## ♿ Accessibility Features

- **Screen Reader Support**: Comprehensive ARIA labels
- **Keyboard Navigation**: Full site navigation without mouse
- **Focus Management**: Visible focus indicators and logical flow
- **Color Contrast**: WCAG AA compliant color ratios
- **Reduced Motion**: Respects user motion preferences

## 🐛 Recent Fixes & Updates

### Mobile UX Improvements
- ✅ Fixed hero animation control panel visibility on mobile
- ✅ Control panel now starts minimized and hides when scrolling
- ✅ Improved sign up button contrast and readability
- ✅ Resolved TypeScript ESLint errors for production builds

### Performance Optimizations
- ✅ Removed unused imports and variables
- ✅ Optimized scroll event handlers with proper cleanup
- ✅ Enhanced mobile responsiveness across all sections

## 🔗 Links

- **Live Site**: https://url1234.com
- **GitHub Repository**: https://github.com/devenspear/Kaleidoscope
- **Vercel Dashboard**: https://vercel.com/deven-projects/url1234-com

## 📞 Support

For technical support or questions about the Kaleidoscope Recovery website, please open an issue on GitHub.

---

**Built with ❤️ for healing and transformation**
