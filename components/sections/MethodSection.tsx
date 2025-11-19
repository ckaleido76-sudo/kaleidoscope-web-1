'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface Phase {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
}

const MethodSection: React.FC = () => {
  const phaseIcons = [Target, Lightbulb, Users];

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
        'Rewires your body mind and spirit',
        'Apply the insights to your personal LifeMap™'
      ]
    },
    {
      id: 3,
      title: 'Integration',
      subtitle: 'Establishing your personal ForeverCare™ plan on the path to emotional mastery',
      description: 'Healing doesn\'t end when you leave our doors: it begins there. ForeverCare™ is our lifetime commitment to each client: personalized support, real-time digital tools, and a community that never lets go.',
      benefits: [
        'Hyper-personalized support, coaching, Telehealth services, community',
        'theTwist™ app fuses art, technology and healing: the "Mood Ring that changes your mood"',
        'Personal support…forever. The opposite of addiction isn\'t sobriety, it\'s connection.'
      ]
    }
  ];

  return (
    <section id="method" className="scroll-mt-24 py-8 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-header-from to-header-to bg-clip-text text-transparent leading-normal py-4">
            The Kaleidoscope Method
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Kaleidoscope only works with people who are ready, facilitates sustained healing, and provides support to help you maintain your bliss. We don't look away from the trauma science that should be reshaping the entire mental health spectrum; we're hosting an outcomes-based, human-first, trauma-informed revolution. Kaleidoscope provides a three-phase experience for the suffering soul and their family:
          </p>
        </motion.div>

        {/* All Phases Display - Enhanced Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => {
            const IconComponent = phaseIcons[index];
            return (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.08, ease: 'easeOut' }}
                className="group"
              >
                <Card className="bg-white/90 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 h-full group-hover:scale-[1.02]">
                  <CardHeader className="text-center pb-4">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="relative">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full shadow-lg">
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <Badge
                          variant="secondary"
                          className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground border-secondary/30"
                        >
                          {phase.id}
                        </Badge>
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-serif font-bold text-gray-800 mb-2">
                          {phase.title}
                        </CardTitle>
                        <p className="text-lg text-primary font-medium">{phase.subtitle}</p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {phase.description && (
                      <>
                        <p className="text-gray-600 text-lg leading-relaxed text-center">
                          {phase.description}
                        </p>
                        <Separator />
                      </>
                    )}

                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-800 text-center">Why it Matters:</h4>
                      <ul className="space-y-3">
                        {phase.benefits.map((benefit, benefitIndex) => (
                          <motion.li
                            key={benefitIndex}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.2, delay: benefitIndex * 0.05, ease: 'easeOut' }}
                            className="flex items-start space-x-3 text-gray-700 text-sm"
                          >
                            <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                            <span className="leading-relaxed">
                              {benefit}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default MethodSection;
