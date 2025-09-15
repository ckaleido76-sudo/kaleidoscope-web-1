'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const CTASection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      return;
    }

    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 1, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500 rounded-full mb-8">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
              You're One Step Closer
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Thank you for taking this important step. A member of our care team will reach out within 24 hours 
              to discuss your personalized recovery journey.
            </p>
            
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-light text-white mb-4">What happens next?</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/80">Confidential consultation call (30 minutes)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/80">Personalized assessment and treatment plan</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/80">Insurance verification and financial options</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/80">Immediate support resources</span>
                </div>
              </div>
            </div>
            
            <p className="text-white/70 text-lg">
              Need immediate support? Call our 24/7 helpline: 
              <a href="tel:1-800-RECOVER" className="text-white font-medium ml-2 hover:underline">
                1-800-RECOVER
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-light rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold bg-gradient-to-r from-header-from to-header-to bg-clip-text text-transparent mb-6">
            Are <strong>You</strong> Ready for Complete Transformation?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-8">
            Get connected to the Kaleidoscope movement — register and we'll share updates, events and moments that matter
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
            <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30 hover:bg-green-500/30">
              <CheckCircle className="w-4 h-4 mr-2" />
              Free consultation
            </Badge>
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30">
              <CheckCircle className="w-4 h-4 mr-2" />
              100% confidential
            </Badge>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="p-4 sm:p-8 bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
            <CardContent className="p-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-text-primary font-medium mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-form-placeholder z-10" />
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 sm:py-4 bg-form-bg backdrop-blur-sm border-form-border text-form-text placeholder-form-placeholder h-auto text-base"
                    placeholder="Enter email address"
                    required
                  />
                </div>
              </div>


              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={isLoading || !email.trim()}
                  className="w-full bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg font-medium shadow-lg hover:shadow-xl"
                  size="lg"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Sign Up</span>
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </motion.div>

              <p className="text-text-secondary text-sm text-center">
                By submitting this form, you agree to receive communications from Kaleidoscope. 
                Your information is completely confidential and will never be shared.
              </p>
            </form>
            </CardContent>
          </Card>

          {/* Alternative Contact Options */}
          <div className="mt-12 text-center">
            <p className="text-text-primary text-lg mb-6">
              Prefer to talk right now?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="text-center space-y-2">
                <p className="text-text-primary font-medium">Charlie Fiordalis</p>
                <div className="space-y-1 text-text-secondary">
                  <p>(e) <a href="mailto:cfiordalis@gmail.com" className="text-text-primary hover:underline hover:text-secondary">cfiordalis@gmail.com</a></p>
                  <p>(c) <a href="tel:617-216-3990" className="text-text-primary hover:underline hover:text-secondary">617-216-3990</a></p>
                  <p><a href="https://www.linkedin.com/in/cfiordalis" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:underline hover:text-secondary break-all">https://www.linkedin.com/in/cfiordalis</a></p>
                </div>
              </div>
              
              <div className="text-text-secondary">
                Available 24/7 • Completely confidential
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;