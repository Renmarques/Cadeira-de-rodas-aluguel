
import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Instagram, Linkedin } from 'lucide-react';
import { getContactLink } from '@/utils/WhatsAppUtils';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-muted text-muted-foreground">
      <div className="container-custom section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground leading-none">Cadeira de Rodas Aluguel</h3>
                <p className="text-xs leading-none">Locação Hospitalar</p>
              </div>
            </div>
            <p className="text-sm mb-6">
              Equipamentos hospitalares de qualidade para atendimento domiciliar com entrega rápida e suporte especializado.
            </p>
            {/*<div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>*/}
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">(21) 99307-1529</p>
                  <p className="text-xs">Seg - Sex: 8h às 21h</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href={getContactLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-foreground hover:text-secondary transition-colors"
                  >
                    WhatsApp
                  </a>
                  <p className="text-xs">Atendimento 24h</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Cadeiraderodasaluguel@gmail.com</p>
                  <p className="text-xs">Resposta em até 24h</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Localização</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">Av. Monsenhor Félix, 589</p>
                  <p className="text-sm">Irajá, Rio de Janeiro</p>
                  <p className="text-sm">CEP: 21235-110</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Horário de Atendimento</p>
                  <p className="text-sm">Segunda a Sexta: 8h às 22h</p>
                  <p className="text-sm">Sábado: 9h às 21h</p>
                  <p className="text-sm">WhatsApp: 24 horas</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#produtos" className="text-sm hover:text-primary transition-colors">
                  Nossos Produtos
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-sm hover:text-primary transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm hover:text-primary transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <span className="text-sm">Política de Privacidade</span>
              </li>
              <li>
                <span className="text-sm">Termos de Serviço</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm">
            © {currentYear} Cadeira de Rodas Aluguel. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
