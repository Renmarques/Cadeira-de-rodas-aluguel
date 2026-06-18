import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ShoppingCart from '@/components/ShoppingCart.jsx';

const faqs = [
  {
    category: 'Orders & Shipping',
    questions: [
      {
        question: 'How long does shipping take?',
        answer: 'Standard shipping typically takes 5-7 business days. Express shipping is available for 2-3 business days. White glove delivery with setup is available for larger items and takes 2-3 weeks.'
      },
      {
        question: 'Do you offer free shipping?',
        answer: 'Yes, we offer free standard shipping on all orders over $100. For orders under $100, a flat shipping fee of $15 applies.'
      },
      {
        question: 'Can I track my order?',
        answer: 'Absolutely! Once your order ships, you\'ll receive a tracking number via email. You can use this to monitor your delivery status in real-time.'
      }
    ]
  },
  {
    category: 'Returns & Exchanges',
    questions: [
      {
        question: 'What is your return policy?',
        answer: 'We offer a 30-day return policy on most items. Products must be in original condition with all packaging. Custom or personalized items are final sale.'
      },
      {
        question: 'How do I initiate a return?',
        answer: 'Contact our customer service team at support@haven.com or call 1-800-HAVEN-01. We\'ll provide you with a return authorization and shipping label.'
      },
      {
        question: 'Are there any restocking fees?',
        answer: 'No restocking fees apply to standard returns. However, custom orders or special requests may be subject to a 15% restocking fee.'
      }
    ]
  },
  {
    category: 'Products & Care',
    questions: [
      {
        question: 'How do I care for my furniture?',
        answer: 'Each product comes with specific care instructions. Generally, dust regularly with a soft cloth, avoid direct sunlight, and use appropriate cleaners for the material type.'
      },
      {
        question: 'Do you offer assembly services?',
        answer: 'Yes! White glove delivery includes professional assembly and setup. This service is available for an additional fee on most furniture items.'
      },
      {
        question: 'Are your products eco-friendly?',
        answer: 'We prioritize sustainability by partnering with manufacturers who use responsibly sourced materials and eco-conscious production methods.'
      }
    ]
  },
  {
    category: 'Payment & Security',
    questions: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and Apple Pay. Financing options are also available.'
      },
      {
        question: 'Is my payment information secure?',
        answer: 'Yes, we use industry-standard SSL encryption to protect your payment information. We never store your full credit card details on our servers.'
      }
    ]
  }
];

const FAQPage = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>FAQ - Haven</title>
        <meta name="description" content="Find answers to frequently asked questions about Haven furniture, shipping, returns, and more." />
      </Helmet>

      <Header onCartOpen={() => setIsCartOpen(true)} />
      <ShoppingCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

      <main className="section-spacing bg-background">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-muted-foreground text-lg">Find answers to common questions</p>
          </motion.div>

          <div className="space-y-12">
            {faqs.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              >
                <h2 className="text-2xl font-semibold mb-6 text-foreground">{section.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {section.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${sectionIndex}-${faqIndex}`}
                      className="bg-card border border-border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline text-foreground">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center bg-muted/30 rounded-xl p-8"
          >
            <h3 className="text-xl font-semibold mb-3 text-foreground">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">Our customer support team is here to help</p>
            <a href="/contact" className="text-primary hover:underline font-medium">
              Contact Us
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default FAQPage;