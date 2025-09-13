'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface Phase {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
}

const MethodSection: React.FC = () => {

  const phases: Phase[] = [
    {
      id: 1,
      title: 'Intention',
      subtitle: 'Building your bespoke program of integrative healing',
      description: 'Comprehensive physical, emotional and spiritual assessments, early exposure to therapies and techniques, and clinical detox and titration begin the moment you are accepted.',
      benefits: [
        'Transformation begins immediately',
        'Identify prior treatment experience, results, and individual receptivity/appropriateness',
        'Build clarity, set intentions, get ready'
      ]
    },
    {
      id: 2,
      title: 'Insight',
      subtitle: 'Becoming open to and receiving sustainable healing and personal shifts',
      description: 'Immersive retreat where your custom healing occurs. Your individual plan may include a wide variety of somatic therapies, functional nutrition and physical health, spiritually-anchored psychedelic therapies, psychology, and personalized emotional, physical, vocational and spiritual coaching.',
      benefits: [
        'Remediates trauma, rapidly and safely',
        'Rewire your body mind and spirit',
        'Apply the insights to your personal LifeMap™'
      ]
    },
    {
      id: 3,
      title: 'Integration',
      subtitle: 'Establishing your personal ForeverCare™ plan on the path to emotional mastery',
      description: '',
      benefits: [
        'Hyper-personalized support, coaching, Telehealth services, community',
        'theTwist™ (app) is the "Mood Ring that *Changes Your Mood*" fusing art, technology and healing',
        'Personal support…forever. The opposite of addiction isn\'t sobriety, it\'s connection.'
      ]
    }
  ];

  return (
    <section id="method" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-header-from to-header-to bg-clip-text text-transparent">
            The Kaleidoscope Method
          </h2>
          <p className="text-2xl text-text-primary font-light mb-6">
            Healing Starts Where Rehab Stops
          </p>
          <p className="text-lg text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Kaleidoscope only works with people who are ready, facilitates sustained healing, and provides support to help you maintain your bliss. We don't look away from the trauma science that should be reshaping the entire mental health spectrum; we're hosting an outcomes-based, human-first, trauma-informed revolution. Kaleidoscope provides a three-phase experience for the suffering soul and their family:
          </p>
        </motion.div>

        {/* All Phases Display - Horizontal Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-card-from to-card-to rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-card-border h-full">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full text-xl font-bold mb-4">
                    {phase.id}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-text-primary mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-lg text-primary mb-4">{phase.subtitle}</p>
                </div>

                {phase.description && (
                  <p className="text-text-secondary text-base leading-relaxed mb-6 text-center">
                    {phase.description}
                  </p>
                )}

                <div className="space-y-3">
                  <h4 className="text-lg font-medium text-text-primary text-center">Why it Matters:</h4>
                  <ul className="space-y-2">
                    {phase.benefits.map((benefit, benefitIndex) => (
                      <motion.li
                        key={benefitIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.15, delay: benefitIndex * 0.02 }}
                        className="flex items-start space-x-2 text-text-secondary text-sm"
                      >
                        <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span dangerouslySetInnerHTML={{ __html: benefit.replace('*Changes Your Mood*', '<em>Changes Your Mood</em>') }} />
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MethodSection;