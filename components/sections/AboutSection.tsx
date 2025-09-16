'use client';

import React from 'react';
import { motion } from 'framer-motion';

const VimeoEmbed = () => (
  <div className="aspect-video rounded-xl overflow-hidden">
    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
      <iframe 
        src="https://player.vimeo.com/video/1118398541?badge=0&autopause=0&player_id=0&app_id=58479&byline=0&portrait=0&title=0" 
        frameBorder="0" 
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        title="Kaleidoscope - What is Kaleidoscope - H264 - 1920x1080P - V04"
      />
    </div>
  </div>
);

const AboutSection: React.FC = () => {

  return (
    <section id="about" className="scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-header-from to-header-to bg-clip-text text-transparent leading-normal py-4">
            What is Kaleidoscope?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
              <p>
                Kaleidoscope is a radical approach for people who are truly ready to be free of their drinking problem, and the pain and trauma behind it. We guide individuals through three hyper-personalized phases: intensive preparation, immersive healing, and permanent integration support. We are purpose-built for holistic transformation.
              </p>
              
              <div className="space-y-4 mt-8">
                <motion.div 
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.2, delay: 0.05, ease: 'easeOut' }}
                  className="text-text-primary"
                >
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-primary rounded-full mr-4 mt-2 flex-shrink-0" />
                    <span>Alcoholism is <strong>not</strong> a disease: it is a response to, often undiagnosed, pain and trauma.</span>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.2, delay: 0.1, ease: 'easeOut' }}
                  className="text-text-primary"
                >
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-primary rounded-full mr-4 mt-2 flex-shrink-0" />
                    <span>Relapse is <strong>not</strong> part of recovery: the system is what's failing, not you.</span>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.2, delay: 0.15, ease: 'easeOut' }}
                  className="text-text-primary"
                >
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-primary rounded-full mr-4 mt-2 flex-shrink-0" />
                    <span><strong>Not</strong> 12 steps...1 transformative truth: the answers are already inside you.</span>
                  </div>
                </motion.div>
              </div>
              
              <p className="mt-6">
                At Kaleidoscope, liberate you from the so-called "standard of care", addressing your issues at their core. We don't treat symptoms — we eliminate pain at the source and permanently support each soul's unique healing journey.
              </p>

              <p>
                It's not about not drinking; it's about not even wanting to.
              </p>
            </div>
          </motion.div>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: 0.1, ease: 'easeOut' }}
          >
            <VimeoEmbed />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
