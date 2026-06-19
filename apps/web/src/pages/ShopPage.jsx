
import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  CheckCircle, 
  PackageSearch, 
  Activity, 
  Heart, 
  Shield 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { getProductQuoteLink } from '@/utils/WhatsAppUtils';
import { useProductFilters } from '@/hooks/useProductFilters.jsx';

// MedEquip Global Static Products
const MEDEQUIP_PRODUCTS = [
  {
    id: 1,
      name: 'Cadeiras de Rodas',
      price: 'R$ 180/mês',
      image: '/images/Cadeira.png',
      description:  'Cadeira de rodas resistente e confortável para auxiliar na locomoção de pacientes com mobilidade reduzida.',
      benefits: ['Estrutura dobrável','Apoio para pés','Fácil transporte','Conforto e segurança']
  },
  {
    id: 2,
      name: 'Camas Hospitalares',
      price: 'R$ 180/mês',
      image:  '/images/Cama.png',
      description: 'Cama hospitalar desenvolvida para proporcionar conforto, segurança e praticidade durante o tratamento e recuperação em casa.',
      benefits: [  'Ajuste de posição','Estrutura resistente','Proteção lateral','Pronta para uso imediato']
  },
  {
    id: 3,
      name: 'Andadores',
      price: 'R$ 180/mês',
      image: '/images/Andador1.png',
      description:'Equipamento de apoio que proporciona mais estabilidade, segurança e confiança durante a locomoção.',
      benefits: [   'Maior estabilidade','Estrutura leve','Fácil transporte','Mais segurança ao caminhar']
   
  },
  {
       id: 4,
      name: 'Muletas',
      price: 'R$ 180/mês',
      image: '/images/Muletas.png',
      description: 'Auxílio ideal para recuperação e mobilidade, oferecendo suporte seguro durante o deslocamento diário.',
      benefits: ['Altura ajustável','Apoio confortável','Estrutura resistente','Maior independência']
  }

];  

const CATEGORIES = [
  'Camas Hospitalares',
  'Cadeiras de Rodas',
  'Andadores',
  'Muletas',
  
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 20 }
  }
};

const ShopPage = () => {
  const { activeCategory, updateCategory, getCategoryProducts } = useProductFilters('Ver Todos');

  // Filter local static products based on active category
  const filteredProducts = useMemo(() => {
    return getCategoryProducts(activeCategory, MEDEQUIP_PRODUCTS);
  }, [activeCategory, getCategoryProducts]);

  return (
    <>
      <Helmet>
        <title>Catálogo de Equipamentos | MedEquip</title>
        <meta name="description" content="Catálogo completo de locação de equipamentos hospitalares. Camas, guinchos, poltronas e outros equipamentos." />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-muted/30 pb-24">
        {/* Compact Page Header */}
        <section className="relative overflow-hidden bg-header-gradient border-b border-border py-10 md:py-14 lg:py-16">
          {/* Decorative Pattern Layer */}
          <div className="absolute inset-0 bg-grid-pattern opacity-50 mix-blend-multiply dark:mix-blend-screen pointer-events-none" />
          
          {/* Background Ambient Glows */}
          <div className="absolute -top-20 -right-20 w-[24rem] h-[24rem] bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-[24rem] h-[24rem] bg-secondary/20 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="container-custom relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto text-center flex flex-col items-center"
            >
              {/* Decorative Icons */}
              <motion.div variants={itemVariants} className="flex gap-4 items-center justify-center mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-sm border border-primary/20">
                  <Activity className="w-5 h-5" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center text-foreground shadow-md border border-border/50 z-10 -mx-3">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shadow-sm border border-secondary/20">
                  <Shield className="w-5 h-5" />
                </div>
              </motion.div>

              <motion.h1 variants={itemVariants} className="mb-4 text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight">
                Catálogo de <span className="text-gradient">Equipamentos</span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-base md:text-lg text-muted-foreground max-w-2xl text-balance leading-relaxed">
                Encontre o equipamento ideal para o conforto e recuperação domiciliar. 
                Selecione uma categoria abaixo para filtrar.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Category Filters Area */}
        <div className="sticky top-[72px] z-40 bg-background/80 backdrop-blur-md border-b border-border py-4 mb-10 shadow-sm">
          <div className="container-custom">
            <div className="flex justify-center items-center gap-3 overflow-x-auto no-scrollbar pb-2 pt-1">
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => updateCategory(category)}
                    className={`category-tab ${isActive ? 'active' : ''}`}
                    aria-pressed={isActive}
                  >
                    {category}
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryBorder"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="container-custom">
          <AnimatePresence mode="wait">
            {filteredProducts.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center py-16 text-center bg-card rounded-2xl border border-border shadow-sm"
              >
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                  <PackageSearch className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Nenhum equipamento encontrado</h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Não encontramos equipamentos para a categoria selecionada no momento.
                </p>
                <Button variant="outline" onClick={() => updateCategory('Ver Todos')}>
                  Ver todos os equipamentos
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-card rounded-2xl overflow-hidden border border-border flex flex-col h-full card-hover shadow-sm"
                  >
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain scale-120"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="mb-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary/80 bg-primary/10 px-2 py-1 rounded-md">
                          {product.name.split(' ')[0] || 'Equipamento'}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-card-foreground">{product.name}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {product.description}
                      </p>
                      
                      <ul className="space-y-2 mb-8 flex-1">
                        {product.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-card-foreground/80">
                            <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-4 border-t border-border">
                        <a
                          href={getProductQuoteLink(product.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full"
                        >
                          <Button className="w-full btn-primary h-12 text-base">
                            <MessageCircle className="h-5 w-5 mr-2" />
                            Alugue pelo WhatsApp
                          </Button>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ShopPage;
