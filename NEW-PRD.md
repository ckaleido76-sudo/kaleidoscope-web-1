Revised 1.1

# Product Requirements Document
## Kaleidoscope Recovery Website

### 1. Executive Summary

**Product Name:** Kaleidoscope Recovery Website  
**Version:** 1.1 
**Date:** September 2025  
**Platform:** Next.js web application hosted on Vercel  

**Vision Statement:**  
Create a transformative digital experience that reflects Kaleidoscope's revolutionary approach to alcohol recovery through immersive design, emotional resonance, and clear communication of the three-phase healing journey.

---

### 2. Technical Requirements

#### 2.1 Technology Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS with custom animations
- **Deployment:** Vercel
- **Development:** Claude Code integration
- **Animation Libraries:** Framer Motion, GSAP for complex animations
- **Background Effects:** Three.js or React Three Fiber for fractal animations

#### 2.2 Performance Requirements
- Lighthouse score: 90+ for Performance
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Smooth 60fps animations on modern devices

---

### 3. Design System

#### 3.1 Typography
- **Primary Font:** Helvetica (fallback: system sans-serif)
- **Secondary Font:** Epilogue (Google Fonts)
- **Font Scale:**
  - Hero: 72px/80px (desktop), 48px/56px (mobile)
  - H1: 48px/56px
  - H2: 36px/44px
  - H3: 24px/32px
  - Body: 18px/28px
  - Small: 14px/20px

#### 3.2 Color Palette
- **Primary:** #5B2CFA (Purple)
- **Secondary:** #FFBC44 (Gold)
- **Background:** #0A0A0F (Near black)
- **Surface:** #1A1A2E (Dark purple-gray)
- **Text Primary:** #FFFFFF
- **Text Secondary:** #B8B8C8
- **Accent Light:** #E5D9FF (Light purple for highlights)

#### 3.3 Design Themes (Style Switcher)
**Theme 1: "Ethereal" (Default)**
- Light purple fractal background
- Soft gradients and glows
- Smooth, flowing animations

**Theme 2: "Bold Transformation"**
- High contrast colors
- Geometric patterns
- Sharp, decisive animations

**Theme 3: "Organic Healing"**
- Nature-inspired colors (greens, earth tones)
- Organic shapes and movements
- Gentle, breathing animations

---

### 4. Component Architecture

#### 4.1 Global Components

**Header Navigation**
- **Desktop:** Fixed position with backdrop blur
  - Logo (left aligned)
  - Navigation items: Method, About, Resources, Contact
  - CTA button: "Are You Ready?" (right aligned)
  - Style switcher strip (top bar with 3 theme buttons)
- **Mobile:** 
  - Sticky header with reduced height (60px max)
  - Hamburger menu (right) with full-screen overlay
  - Logo (center or left)
  - Style switcher in hamburger menu
  - No horizontal overflow from menu animations

**Footer**
- Contact information
- Social links
- Privacy Policy, Terms
- Newsletter signup

#### 4.2 Page Sections

**Section 1: Hero**
- Full viewport height
- **Kaleidoscope Animation Component:**
  - CSS Module: `KaleidoscopeHero.module.css`
  - Immediate load on page render (no lazy loading)
  - Infinite loop animation
  - Performance optimizations:
    - GPU acceleration with `transform: translateZ(0)` or `will-change: transform`
    - CSS animations preferred over JavaScript
    - RequestAnimationFrame for any JS-based updates
    - Reduced complexity on mobile devices
    - Prefers-reduced-motion media query support
  - Browser optimizations:
    - Hardware acceleration enabled
    - Composite layers for smooth rendering
    - CSS containment for performance isolation
    - Animation-play-state control for visibility changes
- Main headline with typewriter effect
- Subheadline fade-in
- Primary CTA button with hover glow
- Scroll indicator animation

**Section 2: What is Kaleidoscope**
- Split layout: Text left, visual right
- Key points with staggered fade-in on scroll
- Statistics counter animation
- Emphasis quotes with highlight animation

**Section 3: The Problem (Traditional Rehab Fails)**
- Dark section with contrasting statistics
- Animated number counters
- Comparison chart (traditional vs Kaleidoscope)
- Hover effects on statistics cards

**Section 4: The Kaleidoscope Method**
- Three-phase journey visualization
- Interactive timeline/pathway
- Each phase expands on click/hover
- Progress indicators with animations
- Phase cards with:
  - Icon animation
  - Title
  - Description
  - Key benefits list

