import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ShoppingCart from '@/components/ShoppingCart.jsx';

const SuccessPage = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Order Confirmed - Haven</title>
        <meta name="description" content="Your order has been successfully placed. Thank you for shopping with Haven." />
      </Helmet>

      <Header onCartOpen={() => setIsCartOpen(true)} />
      <ShoppingCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

      <main className="section-spacing bg-background min-h-[60vh] flex items-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">Order Confirmed</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Thank you for your purchase. We've sent a confirmation email with your order details.
            </p>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-semibold mb-4 text-foreground">What happens next?</h2>
              <div className="space-y-4 text-left">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-foreground">Order Processing</h3>
                    <p className="text-sm text-muted-foreground">We'll prepare your items for shipment within 1-2 business days</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-foreground">Shipping Confirmation</h3>
                    <p className="text-sm text-muted-foreground">You'll receive tracking information via email once your order ships</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-foreground">Delivery</h3>
                    <p className="text-sm text-muted-foreground">Your order will arrive within the estimated delivery timeframe</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop">
                <Button size="lg" className="btn-primary">
                  Continue Shopping
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Contact Support
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default SuccessPage;