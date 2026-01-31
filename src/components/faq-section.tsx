'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'What types of properties do you deal in?',
    answer:
      'We specialise in residential plots, premium homes, and high-value investment properties in prime locations.',
  },
  {
    question: 'How can I book a property visit or consultation?',
    answer:
      'You can contact us via phone, email, or the website form. Our team will schedule a visit at your convenience.',
  },
  {
    question: 'Do you help with legal checks and documentation?',
    answer:
      'Yes, we assist with property verification and documentation to ensure a safe and smooth transaction.',
  },
  {
    question: 'Do you work with both buyers and sellers?',
    answer:
      'Yes, we support buyers in finding the right property and help sellers market and sell their property effectively.',
  },
  {
    question: 'Do you offer real-estate investment advice?',
    answer:
      'Yes, we provide market insights and guidance to help clients make informed investment decisions.',
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.5,
      ease: 'easeInOut',
    },
  }),
};

export function FaqSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-4">
            FAQs
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline text-white mb-4">
            Your Questions, Answered
          </h2>
          <p className="text-lg text-neutral-300">
            Find answers to common questions about our services, properties, and processes.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white/5 border-none rounded-lg"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-white hover:no-underline px-6 py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-base text-neutral-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