**Section 5: Testimonial**
- Video placeholder with custom play button
- Quote highlight with quotation marks animation
- Client name and transformation metrics

**Section 6: Book Section (Smashed)**
- Book cover 3D rotation on hover
- Download CTA with particle effect
- Amazon link with external icon

**Section 7: Ready to Transform (CTA)**
- Email capture form with validation
- Success state animation
- Background gradient animation

---

### 5. Interactions & Animations

#### 5.1 Scroll Animations
- **Parallax Effects:** Background elements move at different speeds
- **Fade-in on Scroll:** Content reveals as user scrolls
- **Number Counters:** Statistics animate when in viewport
- **Section Transitions:** Smooth color/theme transitions between sections

#### 5.2 Hover States
- **Buttons:** Scale up 5%, add glow effect
- **Cards:** Lift with shadow, border glow
- **Links:** Underline animation, color transition
- **Images:** Subtle zoom, brightness adjustment

#### 5.3 Micro-interactions
- **Loading States:** Shimmer effects
- **Form Fields:** Focus glow, validation feedback
- **Success States:** Confetti or particle burst
- **Navigation:** Smooth scroll with easing

#### 5.4 Background Animation

**Kaleidoscope Hero Animation (Primary):**
- **Implementation:** CSS Module (`KaleidoscopeHero.module.css`)
- **Loading:** Immediate on page load, no defer or lazy loading
- **Duration:** Infinite loop
- **Performance Optimizations:**
  ```css
  .kaleidoscope {
    will-change: transform, opacity;
    transform: translateZ(0); /* GPU acceleration */
    backface-visibility: hidden;
    perspective: 1000px;
    contain: layout style paint;
  }
  ```
- **Browser Optimizations:**
  - Use CSS animations over JavaScript where possible
  - Implement `animation-play-state: paused` when off-screen
  - Add `@media (prefers-reduced-motion: reduce)` fallback
  - Utilize CSS custom properties for dynamic values
  - Implement frame-rate limiting for battery conservation
- **Mobile Adjustments:**
  - Simplified geometry on mobile
  - Reduced particle count
  - Lower frame rate (30fps acceptable)
  - Touch-responsive pause/play option

**Fallback Patterns:**
- Static gradient for reduced motion preference
- Progressive enhancement approach
- Canvas/WebGL fallback to CSS if needed

---

### 6. Responsive Design (Mobile-First Approach)

#### 6.1 Breakpoints
- Mobile: 320px - 767px (PRIMARY FOCUS)
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large Desktop: 1440px+

#### 6.2 Mobile Optimization (Critical Requirements)

**Viewport Locking:**
- **No Horizontal Scroll:** Strict overflow-x: hidden on body and html
- **Fixed Viewport:** meta viewport tag with user-scalable=no
- **Container Constraints:** max-width: 100vw on all sections
- **CSS Prevention:**
  ```css
  html, body {
    overflow-x: hidden;
    width: 100%;
    position: relative;
  }
  * {
    max-width: 100vw !important;
  }
  ```

**Mobile-Specific Features:**
- Hamburger menu for navigation
- Stack layouts instead of side-by-side
- Simplified animations (performance)
- Touch-friendly tap targets (min 48px)
- Swipe gestures for phase cards
- Momentum scrolling (iOS): -webkit-overflow-scrolling: touch
- Safe area insets for notched devices
- Bottom navigation bar consideration (env(safe-area-inset-bottom))

**Performance Optimizations:**
- Lazy load images below the fold
- Reduce animation complexity on mobile
- Use CSS transforms instead of position changes
- Implement virtual scrolling for long lists
- Debounced scroll events

---

### 7. Content Management

#### 7.1 Dynamic Content
- Testimonials (video placeholders)
- Statistics (easily updatable)
- Phase descriptions
- CTA text variations

#### 7.2 Static Assets
- Hero background animation
- Icons and illustrations
- Book cover image
- Logo variations

---

### 8. SEO & Accessibility

#### 8.1 SEO Requirements
- Meta tags for all pages
- Open Graph tags
- Structured data for organization
- XML sitemap
- Robots.txt

#### 8.2 Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader optimization
- Reduced motion options
- Color contrast ratios (4.5:1 minimum)
- Alt text for all images
- ARIA labels for interactive elements

---

### 9. Development Phases

