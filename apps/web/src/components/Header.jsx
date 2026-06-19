import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MessageCircle, Menu, X, ChevronDown, Activity, BedSingle, FolderHeart as HandHeart, PersonStanding, Accessibility, Footprints, Armchair, CandyCane} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { getGeneralQuoteLink } from '@/utils/WhatsAppUtils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const [isProductsMobileOpen, setIsProductsMobileOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, path, sectionId = null) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    // If not on homepage and attempting to anchor route, navigate to home first
    if (location.pathname !== '/' && sectionId) {
      navigate(`/${sectionId}`);
      return;
    }

    if (sectionId) {
      const element = document.querySelector(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      navigate(path);
    }
  };

  const handleCategoryClick = (e, category) => {
    e.preventDefault();
    setIsProductsHovered(false);
    setIsProductsMobileOpen(false);
    setIsMenuOpen(false);
    navigate(`/shop?category=${encodeURIComponent(category)}`);
  };

  const productCategories = [
    { name: 'Camas Hospitalar', icon: BedSingle },
    { name: 'Cadeiras de Rodas', icon: Accessibility },
    { name: 'Andadores', icon: Footprints },
    { name: 'Muletas', icon: CandyCane }
    
  ];

  return (
    <>
      <header className={`sticky top-0 z-50 bg-background border-b border-border transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="container-custom">
          <div className="flex items-center justify-between py-4 gap-4">
            <a href="/" onClick={(e) => handleNavClick(e, '/', null)} className="flex items-center gap-2">
  <div className="flex items-center gap-3">
    <img
      src="/images/logo.avif"
      alt="Cadeira de Rodas Aluguel"
      className="h-20 w-auto"
    />

    
  </div>
</a>

            <nav className="hidden lg:flex items-center gap-8">
              <a href="/" onClick={(e) => handleNavClick(e, '/')} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Home
              </a>
              
              {/* Desktop Dropdown */}
              <div 
                className="relative py-4"
                onMouseEnter={() => setIsProductsHovered(true)}
                onMouseLeave={() => setIsProductsHovered(false)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Produtos
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProductsHovered ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isProductsHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="header-dropdown-menu"
                    >
                      <div className="flex flex-col gap-1">
                        {productCategories.map((cat) => {
                          const Icon = cat.icon;
                          return (
                            <a
                              key={cat.name}
                              href={`/shop?category=${encodeURIComponent(cat.name)}`}
                              onClick={(e) => handleCategoryClick(e, cat.name)}
                              className="header-dropdown-item"
                            >
                              <Icon className="h-4 w-4 mr-3 text-muted-foreground group-hover:text-primary" />
                              {cat.name}
                            </a>
                          );
                        })}
                        <div className="h-px bg-border my-1 mx-2" />
                        <a
                          href="/shop"
                          onClick={(e) => handleCategoryClick(e, 'Ver Todos')}
                          className="header-dropdown-item text-primary"
                        >
                          Ver todos os produtos
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a href="/#como-funciona" onClick={(e) => handleNavClick(e, '/', '#como-funciona')} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Como Funciona
              </a>
              <a href="/#faq" onClick={(e) => handleNavClick(e, '/', '#faq')} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                FAQ
              </a>
              <a href="/#contato" onClick={(e) => handleNavClick(e, '/', '#contato')} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Contato
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <a
                href={getGeneralQuoteLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex"
              >
                <Button className="btn-primary">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Alugar Agora
                </Button>
              </a>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden hover:bg-muted"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border bg-background overflow-hidden"
            >
              <div className="container-custom py-4 flex flex-col gap-2">
                <a href="/" onClick={(e) => handleNavClick(e, '/')} className="block py-3 px-2 text-foreground font-medium rounded-lg hover:bg-muted transition-colors">
                  Home
                </a>
                
                {/* Mobile Dropdown Accordion */}
                <div>
                  <button 
                    onClick={() => setIsProductsMobileOpen(!isProductsMobileOpen)}
                    className="w-full flex items-center justify-between py-3 px-2 text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
                  >
                    Produtos
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProductsMobileOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isProductsMobileOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden bg-muted/30 rounded-lg mx-2"
                      >
                        <div className="py-2 flex flex-col">
                          {productCategories.map((cat) => {
                            const Icon = cat.icon;
                            return (
                              <a
                                key={cat.name}
                                href={`/shop?category=${encodeURIComponent(cat.name)}`}
                                onClick={(e) => handleCategoryClick(e, cat.name)}
                                className="flex items-center px-4 py-3 text-sm text-foreground hover:text-primary hover:bg-muted transition-colors"
                              >
                                <Icon className="h-4 w-4 mr-3 text-muted-foreground" />
                                {cat.name}
                              </a>
                            );
                          })}
                          <a
                            href="/shop"
                            onClick={(e) => handleCategoryClick(e, 'Ver Todos')}
                            className="flex items-center px-4 py-3 text-sm text-primary font-medium hover:bg-muted transition-colors"
                          >
                            Ver todos os produtos
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a href="/#como-funciona" onClick={(e) => handleNavClick(e, '/', '#como-funciona')} className="block py-3 px-2 text-foreground font-medium rounded-lg hover:bg-muted transition-colors">
                  Como Funciona
                </a>
                <a href="/#faq" onClick={(e) => handleNavClick(e, '/', '#faq')} className="block py-3 px-2 text-foreground font-medium rounded-lg hover:bg-muted transition-colors">
                  FAQ
                </a>
                <a href="/#contato" onClick={(e) => handleNavClick(e, '/', '#contato')} className="block py-3 px-2 text-foreground font-medium rounded-lg hover:bg-muted transition-colors">
                  Contato
                </a>
                
                <a
                  href={getGeneralQuoteLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4"
                >
                  <Button className="btn-primary w-full py-6">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Alugar Agora
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <a
        href={getGeneralQuoteLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Falar no WhatsApp"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-75"></div>
          <Button
            size="lg"
            className="relative bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full h-16 w-16 shadow-lg transition-all duration-300 group-hover:scale-110"
          >
            <MessageCircle className="h-8 w-8" />
          </Button>
        </motion.div>
      </a>
    </>
  );
};

export default Header;