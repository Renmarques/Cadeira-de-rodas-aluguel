
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

   /* Cadeiras de Rodas */

  {
    id: 1,
      name: 'Cadeira Aço economy',
      price: 'R$ 100/mês',
      category: 'cadeiras',
      image: '/images/Cadeira.png',
      description:  'Cadeira de rodas resistente e confortável para auxiliar na locomoção de pacientes com mobilidade reduzida.',
      benefits: ['Fabricada em aço carbono de qualidade','Capacidade para até 85 kg','Estrutura dobrável em X','Pintura eletrostática epóxi','Rodas traseiras maciças de 24','Rodas dianteiras de 6']
  },

  {
    id: 5,
      name: 'Cadeira Alumínio Alemã Stander',
      price: 'R$ 160/mês',
      category: 'cadeiras',
      image: '/images/cadeiranova.png',
      description:  'Cadeira de rodas em alumínio premium de alta resistência, projetada com tecnologia alemã para máximo conforto e durabilidade.',
      benefits: ['Fabricada com tecnologia alemã em alumínio leve', 'Limite de peso suportado de até 125 kg', 'Rodas traseiras removíveis com sistema prático de 1-click', 'Apoio de braços escamoteáveis e escalonados', 'Pneus de borracha macia com tecnologia anti-furo']
  },

    {
    id: 6,
      name: 'Cadeira em Aço com Elevação de Perna',
      price: 'R$ 180/mês',
      category: 'cadeiras',
      image: '/images/cadeira4.png',
      description: 'Cadeira de rodas em aço carbono com assento duplo almofadado, projetada para oferecer excelente durabilidade, conforto e suavidade na locomoção.',
      benefits: ['Estrutura em tubos de aço carbono com pintura epóxi e verniz', 'Assento e encosto em nylon duplo com almofada removível de 4cm', 'Rodas traseiras aro 24" em nylon injetado com pneus maciços', 'Rolamento duplo blindado para um deslize suave e seguro', 'Apoio para os pés com regulagem de altura e rebatíveis lateralmente']
  },

  {
    id: 12,
      name: 'Cadeira Alumínio Alemã Luxo ',
      price: 'R$ 200/mês',
      category: 'cadeiras',
      image: '/images/cadeira5.png',
      description: 'Cadeira de rodas de luxo em alumínio com tecnologia alemã, oferecendo altíssima qualidade, leveza e praticidade para o dia a dia.',
      benefits: ['Fabricada com tecnologia alemã em alumínio premium', 'Limite de peso suportado de até 100 kg', 'Rodas traseiras removíveis com sistema prático de 1-click', 'Apoio de braços escamoteáveis, escalonados e almofadados', 'Apoio de pés removíveis e rebatíveis lateralmente', 'Pneus de borracha macia com tecnologia anti-furo']
  },
  
   {
    id: 7,
      name: 'Cadeira Alumínio Alemã Luxo Obeso',
      price: 'R$ 220/mês',
      category: 'cadeiras',
      image: '/images/cadeira5.png',
      description: 'Cadeira de rodas em alumínio premium com tecnologia alemã, combinando leveza, praticidade para transporte e alta resistência.',
      benefits: ['Fabricada com tecnologia alemã em alumínio de alta qualidade', 'Suporta limite de peso de até 125 kg', 'Rodas traseiras removíveis com sistema prático Quick Release (1-click)', 'Apoio de braços escamoteáveis, escalonados e almofadados', 'Apoio de pés removíveis e rebatíveis lateralmente', 'Pneus de borracha macia com tecnologia anti-furo']
  },

  {
    id: 8,
      name: 'Cadeira higiênica Aço',
      price: 'R$ 90/mês',
      category: 'cadeiras',
      image: '/images/cadeirah.png',
      description: 'Cadeira de banho e higiênica em aço com pintura epóxi, desenvolvida para garantir segurança e praticidade no cuidado diário.',
      benefits: ['Estrutura robusta em aço com pintura epóxi de alta durabilidade', 'Altura ideal do chão até o assento de 50 cm', 'Assento ergonômico com 40 cm de largura', 'Dimensões compactas (95 cm de altura, 50 cm de largura e 56 cm de comprimento)', 'Estrutura estável com peso total de 15 kg']
  },

  {
    id: 9,
      name: 'Cadeira higiênica aço Obeso ',
      price: 'R$ 110/mês',
      category: 'cadeiras',
      image: '/images/cadeirah2.png',
      description: 'Cadeira de banho e higiênica em aço com pintura epóxi, desenvolvida para garantir segurança e praticidade no cuidado diário.',
      benefits: ['Estrutura robusta em aço com pintura epóxi de alta durabilidade', 'Altura ideal do chão até o assento de 50 cm', 'Assento ergonômico com 40 cm de largura', 'Dimensões compactas (95 cm de altura, 60 cm de largura e 56 cm de comprimento)', 'Estrutura estável com peso total de 15 kg']
  },

  {
    id: 10,
      name: 'Cadeira Higiênica Dobrável',
      price: 'R$ 160/mês',
      category: 'cadeiras',
      image: '/images/cadeirad.png',
      description: 'Cadeira higiênica e de banho em aço, dobrável e extremamente prática para transporte e armazenamento sem abrir mão da segurança.',
      benefits: ['Estrutura dobrável em aço com pintura epóxi de alta durabilidade', 'Assento removível com suporte integrado para coletor', 'Rodas dianteiras e traseiras aro 06 giratórias com pneus maciços', 'Sistema de segurança com freios bilaterais', 'Apoio para os pés removível e encosto confortável em nylon']
  },

  {
    id: 11,
      name: 'Cadeira de Rodas Motorizada ',
      price: 'R$ 400/mês',
      category: 'cadeiras',
      image: '/images/cadeiram.png',
      description: 'Cadeira de rodas motorizada com design ergonômico, desenvolvida para proporcionar total autonomia, conforto e bem-estar.',
      benefits: ['Motorizada elétrica para máxima autonomia e mobilidade', 'Ideal para idosos e pessoas com mobilidade reduzida', 'Design ergonômico com encosto estofado', 'Encosto prático e rebatível', 'Proporciona excelente conforto para o uso diário']
  },



    /* Camas Hospitalares */
  {
    id: 2,
      name: 'Cama 3 movimentos elétrica',
      price: 'R$ 430/mês',
      category: 'camas',
      image:  '/images/cama5.png',
      description: 'Cama com 3 movimentos, ideal para higienização de pacientes no próprio leito com o máximo de praticidade e conforto.',
      benefits: [ '3 movimentos (tronco, pernas e altura do leito)', 'Regulagem de altura de 53 até 85cm', 'Acionamento totalmente elétrico', 'Prática manivela integrada para ajustes', 'Estrutura de ferro robusta com acabamento branco', 'Suporta até 140 kg distribuídos com total segurança']
  },

  {
    id: 13,
      name: 'Cama 3 Movimentos Manual ',
      price: 'R$ 250/mês',
      category: 'camas',
      image:  '/images/Cama-manual.png',
      description: 'Cama hospitalar manual com 3 movimentos, ideal para facilitar a higienização e garantir o conforto do paciente no próprio leito.',
      benefits: ['3 movimentos essenciais (tronco, pernas e altura do leito)', 'Regulagem de altura ajustável de 53 até 85cm', 'Acionamento totalmente manual por meio de manivela', 'Estrutura robusta em ferro com acabamento branco', 'Suporta até 140 kg distribuídos com total segurança']
  },


    /* Andadores */

  {
    id: 17,
      name: 'Andador Alumínio Dobrável Articulado',
      price: 'R$ 60/mês',
      category: 'andadores',
      image: '/images/andador5.png',
      description:'Andador de alumínio dobrável e articulado, projetado para oferecer máxima estabilidade, segurança e suporte ao caminhar.',
      benefits: ['Estrutura leve em alumínio de alta durabilidade e barras centrais em aço', 'Modelo articulado e dobrável, prático para usar, guardar e transportar', 'Possui 7 níveis de regulagem de altura simples por pinos de ajuste fácil', 'Suporta até 130 kg com total estabilidade e segurança', 'Ponteiras de borracha com peça metálica interna para menor desgaste e ruído', 'Manoplas de borracha confortáveis e anatômicas para o usuário']
   
  },

  {
    id: 16,
      name: 'Andador com Rodas',
      price: 'R$ 120/mês',
      category: 'andadores',
      image: '/images/andador4.png',
      description:'Andador dobrável com rodas frontais, ideal para auxiliar na locomoção de usuários que necessitam de máxima estabilidade e segurança ao caminhar.',
      benefits: ['Possui 2 rodinhas frontais de 5″ que facilitam o deslocamento contínuo', 'Dupla configuração: pode ser utilizado como andador fixo ou articulado', 'Função articulada que acompanha o movimento do passo do usuário', 'Estrutura totalmente dobrável, facilitando o transporte e armazenamento', 'Fácil ajuste de configuração através de uma trava de posição simples']
   
  },

  {
    id: 3,
      name: 'Andador de 4 rodas',
      price: 'R$ 180/mês',
      category: 'andadores',
      image: '/images/Andador1.png',
      description:'Andador articulado com assento e rodas, ideal para oferecer apoio e reduzir a resistência muscular dos membros inferiores com total conforto.',
      benefits: [   'Assento acolchoado (suporta até 100 kg)', 'Estrutura dobrável com cesto em nylon para objetos', 'Rodas de 8 polegadas com sistema de freios', '8 níveis de regulagem de altura no apoio dos braços', 'Apoio de mãos emborrachado, macio e anatômico']
   
  },

  {
    id: 15,
      name: 'Andador de 3 rodas',
      price: 'R$ 120/mês',
      category: 'andadores',
      image: '/images/andador3.png',
      description:'Andador articulado com 3 rodas, oferecendo excelente agilidade e suporte para reduzir a resistência muscular dos membros inferiores em espaços menores.',
      benefits: ['Design com 3 rodas que garante maior manobrabilidade e leveza', 'Estrutura dobrável e compacta, ideal para transporte e armazenamento', 'Sistema de freios integrados nas rodas para total segurança', 'Regulagem de altura no apoio dos braços para ajuste perfeito', 'Apoio de mãos emborrachado, macio e anatômico']
   
  },


  
    /* Muletas */

  {
       id: 4,
      name: 'Muleta axilar',
      price: 'R$ 180/mês',
      category: 'muletas',
      image: '/images/Muletas.png',
      description: 'Muleta axilar em alumínio para proporcionar estabilidade e alívio de peso nos membros inferiores durante a locomoção.',
      benefits: ['Estrutura em alumínio leve e de alta resistência', 'Regulagem de altura em múltiplos níveis para ajuste ideal', 'Apoio axilar e de mão emborrachados e confortáveis', 'Ponteiras de borracha antiderrapantes para maior segurança', 'Suporte de peso seguro e estabilidade garantida']
  },
    /* Outros */

     {
       id: 14,
      name: 'Scooter',
      price: 'R$ 600/mês',
      category: 'outros',
      image: '/images/scooter.png',
      description: 'Scooter elétrica prática e segura, desenvolvida para devolver a autonomia e a liberdade de locomoção no dia a dia.',
      benefits: ['Excelente opção para cadeirantes, idosos e pessoas com mobilidade reduzida', 'Oferece total autonomia para realizar as atividades diárias', 'Condução extremamente segura e confortável', 'Design ergonômico projetado para o bem-estar do usuário']
  },

];  


const CATEGORIES = [
  'camas',
  'cadeiras',
  'andadores',
  'muletas',
  'outros'
];

const CATEGORY_LABELS = {
  camas: 'Camas Hospitalares',
  cadeiras: 'Cadeiras de Rodas',
  andadores: 'Andadores',
  muletas: 'Muletas',
  outros: 'Outros'
};


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
                    {CATEGORY_LABELS[category]}
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
                   <div className="aspect-video overflow-hidden bg-slate-300">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain scale-120 drop-shadow-lg"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1">

                    <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                      {product.name}
                    </h3>

                    <p className="text-green-600 font-bold text-xl mb-1">
                      {product.price}
                    </p>

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
