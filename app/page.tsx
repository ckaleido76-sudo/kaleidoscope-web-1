import KaleidoscopeHero from '@/components/Hero/KaleidoscopeHero';
import AboutSection from '@/components/sections/AboutSection';
import ProblemSection from '@/components/sections/ProblemSection';
import ApproachSection from '@/components/sections/ApproachSection';
import MethodSection from '@/components/sections/MethodSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import CTASection from '@/components/sections/CTASection';
import BookSection from '@/components/sections/BookSection';
import Footer from '@/components/shared/Footer';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - 16:9 Aspect Ratio */}
      <section id="hero" className="w-full aspect-video relative">
        <KaleidoscopeHero 
          title="kaleidoscope"
          subtitle="Kaleidoscope completely transforms the lives of people who struggle with alcohol, and the people who love them."
        />
      </section>
      
      {/* Main Content Sections */}
      <main id="main-content" role="main" className="w-full">
        <AboutSection />
        <ProblemSection />
        <ApproachSection />
        <MethodSection />
        <TestimonialSection />
        <CTASection />
        <BookSection />
      </main>
      
      <Footer />
    </div>
  );
}
