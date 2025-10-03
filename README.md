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
- **CTA Section**: Newsletter signup with MailerLite integration
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
- **Email Marketing**: MailerLite API integration
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
   git clone https://github.com/ckaleido76-sudo/kaleidoscope-web-1.git
   cd Kaleidoscope1.2
   ```

   **⚠️ IMPORTANT**: Always use the `Kaleidoscope1.2` directory for development.
   - This is the primary development environment
   - Connected to GitHub repository: `ckaleido76-sudo/kaleidoscope-web-1`
   - Auto-deploys to Vercel on push to main branch

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env.local` file in the project root:
   ```bash
   MAILERLITE_API_KEY=your_api_key_here
   MAILERLITE_GROUP_ID=your_group_id_here
   ```

   To get your MailerLite credentials:
   - **API Key**: Go to [MailerLite Dashboard](https://dashboard.mailerlite.com) → Settings → Developer API
   - **Group ID**: Go to Subscribers → Groups → Select your group

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3005
   ```

   Note: Port may vary if 3005 is in use. Check terminal output for actual port.

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

The project is currently deployed at: **https://kaleidoscope.life**

1. **Configure Environment Variables in Vercel**

   Go to your Vercel project → Settings → Environment Variables and add:
   - `MAILERLITE_API_KEY` - Your MailerLite API key
   - `MAILERLITE_GROUP_ID` - Your MailerLite group ID

   Make sure to add these for all environments (Production, Preview, Development).

2. **Connect to Vercel**
   ```bash
   # Install Vercel CLI
   npm i -g vercel

   # Link to existing project
   vercel link

   # Deploy
   vercel --prod
   ```

3. **GitHub Integration**
   - Connected to GitHub repository: `ckaleido76-sudo/kaleidoscope-web-1`
   - Auto-deployment on push to main branch
   - Branch previews for pull requests

### MailerLite Setup

Before deploying, ensure you've created the following custom fields in MailerLite:
- `user_type` (TEXT)
- `comments` (TEXT)
- `opt_in_texts` (TEXT)
- `state` (TEXT) - should already exist
- `phone` (TEXT) - should already exist

The signup form captures:
- Email (required)
- User Type: Future Client, Friend/Family, Investor/Partner, Treatment Center, or Healer/Employee
- State (optional)
- Phone (optional)
- Comments (optional)
- SMS Opt-in (optional)

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

### Content & Typography Updates (October 2025)
- ✅ Updated Method section with concise tagline: "At Kaleidoscope three things set us apart: We only work with those who are ready. We facilitate real healing. We never let go."
- ✅ Fixed header typography descender clipping with `leading-[1.1]` and `tracking-tight`
- ✅ Standardized form field heights using `min-h-[52px] sm:min-h-[60px]`
- ✅ Added animated success message with sequential affirmations
- ✅ Consolidated all formatting improvements (py-20 padding, video timestamps, trademarks)

### MailerLite Integration (October 2025)
- ✅ Integrated MailerLite API for newsletter subscriptions
- ✅ Created API route `/api/subscribe` for form submissions
- ✅ Updated main page to display full content directly (removed splash page)
- ✅ Configured custom fields: user_type, comments, opt_in_texts, state, phone
- ✅ Added environment variable configuration for API credentials
- ✅ Restored state dropdown with all 50 US states + DC

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

- **Live Site**: https://kaleidoscope.life
- **GitHub Repository**: https://github.com/ckaleido76-sudo/kaleidoscope-web-1
- **Local Development Path**: `/Users/devenspear/VibeCodingProjects/Kaleidoscope1.2`

## 📝 Project Structure

**⚠️ CRITICAL**: This project (`Kaleidoscope1.2`) is the ONLY active development version.

- **Active Project**: `Kaleidoscope1.2` (this directory)
- **GitHub Remote**: `ckaleido76-sudo/kaleidoscope-web-1`
- **Live Deployment**: `https://kaleidoscope.life` (Vercel)
- **Legacy Project**: `Kaleidoscope1.0` (deprecated - do not use)

## 📞 Support

For technical support or questions about the Kaleidoscope Recovery website, please open an issue on GitHub.

---

**Built with ❤️ for healing and transformation**
