'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ApproachSection: React.FC = () => {
  return (
    <section id="approach" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 bg-gradient-to-r from-header-from to-header-to bg-clip-text text-transparent">
            <strong>Alcoholism is a Response to Trauma: We heal that.</strong>
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-lg text-text-secondary leading-relaxed mb-8">
            <p>
              Kaleidoscope was born from a personal truth. After decades of insider experience with failed treatment and hollow promises, our founder recognized what most refuse to admit: Alcoholism is not a disease, it's a conditioned response to pain and trauma. Even immense pain and trauma can be extinguished; then, we help you reclaim your life. We only work with people who are truly ready — those who are willing to do whatever it takes to stop drinking and start living. And, we never let go.
            </p>
          </div>
          
          <div className="mt-12 text-sm text-text-secondary space-y-2 text-right italic">
            <p>1. Understanding Alcohol's Adverse Impact on Health (NIH, 2025)</p>
            <p>2. AA critiques (Dodes, 2006)</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ApproachSection;