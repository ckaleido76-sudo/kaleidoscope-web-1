'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const VimeoEmbed = () => (
  <div className="aspect-video rounded-2xl overflow-hidden mb-8">
    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
      <iframe
        src="https://player.vimeo.com/video/1118398858?badge=0&autopause=0&player_id=0&app_id=58479&byline=0&portrait=0&title=0&sidedock=0&pip=0&volume=0&speed=0&quality=0&fullscreen=0"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        title="Kaleidoscope - Smashed - H264 - 1920x1080P - V03"
      />
    </div>
  </div>
);

const BookSection: React.FC = () => {
  return (
    <section id="book" className="scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-header-from to-header-to bg-clip-text text-transparent leading-normal pt-2">
            Smashed: Sober (with a twist)
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="max-w-4xl mx-auto text-center"
        >
          <VimeoEmbed />
          
          <h3 className="text-2xl md:text-3xl font-light text-text-primary mb-8">
            It's Not About Not Drinking, It's About Not Wanting To.
          </h3>

          <div className="flex justify-center">
            <motion.a
              href="/smashed-book.pdf"
              download="Smashed - Sober with a twist.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex bg-primary hover:bg-primary/90 text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-primary/25 items-center space-x-3"
            >
              <Download className="w-5 h-5" />
              <span>Download our book for free</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookSection;
