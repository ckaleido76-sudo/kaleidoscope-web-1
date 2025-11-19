'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const VimeoEmbed = () => (
  <div className="aspect-video rounded-2xl overflow-hidden">
    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
      <iframe
        src="https://player.vimeo.com/video/1118398603?badge=0&autopause=0&player_id=0&app_id=58479&byline=0&portrait=0&title=0&transparent=0&color=5B2CFA#t=2s"
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
    <section id="testimonial" className="scroll-mt-24 py-8 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-header-from to-header-to bg-clip-text text-transparent leading-normal pt-2">
            Testimonial
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className="p-8">
              <div className="flex items-start space-x-4">
                <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <blockquote className="text-xl text-foreground leading-relaxed mb-6">
                    "Kaleidoscope didn't just help me get sober—it helped me rediscover who I was beneath the addiction. The personalized approach made all the difference."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div>
                      <p className="font-semibold text-foreground">~ Bill</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
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

export default TestimonialSection;