#### Phase 1: Foundation (Week 1)
- Next.js setup with Vercel
- Design system implementation
- Theme switcher functionality
- Basic component library

#### Phase 2: Core Pages (Week 2)
- Hero section with animations
- Method section with phase cards
- Responsive layouts
- Basic interactivity

#### Phase 3: Enhanced Experience (Week 3)
- Advanced animations
- Fractal background implementation
- Form functionality
- Performance optimization

#### Phase 4: Polish & Launch (Week 4)
- Cross-browser testing
- Accessibility audit
- Performance tuning
- Deployment preparation

---

### 10. Success Metrics

- **Mobile Performance:** 90+ Lighthouse score on mobile
- **Zero Horizontal Scroll:** 0% horizontal overflow issues
- **Page Load Time:** < 2 seconds on 4G mobile
- **Bounce Rate:** < 40%
- **Time on Site:** > 3 minutes
- **CTA Conversion:** > 5%
- **Mobile Usage:** Optimized for 70%+ mobile traffic
- **Accessibility Score:** 100% WCAG compliance
- **Touch Target Success:** 100% of interactive elements meet 48px minimum

---

### 11. Future Enhancements

- A/B testing framework
- Analytics integration
- CMS integration for content updates
- Multi-language support
- Progressive Web App features
- Advanced personalization based on user journey

---

### 12. Reference Implementation Notes

**Inspired by beckleypsytech.com:**
- Clean, professional layout
- Subtle background movement
- Clear content hierarchy
- Smooth scroll interactions

**Unique Kaleidoscope Elements:**
- Warmer, more emotional tone
- Three-phase journey visualization
- ForeverCare™ emphasis
- Transformation-focused messaging

---

### 13. File Structure

```
kaleidoscope-website/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── themes/
│       ├── ethereal.css
│       ├── bold.css
│       └── organic.css
├── components/
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   ├── KaleidoscopeAnimation.tsx
│   │   └── KaleidoscopeHero.module.css
│   ├── Method/
│   ├── Testimonial/
│   ├── Navigation/
│   ├── ThemeSwitcher/
│   └── shared/
├── lib/
│   ├── animations/
│   ├── utils/
│   └── constants/
├── public/
│   ├── images/
│   ├── videos/
│   └── fonts/
└── styles/
    └── tailwind/
```

---

### 14. Deployment Configuration

**Vercel Settings:**
- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Environment Variables:
  - `NEXT_PUBLIC_SITE_URL`
  - `NEXT_PUBLIC_GA_ID`
  - Form submission endpoints

---

### 15. Quality Assurance Checklist

- [ ] **NO horizontal scroll on any mobile device (320px-767px)**
- [ ] **Viewport is properly locked with no pinch-zoom issues**
- [ ] **All content stays within device width boundaries**
- [ ] All animations perform at 60fps
- [ ] Touch targets are minimum 48px on mobile
- [ ] Forms have proper validation and mobile keyboards
- [ ] Site works without JavaScript
- [ ] Images are optimized and lazy-loaded
- [ ] SEO meta tags are present
- [ ] Analytics tracking is functional
- [ ] Email capture integrates with backend
- [ ] Cross-browser compatibility verified
- [ ] Mobile experience tested on iOS Safari, Chrome, Android
- [ ] Theme switcher persists selection
- [ ] Safe area insets work on notched devices
- [ ] No layout shift during page load (CLS < 0.1)

---

### 16. Hero Animation Component Specification

#### Component: KaleidoscopeAnimation

**File Structure:**
- `components/Hero/KaleidoscopeAnimation.tsx` - React component
- `components/Hero/KaleidoscopeHero.module.css` - CSS module with animations

**Implementation Requirements:**

```typescript
// KaleidoscopeAnimation.tsx
interface KaleidoscopeAnimationProps {
  className?: string;
  reducedMotion?: boolean;
}

// Component features:
- Immediate render without lazy loading
- useEffect for animation lifecycle management
- IntersectionObserver for pause when off-screen
- Performance monitoring with requestAnimationFrame
- Automatic quality adjustment based on device capability
```

