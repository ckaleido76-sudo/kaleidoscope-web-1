// Kaleidoscope page - same content as home page
import KaleidoscopeHero from '@/components/Hero/KaleidoscopeHero';
import AboutSection from '@/components/sections/AboutSection';
import ProblemSection from '@/components/sections/ProblemSection';
import ApproachSection from '@/components/sections/ApproachSection';
import MethodSection from '@/components/sections/MethodSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import CTASection from '@/components/sections/CTASection';
import BookSection from '@/components/sections/BookSection';
import Footer from '@/components/shared/Footer';

export default function KaleidoscopePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - 16:9 Aspect Ratio */}
      <section id="hero" className="w-full aspect-video relative">
        <KaleidoscopeHero 
          title="kaleidoscope"
          subtitle="A radical recovery solution for those ready to be free from drinking and the pain beneath it"
        />
      </section>
      
      {/* Main Content Sections */}
      <main className="w-full">
        <div id="about" className="w-full">
          <AboutSection />
        </div>
        
        <div id="problem" className="w-full">
          <ProblemSection />
        </div>
        
        <div id="approach" className="w-full">
          <ApproachSection />
        </div>
        
        <div id="method" className="w-full">
          <MethodSection />
        </div>
        
        <div id="testimonial" className="w-full">
          <TestimonialSection />
        </div>
        
        <div id="cta" className="w-full">
          <CTASection />
        </div>
        
        <div id="book" className="w-full">
          <BookSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}