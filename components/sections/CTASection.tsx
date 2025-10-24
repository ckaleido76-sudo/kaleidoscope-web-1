'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const CTASection: React.FC = () => {
  const [formData, setFormData] = useState({
    userType: '',
    email: '',
    state: '',
    phone: '',
    comments: '',
    optInTexts: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.userType) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || 'Subscription failed');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your information. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="cta" className="scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500 rounded-full mb-8">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>

            <h2 className="text-4xl md:text-6xl font-light bg-gradient-to-r from-header-from to-header-to bg-clip-text text-transparent mb-6">
              Thank You. Your Healing Journey Just Began. Can you feel the shift?
            </h2>

            <div className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto space-y-6 text-left">
              <p>
                You've taken the first step toward something extraordinary. At Kaleidoscope, we believe transformation isn't about willpower or white-knuckled sobriety - it's about relief, connection, and finally living free of the pain that alcohol tries to cover.
              </p>

              <p>
                Whether you're here for yourself, someone you love, or because you believe in our mission, you now belong to a movement that is rewriting what recovery means. Keep an eye on your inbox - we'll be sending you the next step soon.
              </p>

              <p className="font-medium">
                For now, pause and take this in:
              </p>

              <div className="font-semibold text-2xl text-center space-y-2">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  You are not broken.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  You are not powerless.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                  You are not alone.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="cta" className="scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Animation (subtle) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold bg-gradient-to-r from-header-from to-header-to bg-clip-text text-transparent mb-6 leading-normal pt-2">
            Are <strong>You</strong> Ready for Complete Transformation?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-8">
            Get connected to the Kaleidoscope movement — register and we'll share updates, events and moments that matter
          </p>
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.05, ease: 'easeOut' }}
          className="max-w-2xl mx-auto"
        >
          <Card className="p-4 sm:p-8 bg-white/90 backdrop-blur-md border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* User Type Picklist */}
              <div>
                <label htmlFor="userType" className="block text-text-primary font-medium mb-2">
                  I am a: *
                </label>
                <select
                  id="userType"
                  value={formData.userType}
                  onChange={(e) => handleInputChange('userType', e.target.value)}
                  className="w-full px-4 py-3 sm:py-4 bg-form-bg backdrop-blur-sm border border-form-border text-form-text rounded-lg min-h-[52px] sm:min-h-[60px] text-base appearance-none"
                  required
                >
                  <option value="">Select one...</option>
                  <option value="future-client">Future Client</option>
                  <option value="friend-family">Friend or Family Member</option>
                  <option value="investor-partner">Investor or Partner</option>
                  <option value="treatment-center">Treatment Center</option>
                  <option value="healer-employee">Healer or Future Employee</option>
                </select>
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-text-primary font-medium mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-form-placeholder z-10" />
                  <Input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full pl-12 pr-4 py-3 sm:py-4 bg-form-bg backdrop-blur-sm border border-form-border text-form-text placeholder-form-placeholder min-h-[52px] sm:min-h-[60px] text-base"
                    placeholder="Enter email address"
                    required
                  />
                </div>
              </div>

              {/* State (Optional) */}
              <div>
                <label htmlFor="state" className="block text-text-primary font-medium mb-2">
                  State
                </label>
                <select
                  id="state"
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  className="w-full px-4 py-3 sm:py-4 bg-form-bg backdrop-blur-sm border border-form-border text-form-text rounded-lg min-h-[52px] sm:min-h-[60px] text-base appearance-none"
                >
                  <option value="">Select state...</option>
                  <option value="AL">AL - Alabama</option>
                  <option value="AK">AK - Alaska</option>
                  <option value="AZ">AZ - Arizona</option>
                  <option value="AR">AR - Arkansas</option>
                  <option value="CA">CA - California</option>
                  <option value="CO">CO - Colorado</option>
                  <option value="CT">CT - Connecticut</option>
                  <option value="DE">DE - Delaware</option>
                  <option value="FL">FL - Florida</option>
                  <option value="GA">GA - Georgia</option>
                  <option value="HI">HI - Hawaii</option>
                  <option value="ID">ID - Idaho</option>
                  <option value="IL">IL - Illinois</option>
                  <option value="IN">IN - Indiana</option>
                  <option value="IA">IA - Iowa</option>
                  <option value="KS">KS - Kansas</option>
                  <option value="KY">KY - Kentucky</option>
                  <option value="LA">LA - Louisiana</option>
                  <option value="ME">ME - Maine</option>
                  <option value="MD">MD - Maryland</option>
                  <option value="MA">MA - Massachusetts</option>
                  <option value="MI">MI - Michigan</option>
                  <option value="MN">MN - Minnesota</option>
                  <option value="MS">MS - Mississippi</option>
                  <option value="MO">MO - Missouri</option>
                  <option value="MT">MT - Montana</option>
                  <option value="NE">NE - Nebraska</option>
                  <option value="NV">NV - Nevada</option>
                  <option value="NH">NH - New Hampshire</option>
                  <option value="NJ">NJ - New Jersey</option>
                  <option value="NM">NM - New Mexico</option>
                  <option value="NY">NY - New York</option>
                  <option value="NC">NC - North Carolina</option>
                  <option value="ND">ND - North Dakota</option>
                  <option value="OH">OH - Ohio</option>
                  <option value="OK">OK - Oklahoma</option>
                  <option value="OR">OR - Oregon</option>
                  <option value="PA">PA - Pennsylvania</option>
                  <option value="RI">RI - Rhode Island</option>
                  <option value="SC">SC - South Carolina</option>
                  <option value="SD">SD - South Dakota</option>
                  <option value="TN">TN - Tennessee</option>
                  <option value="TX">TX - Texas</option>
                  <option value="UT">UT - Utah</option>
                  <option value="VT">VT - Vermont</option>
                  <option value="VA">VA - Virginia</option>
                  <option value="WA">WA - Washington</option>
                  <option value="WV">WV - West Virginia</option>
                  <option value="WI">WI - Wisconsin</option>
                  <option value="WY">WY - Wyoming</option>
                  <option value="DC">DC - District of Columbia</option>
                </select>
              </div>

              {/* Phone (Optional) */}
              <div>
                <label htmlFor="phone" className="block text-text-primary font-medium mb-2">
                  Phone
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-form-placeholder z-10" />
                  <Input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full pl-12 pr-4 py-3 sm:py-4 bg-form-bg backdrop-blur-sm border border-form-border text-form-text placeholder-form-placeholder min-h-[52px] sm:min-h-[60px] text-base"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              {/* Text Messages Opt-in */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="optInTexts"
                  checked={formData.optInTexts}
                  onChange={(e) => handleInputChange('optInTexts', e.target.checked)}
                  className="mt-1 w-4 h-4 text-primary bg-form-bg border-form-border rounded focus:ring-primary"
                />
                <label htmlFor="optInTexts" className="text-text-primary text-sm">
                  I opt in to receive text messages from Kaleidoscope
                </label>
              </div>

              {/* Comments (Optional) */}
              <div>
                <label htmlFor="comments" className="block text-text-primary font-medium mb-2">
                  Comments
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-form-placeholder z-10" />
                  <Textarea
                    id="comments"
                    value={formData.comments}
                    onChange={(e) => handleInputChange('comments', e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-form-bg backdrop-blur-sm border-form-border text-form-text placeholder-form-placeholder min-h-[100px] text-base resize-none"
                    placeholder="Share any comments or questions..."
                  />
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={isLoading || !formData.email.trim() || !formData.userType}
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

        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