**CSS Module Optimization:**
```css
/* KaleidoscopeHero.module.css */
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  contain: strict;
}

.kaleidoscope {
  animation: rotate 60s linear infinite;
  will-change: transform;
  transform-origin: center center;
  transform: translateZ(0);
}

@keyframes rotate {
  from { transform: rotate(0deg) translateZ(0); }
  to { transform: rotate(360deg) translateZ(0); }
}

/* Performance optimizations */
@media (max-width: 768px) {
  .kaleidoscope {
    animation-duration: 90s; /* Slower on mobile */
  }
}

@media (prefers-reduced-motion: reduce) {
  .kaleidoscope {
    animation: none;
    /* Static fallback styling */
  }
}
```

**Performance Checklist:**
- [ ] Runs at 60fps on desktop
- [ ] Runs at 30fps minimum on mobile
- [ ] Pauses when tab is not visible
- [ ] Respects prefers-reduced-motion
- [ ] Uses GPU acceleration
- [ ] No memory leaks on component unmount
- [ ] Smooth infinite loop with no visible seams

---

### 17. CRITICAL: Verbatim Content Requirements

**IMPORTANT: All content below must be used EXACTLY as written. No paraphrasing, no rewording, no creative interpretation. Copy and paste directly into the website components.**

---

#### SECTION 1: HERO SECTION
**Background:** Kaleidoscope animation (JavaScript container)

**Hero Headline:** 
*(No specific headline provided - await client direction)*

---

#### SECTION 2: WHAT IS KALEIDOSCOPE

**Video Placeholder:** "What is Kaleidoscope Video"

**Main Content (USE VERBATIM):**
"Kaleidoscope is a radical recovery solution for those ready to be free from drinking and the pain beneath it. We guide individuals through a three-part journey—preparation, immersive healing, and ForeverCare™ support—custom-designed for lasting transformation."

**Key Principles (USE VERBATIM):**
- "Alcoholism is not a disease it seems like the only solution to pain and trauma."
- "Relapse is not part of recovery - the system has failed you."
- "Not 12 steps, 1 transformative truth: The answers are already inside you. If you're truly ready, let's go find them together."

**Description Paragraph (USE VERBATIM):**
"Kaleidoscope delivers complete personal transformation for alcoholics and their loved ones. We don't just treat symptoms - we eliminate pain at the source and permanently support each soul's unique healing journey. It's not about not drinking; it's about not even wanting to."

---

#### SECTION 3: THE PROBLEM

**Section Title (USE VERBATIM):** 
"Traditional Alcohol Rehab Fails Nearly Everyone"

**Subtitle (USE VERBATIM):**
"The statistics are staggering:"

**Statistics List (USE VERBATIM):**
- "30M+ Americans, and over 150M people who support them, struggle with drinking problems."
- "Alcoholism costs the US over 178,000 lives and $249B¹ per year according to NIH."
- "The alcohol treatment industry has a 90%² failure rat, relying almost entirely on AA, who do not publish any credible data."

**Closing Statement (USE VERBATIM):**
"The industry treats people who are not ready , fails to facilitate actual healing, and then releases them into their old environment. It doesn't have to be this way."

---

#### SECTION 4: OUR APPROACH

**Section Title (USE VERBATIM):**
"Alcoholism Is a Response to Pain: We Heal That Pain"

**Full Paragraph (USE VERBATIM):**
"Kaleidoscope was born from personal truth. After decades of personal and professional experiences with failed treatments and hollow promises, our founder realized what others won't say: alcoholism isn't a disease. It's a response to pain. And the pain can be extinguished. We only work with people who are truly ready - those willing to do whatever it takes to stop drinking and start living. When they are, we never let go."

**Footnotes (USE VERBATIM):**
1. Understanding Alcohol's Adverse Impact on Health (NIH, 2025)
2. AA critiques (Dodes, 2006)

---

#### SECTION 5: THE KALEIDOSCOPE METHOD

**Section Title:** "The Kaleidoscope Method"

**Headline (USE VERBATIM):** 
"Healing Starts Where Rehab Stops"

**Introduction (USE VERBATIM):**
"Kaleidoscope only works with people who are willing to do whatever it takes, facilitates sustained healing, and never lets them go. Trauma science is reshaping mental health, and the market is primed for an outcomes-based, human-first revolution. Kaleidoscope offers a 3-phase, trauma-informed recovery experience for the alcoholic soul and their family:"

**PHASE 1 - INTENTION**

**Title (USE VERBATIM):** "1/Intention"

**Subtitle (USE VERBATIM):** 
"Building and beginning a bespoke program of integrative healing"

