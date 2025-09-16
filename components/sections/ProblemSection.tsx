'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ProblemSection: React.FC = () => {

  return (
    <section id="problem" className="scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-header-from to-header-to bg-clip-text text-transparent leading-normal pt-2">
            Traditional Alcohol Rehab Fails Nearly Everyone
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-text-primary max-w-3xl mx-auto leading-relaxed">
            The statistics are staggering:
          </h3>
        </motion.div>

        {/* Statistics List */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: 0.05, ease: 'easeOut' }}
              className="flex items-start p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-lg"
            >
              <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                <div className="w-2 h-2 bg-card rounded-full" />
              </div>
              <span className="text-text-primary text-xl leading-relaxed font-medium">30M+ Americans, and over 150M people who support them, struggle with alcohol.</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
              className="flex items-start p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-lg"
            >
              <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                <div className="w-2 h-2 bg-card rounded-full" />
              </div>
              <span className="text-text-primary text-xl leading-relaxed font-medium">Alcoholism costs the US over 178,000 lives and $249B¹ per year.</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: 0.15, ease: 'easeOut' }}
              className="flex items-start p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-lg"
            >
              <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                <div className="w-2 h-2 bg-card rounded-full" />
              </div>
              <span className="text-text-primary text-xl leading-relaxed font-medium">The alcohol treatment industry has a 90%² failure rate.</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20"
        >
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-4">
            The industry will "treat" anyone — ready or not — fails to facilitate actual healing, then releases them into their old environment with inadequate support.
          </p>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-semibold">
            It doesn't have to be this way.
          </p>
        </motion.div>

        {/* Citations */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
          className="mt-8 text-center space-y-2"
        >
          <p className="text-sm text-text-secondary">1. Understanding Alcohol's Adverse Impact on Health (NIH, 2025)</p>
          <p className="text-sm text-text-secondary">2. AA critiques (Dodes, 2006)</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
