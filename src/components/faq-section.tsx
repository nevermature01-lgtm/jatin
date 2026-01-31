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
    question: 'What types of properties do you specialize in?',
    answer:
      'We specialize in a wide range of luxury properties, including waterfront estates, modern villas, downtown penthouses, and private islands. Our portfolio is curated to meet the highest standards of quality and elegance.',
  },
  {
    question: 'How can I schedule a property viewing?',
    answer:
      'You can schedule a viewing by contacting us through the contact form on our website or by calling our office directly. Our agents will be happy to arrange a private tour at your convenience.',
  },
  {
    question: 'Do you offer property management services?',
    answer:
      'Yes, we provide comprehensive property management services to ensure your investment is well-maintained and profitable. Our services include tenant screening, rent collection, maintenance, and regular inspections.',
  },
  {
    question: 'What is the process for selling my property with you?',
    answer:
      "Our selling process begins with a detailed property valuation and market analysis. We then create a tailored marketing strategy, handle all negotiations, and guide you through the closing process to ensure a seamless transaction.",
  },
  {
    question: 'Are your listings exclusive?',
    answer:
      'Many of our listings are exclusive to LANDMARKLANE, offering our clients unique opportunities not available elsewhere. We also have access to a broad network of properties through our partnerships.',
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
