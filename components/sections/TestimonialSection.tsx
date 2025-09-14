'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VimeoEmbed = () => (
  <div className="aspect-video rounded-2xl overflow-hidden">
    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
      <iframe 
        src="https://player.vimeo.com/video/1118398603?badge=0&autopause=0&player_id=0&app_id=58479&byline=0&portrait=0&title=0#t=15s" 
        frameBorder="0" 
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        title="Kaleidoscope - Bills Story - H264 - 1920x1080P - V02"
      />
    </div>
  </div>
);

const TestimonialSection: React.FC = () => {
  return (
    <section id="testimonial" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-header-from to-header-to bg-clip-text text-transparent">
            Testimonial
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <VimeoEmbed />
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;