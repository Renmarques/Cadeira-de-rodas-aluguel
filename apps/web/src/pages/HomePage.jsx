
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MessageCircle, Zap, Shield, Heart, Headphones, Calendar, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { getProductQuoteLink, getGeneralQuoteLink } from '@/utils/WhatsAppUtils';

const HomePage = () => {
  const products = [
    {
      id: 1,
      name: 'Cadeiras de Rodas',
      category: 'cadeiras',
      price: 'R$ 180/mês',
      image: '/images/Cadeira.png',
      description:  'Cadeira de rodas resistente e confortável para auxiliar na locomoção de pacientes com mobilidade reduzida.',
      benefits: ['Estrutura dobrável','Apoio para pés','Fácil transporte','Conforto e segurança']

    },
    {
      id: 2,
      name: 'Camas Hospitalares',
      category: 'camas',
      price: 'R$ 180/mês',
      image:  '/images/cama5.png',
      description: 'Cama hospitalar desenvolvida para proporcionar conforto, segurança e praticidade durante o tratamento e recuperação em casa.',
      benefits: [  'Ajuste de posição','Estrutura resistente','Proteção lateral','Pronta para uso imediato']
    },
    {
      id: 3,
      name: 'Andadores',
      category: 'andadores',
      price: 'R$ 180/mês',
      image: '/images/Andador1.png',
      description:'Equipamento de apoio que proporciona mais estabilidade, segurança e confiança durante a locomoção.',
      benefits: [   'Maior estabilidade','Estrutura leve','Fácil transporte','Mais segurança ao caminhar']
    },
    {
      id: 4,
      name: 'Muletas',
      category: 'muletas',
      price: 'R$ 180/mês',
      image: '/images/Muletas.png',
      description: 'Auxílio ideal para recuperação e mobilidade, oferecendo suporte seguro durante o deslocamento diário.',
      benefits: ['Altura ajustável','Apoio confortável','Estrutura resistente','Maior independência']
    }
    
  ];

  const differentials = [
    {
      icon: Zap,
      title: 'Entrega rápida',
      description: 'Equipamentos entregues em até 24 horas na região metropolitana de Rio de Janeiro.'
    },
    {
      icon: Shield,
      title: 'Equipamentos higienizados',
      description: 'Todos os equipamentos passam por rigoroso processo de higienização e esterilização.'
    },
    {
      icon: Heart,
      title: 'Atendimento humanizado',
      description: 'Equipe treinada para oferecer suporte com empatia e profissionalismo.'
    },
    {
      icon: Headphones,
      title: 'Suporte especializado',
      description: 'Assistência técnica disponível durante todo o período de locação.'
    },
    {
      icon: Calendar,
      title: 'Locação flexível',
      description: 'Planos de locação adaptados às suas necessidades, sem burocracia.'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Escolha o equipamento',
      description: 'Navegue por nosso catálogo e selecione o equipamento que você precisa.'
    },
    {
      number: '02',
      title: 'Solicite orçamento via WhatsApp',
      description: 'Entre em contato pelo WhatsApp e receba um orçamento personalizado rapidamente.'
    },
    {
      number: '03',
      title: 'Receba em casa com rapidez',
      description: 'Entregamos o equipamento higienizado e pronto para uso em até 24 horas.'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      text: 'Excelente atendimento! A cama hospitalar chegou no mesmo dia e facilitou muito os cuidados com minha mãe.',
      rating: 5
    },
    {
      name: 'Carlos Mendes',
      text: 'Equipamentos de qualidade e entrega super rápida. Recomendo para quem precisa de equipamentos hospitalares em casa.',
      rating: 5
    },
    {
      name: 'Ana Paula',
      text: 'Atendimento humanizado e profissional. A equipe me ajudou a escolher o equipamento ideal para meu pai.',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'Como funciona o aluguel?',
      answer: 'O processo é simples: você escolhe o equipamento, solicita orçamento pelo WhatsApp, aprovamos o pedido e entregamos em sua casa. O pagamento pode ser feito mensalmente ou por período contratado.'
    },
    {
      question: 'Qual o prazo mínimo de locação?',
      answer: 'Trabalhamos com locação flexível. O prazo mínimo é de 15 dias, mas oferecemos planos mensais e anuais com condições especiais.'
    },
    {
      question: 'Vocês entregam em toda a cidade?',
      answer: 'Sim, atendemos toda a região metropolitana de Rio de Janeiro e Cidades adjacentes. Para outras localidades, consulte disponibilidade pelo WhatsApp.'
    },
    {
      question: 'Os equipamentos são higienizados?',
      answer: 'Todos os equipamentos passam por rigoroso processo de higienização e esterilização antes de cada locação, seguindo protocolos hospitalares.'
    },
    {
      question: 'Como solicitar orçamento?',
      answer: 'Você pode solicitar orçamento diretamente pelo WhatsApp clicando nos botões disponíveis no site. Nossa equipe responde rapidamente com valores e condições.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Locação de Equipamentos Hospitalares - Atendimento Domiciliar | MedEquip</title>
        <meta name="description" content="Aluguel de equipamentos hospitalares para atendimento domiciliar em São Paulo. Camas hospitalares, cadeiras de rodas, poltronas e mais. Entrega rápida em até 24h e suporte especializado." />
        <meta name="keywords" content="locação equipamentos hospitalares, aluguel cama hospitalar, cadeira de rodas, atendimento domiciliar, equipamentos médicos, home care, São Paulo" />
      </Helmet>

      <Header />

      <main>
        <section id="hero" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1685657814797-83706c4e5279"
              alt="Equipamentos hospitalares para atendimento domiciliar"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
          </div>

          <div className="container-custom relative z-10 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-white mb-6 max-w-4xl mx-auto">
                Locação de equipamentos hospitalares para atendimento domiciliar
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
                Entrega rápida em até 24 horas com suporte especializado e equipamentos novos e higienizados
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={getGeneralQuoteLink()} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="btn-primary text-lg px-8 py-6">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Alugar Agora
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="produtos" className="section-spacing bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">Nossos equipamentos</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Equipamentos hospitalares de qualidade para atendimento domiciliar
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                    'bg-muted hover:bg-muted/80'
                  }`}
                >
                  <div className="aspect-video overflow-hidden bg-slate-300">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain scale-120 drop-shadow-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
                    <p className="text-green-600 font-bold text-lg mb-3">
                      {product.price}
                    </p> 
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {product.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {product.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                       <a
                          href={`/shop?category=${encodeURIComponent(product.category)}`}
                          className="block"
                      >
                          <Button className="w-full btn-primary">
                            Ver produtos
                          </Button>
</a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-muted">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">Por que escolher a Cadeira de Rodas Alugel?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Compromisso com qualidade e atendimento humanizado
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {differentials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-6 rounded-xl bg-card hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="section-spacing bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">Como funciona</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Processo simples e rápido em apenas 3 passos
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                      <span className="text-4xl font-bold text-primary">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border"></div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mt-12"
            >
              <a href={getGeneralQuoteLink()} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="btn-primary text-lg px-8">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Alugar Agora
                </Button>
              </a>
            </motion.div>
          </div>
        </section>

        <section className="section-spacing bg-muted">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">O que nossos clientes dizem</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Depoimentos de quem confia na MedEquip
              </p>
            </motion.div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="break-inside-avoid mb-6"
                >
                  <div className="bg-card p-6 rounded-xl shadow-md">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section-spacing bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">Perguntas frequentes</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tire suas dúvidas sobre nossos serviços
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-12"
            >
              <p className="text-muted-foreground mb-4">Ainda tem dúvidas?</p>
              <a href={getGeneralQuoteLink()} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="btn-secondary text-lg px-8">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Fale conosco no WhatsApp
                </Button>
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
