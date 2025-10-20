'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ApproachSection: React.FC = () => {
  return (
    <section id="approach" className="scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-header-from to-header-to bg-clip-text text-transparent leading-normal pt-2">
            <strong>Alcoholism is a Response to Trauma:<br />We heal that.</strong>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-lg text-text-secondary leading-relaxed mb-8">
            <p>
              Kaleidoscope was born from a personal truth. After decades of insider experience with failed treatment and hollow promises, our founder recognized what most refuse to admit: Alcoholism is not a disease, it's a conditioned response to pain and trauma. Even immense pain and trauma can be extinguished; then, we help you reclaim your life. We only work with people who are truly ready — those who are willing to do whatever it takes to stop drinking and start living. And, we never let go.
            </p>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default ApproachSection;
