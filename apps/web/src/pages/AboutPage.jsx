import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Leaf, Users, Award, Heart } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ShoppingCart from '@/components/ShoppingCart.jsx';

const values = [
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'We source materials responsibly and partner with eco-conscious manufacturers to minimize our environmental impact.'
  },
  {
    icon: Users,
    title: 'Craftsmanship',
    description: 'Every piece is carefully selected for its quality, durability, and timeless design that will last for generations.'
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'We stand behind every product we sell with rigorous quality standards and comprehensive warranties.'
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Your satisfaction is our priority. We offer personalized service and support throughout your journey with us.'
  }
];

const AboutPage = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>About Us - Haven</title>
        <meta name="description" content="Learn about Haven's commitment to sustainable, quality furniture and our passion for creating beautiful living spaces." />
      </Helmet>

      <Header onCartOpen={() => setIsCartOpen(true)} />
      <ShoppingCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

      <main>
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1556912173-46c336c7fd55"
              alt="Craftsman working on furniture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 container-custom text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Creating beautiful, sustainable spaces since 2015
            </p>
          </motion.div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold mb-6">Crafted with care, designed for life</h2>
                <p className="text-muted-foreground text-lg mb-4">
                  Haven was founded with a simple belief: your home should be a reflection of who you are, filled with pieces that bring joy and stand the test of time.
                </p>
                <p className="text-muted-foreground text-lg mb-4">
                  We work directly with skilled artisans and sustainable manufacturers around the world to bring you furniture that combines timeless design with modern functionality.
                </p>
                <p className="text-muted-foreground text-lg">
                  Every piece in our collection is chosen for its quality, craftsmanship, and ability to transform a house into a home.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-[500px] rounded-2xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
                  alt="Modern furniture workshop"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground text-lg">What drives us every day</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-8 border border-border"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Join us in creating beautiful spaces</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Whether you're furnishing your first apartment or redesigning your dream home, we're here to help you every step of the way.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;