**Description (USE VERBATIM):**
"Remote and on-property prep: comprehensive physical, emotional and spirtual assessments, holistic therapy, detox and education, beginning at the point of selection."

**Bullet Points (USE VERBATIM):**
- "Begin transformation before you arrive."
- "Uncover root causes through guided inquiry."
- "Build clarity, intention, and readiness."

**PHASE 2 - INSIGHT**

**Title (USE VERBATIM):** "2/Insight"

**Subtitle (USE VERBATIM):**
"Becoming open to and receiving sustainable healing and shifts"

**Description (USE VERBATIM):**
"28-day immersive retreat: Custom healing plan tailored to each individual based on Phase 1 including: Somatic therapy, EMDR, psychedelic integration, and spiritual coaching."

**Key Benefits Label (USE VERBATIM):** "Key Benefits:"

**Benefits List (USE VERBATIM):**
- "End trauma quickly and safely."
- "Rewire your body, mind, and spirit."
- "Discover who you are without pain."

**PHASE 3 - FOREVERCARE INTEGRATION**

**Title (USE VERBATIM):** "3/ ForeverCaretm Integration"

**Subtitle (USE VERBATIM):**
"Developing and embracing a personal path to emotional mastery"

**Bullet Points (USE VERBATIM):**
- "Lifetime hyper-personalized support: live coaching, Kaleidoscope telehealth services, community"
- "TheTwisttm lifetime app subscription fusing bio feedback with technology, art and healing in the pursuit of emotional mastery."

**Key Benefits Label (USE VERBATIM):** "Key Benefits:"

**Benefits List (USE VERBATIM):**
- "Personal daily support."
- "Custom recommendations and tracking."
- "Real accountability. Real freedom."

---

#### SECTION 6: TESTIMONIAL

**Label (USE VERBATIM):** "Testimonial"

**Video Placeholder:** "Video: Bill Testimonial"

---

#### SECTION 7: CALL TO ACTION

**Headline (USE VERBATIM):** "Are You Ready?"

**Subtext (USE VERBATIM):**
"Stay informed as the Kaleidoscope movement grows—sign up and we'll share updates, stories, and moments that matter."

**Form Field:** "Enter email address"

---

#### SECTION 8: BOOK PROMOTION

**Title (USE VERBATIM):** "Smashed: Sober (with a twist)"

**Video Placeholder:** "Video: Smashed: Sober (with a twist)"

**Headline (USE VERBATIM):** 
"It's Not About Not Drinking, It's About Not Wanting To."

**CTA Text (USE VERBATIM):** 
"Download our book for free - Smashed: Sober (with a twist)"

**Secondary CTA (USE VERBATIM):**
"Buy a printed copy on Amazon" [with link to Amazon]

---

### 18. CRITICAL IMPLEMENTATION INSTRUCTIONS FOR CLAUDE CODE

**ABSOLUTE REQUIREMENTS:**

1. **NO CONTENT FABRICATION**: Use ONLY the content provided above. Do not create, invent, or "improve" any copy.

2. **EXACT WORDING**: Copy and paste the content exactly as shown, including:
   - Any typos (e.g., "spirtual" instead of "spiritual")
   - Spacing issues (e.g., space before commas)
   - Trademark symbols (™)
   - Specific punctuation

3. **PLACEHOLDERS**: Where it says "Video:" or shows brackets like <Video: Bill Testimonial>, create a video placeholder component.

4. **MISSING CONTENT**: If content is needed but not provided (like a hero headline), use a placeholder like "[HERO HEADLINE - AWAITING CONTENT]" - do NOT create content.

5. **DESIGN FREEDOM**: While the WORDS must be exact, you have creative freedom with:
   - Typography styles
   - Colors and backgrounds
   - Animations and interactions
   - Layout and spacing
   - Visual hierarchy

6. **VERIFICATION CHECKLIST**:
   - [ ] All content matches character-for-character
   - [ ] No additional marketing copy added
   - [ ] No "improved" grammar or spelling
   - [ ] All sections present in correct order
   - [ ] Placeholder components for videos
   - [ ] Clear labeling of any missing content

**WARNING TO DEVELOPER**: Any deviation from the verbatim content will require a complete rebuild. Copy-paste directly from this document.

---

### 19. Development Notes for Claude Code

**Document Version:** 2.0  
**Last Updated:** September 2025  
**Author:** Product Team  
**Status:** Ready for Development with VERBATIM CONTENT - NO FABRICATION ALLOWED
