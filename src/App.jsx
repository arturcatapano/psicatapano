import React, { useState } from 'react';
// Ícones para ilustrar as áreas de atuação, FAQ, navegação e depoimentos
import { 
  Menu, 
  X, 
  MessageCircle, 
  Brain, 
  Briefcase, 
  ChevronDown, 
  ChevronUp, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Check, 
  Quote,
  Star
} from 'lucide-react';

export default function App() {
  // Estado para controlar o menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Estado para controlar quais perguntas do FAQ estão abertas (ID ou objeto de booleanos)
  const [openFaqId, setOpenFaqId] = useState(null);

  // Lista de perguntas e respostas do FAQ
  const faqData = [
    {
      id: 1,
      question: "Como funciona a primeira sessão?",
      answer: "A primeira sessão é uma entrevista inicial de acolhimento. É o momento de entender sua queixa principal, tirar dúvidas sobre o processo, alinhar horários e ver se você se sente confortável com o espaço terapêutico e a minha abordagem."
    },
    {
      id: 2,
      question: "Qual a duração das sessões e frequência?",
      answer: "As sessões individuais têm duração padrão de 50 minutos. A frequência recomendada é semanal, o que garante a continuidade necessária para o processo terapêutico, mas casos específicos podem ser avaliados individualmente."
    },
    {
      id: 3,
      question: "O atendimento online é seguro e sigiloso?",
      answer: "Sim, totalmente. As sessões virtuais são feitas em plataformas de videochamada criptografadas que garantem a privacidade do atendimento. Sigo rigorosamente o Código de Ética Profissional do Psicólogo, garantindo sigilo absoluto em um ambiente de escuta livre de julgamentos."
    },
    {
      id: 4,
      question: "Posso solicitar reembolso ao meu plano de saúde?",
      answer: "Sim! Embora meu atendimento seja particular, eu emito recibos e notas fiscais com todas as especificações técnicas necessárias (CRP, CPF/CNPJ, datas e modalidade). Com esses documentos, você pode solicitar o reembolso das consultas diretamente ao seu convênio médico."
    }
  ];

  // Alterna o estado do FAQ
  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="font-sans text-psi-dark bg-psi-bg min-h-screen selection:bg-psi-peach selection:text-psi-primary relative overflow-x-hidden">
      
      {/* Pattern de marca d'água sutil no fundo do site inteiro */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('/pattern.png')] pointer-events-none -z-20 bg-repeat"></div>

      {/* --- HEADER / NAVBAR --- */}
      <nav className="fixed w-full bg-psi-bg/85 backdrop-blur-md border-b border-psi-peach/20 shadow-sm z-50 p-4 transition-all">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo da Marca */}
          <a href="#inicio" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <img 
              src="/logo-color.png" 
              alt="Psi. Karina Catapano Logo" 
              className="h-12 md:h-14 w-auto object-contain"
            />
          </a>
          
          {/* Links Desktop */}
          <ul className="hidden md:flex gap-8 font-medium text-psi-dark/85">
            <li><a href="#inicio" className="hover:text-psi-primary transition-colors">Início</a></li>
            <li><a href="#sobre" className="hover:text-psi-primary transition-colors">Sobre Mim</a></li>
            <li><a href="#atuacao" className="hover:text-psi-primary transition-colors">Atuação</a></li>
            <li><a href="#depoimentos" className="hover:text-psi-primary transition-colors">Depoimentos</a></li>
            <li><a href="#faq" className="hover:text-psi-primary transition-colors">Dúvidas</a></li>
            <li><a href="#contato" className="hover:text-psi-primary transition-colors">Contato</a></li>
          </ul>

          {/* Botão de Ação Desktop */}
          <a 
            href="#contato" 
            className="hidden md:inline-block bg-psi-primary hover:bg-psi-primary/95 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-psi-primary/20 transition-all duration-300 hover:scale-105"
          >
            Fale Comigo
          </a>

          {/* Botão Menu Hambúrguer (Mobile) */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-psi-primary p-2 hover:bg-psi-peach/20 rounded-lg transition-colors focus:outline-none"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-psi-bg border-t border-psi-peach/10 shadow-lg absolute top-full left-0 w-full p-6 space-y-4 animate-fade-in-up">
            <ul className="space-y-4 font-medium text-psi-dark/95 text-center">
              <li>
                <a 
                  href="#inicio" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 hover:text-psi-primary transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="#sobre" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 hover:text-psi-primary transition-colors"
                >
                  Sobre Mim
                </a>
              </li>
              <li>
                <a 
                  href="#atuacao" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 hover:text-psi-primary transition-colors"
                >
                  Atuação
                </a>
              </li>
              <li>
                <a 
                  href="#depoimentos" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 hover:text-psi-primary transition-colors"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 hover:text-psi-primary transition-colors"
                >
                  Dúvidas
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 hover:text-psi-primary transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
            <a 
              href="#contato" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-psi-primary hover:bg-psi-primary/95 text-white py-3 rounded-full font-bold shadow-md shadow-psi-primary/20"
            >
              Fale Comigo
            </a>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="inicio" className="min-h-screen flex items-center bg-gradient-to-tr from-psi-bg via-psi-peach/15 to-psi-bg px-6 pt-28 pb-16 relative overflow-hidden">
        {/* Detalhes Circulares Desfocados */}
        <div className="absolute top-36 right-0 w-80 h-80 bg-psi-peach/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-16 left-0 w-72 h-72 bg-psi-gold/20 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coluna Esquerda: Texto */}
          <div className="lg:col-span-7 text-center lg:text-left z-10 space-y-6">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-psi-primary/10 text-psi-primary text-xs md:text-sm font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-psi-primary animate-ping"></span>
              Psicologia Clínica & Organizacional
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-psi-primary leading-tight">
              Escuta terapêutica para transformar vidas e carreiras.
            </h1>
            
            <p className="text-lg md:text-xl text-psi-dark/85 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
              Da profundidade da Psicanálise à estratégia do ambiente corporativo. 
              Um olhar integrado sobre quem você é e onde você quer chegar.
            </p>
            
            {/* Tags Rápidas de Confiança */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start text-sm text-psi-dark/65 font-medium">
              <div className="flex items-center gap-1.5">
                <Check size={16} className="text-psi-primary" /> Atendimento Online
              </div>
              <div className="flex items-center gap-1.5">
                <Check size={16} className="text-psi-primary" /> Registro CRP Ativo
              </div>
              <div className="flex items-center gap-1.5">
                <Check size={16} className="text-psi-primary" /> Ênfase em Psicanálise
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="#contato" 
                className="w-full sm:w-auto text-center bg-psi-primary hover:bg-psi-primary/95 text-white text-lg px-8 py-4 rounded-full shadow-lg shadow-psi-primary/20 hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium"
              >
                Agendar Conversa
              </a>
              <a 
                href="#sobre" 
                className="w-full sm:w-auto text-center bg-white border border-psi-peach/50 text-psi-primary text-lg px-8 py-4 rounded-full hover:bg-psi-bg hover:shadow-md transition-all duration-300 font-medium"
              >
                Conhecer a Karina
              </a>
            </div>
          </div>
          
          {/* Coluna Direita: Cartão de Apresentação / Imagem */}
          <div className="lg:col-span-5 flex justify-center z-10">
            <div className="relative w-full max-w-[360px]">
              {/* Backing decorative frame */}
              <div className="absolute inset-0 bg-psi-peach rounded-[2.5rem] translate-x-4 translate-y-4 -z-10 shadow-lg"></div>
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-psi-gold rounded-full -z-10 blur-sm"></div>
              
              {/* Main Photo Card */}
              <div className="bg-white p-4 rounded-[2.5rem] shadow-xl border border-psi-peach/20 overflow-hidden group">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-psi-peach/10">
                  <img 
                    src="/karina.jpg" 
                    alt="Karina Catapano" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Visual Bio Metadata Footer */}
                <div className="mt-4 text-center space-y-1">
                  <h3 className="font-semibold text-lg text-psi-primary">Karina Catapano</h3>
                  <p className="text-xs text-psi-dark/60 font-light">Psicóloga CRP 06/223358</p>
                  <div className="flex justify-center gap-1.5 text-xs text-psi-gold pt-1">
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        
        {/* Scroll Indicator */}
        <a href="#sobre" className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-psi-primary opacity-80 hover:opacity-100 transition-opacity">
          <ChevronDown size={30} />
        </a>
      </section>

      {/* --- SOBRE MIM --- */}
      <section id="sobre" className="py-28 px-6 bg-white border-t border-psi-peach/10 relative">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* Imagem do Perfil com Decoração */}
          <div className="relative group flex-shrink-0">
            <div className="absolute inset-0 bg-psi-peach rounded-full translate-x-3 translate-y-3 -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="/karina.jpg" 
                alt="Karina Catapano" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Símbolo Flutuante */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white p-2.5 rounded-full shadow-lg border border-psi-peach/20 hover:rotate-12 transition-transform duration-300">
              <img src="/simbolo.png" alt="Símbolo" className="w-full h-full object-contain" />
            </div>
          </div>
          
          {/* Conteúdo Textual */}
          <div className="flex-1 text-left space-y-6">
            <div>
              <span className="text-psi-primary font-medium tracking-wide uppercase text-sm">A Profissional</span>
              <h3 className="text-2xl font-semibold text-psi-dark/80 mt-1">Olá, sou</h3>
              <h2 className="font-signature text-5xl md:text-6xl text-psi-primary mt-1 mb-4 font-normal tracking-wide leading-none">
                Karina Catapano
              </h2>
            </div>
            
            <div className="space-y-4 text-base md:text-lg text-psi-dark/70 leading-relaxed text-justify font-light">
              <p>
                Tenho 26 anos e sou apaixonada pelo ser humano e suas complexidades. 
                Minha atuação é híbrida e integrativa: sou <strong className="font-semibold text-psi-dark">Psicóloga Organizacional e Clínica</strong>, 
                com ênfase em <strong className="font-semibold text-psi-dark">Psicanálise</strong>.
              </p>
              <p>
                Acredito que não existe separação entre a "pessoa" e o "profissional". 
                Na clínica, utilizo a escuta terapêutica para tratar angústias, ansiedades e processos de autoconhecimento.
              </p>
              <p>
                No âmbito organizacional, aplico essa mesma sensibilidade para desenvolver talentos, 
                melhorar o clima e humanizar relações de trabalho. Meu objetivo é proporcionar 
                um espaço seguro de fala e transformação.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="inline-flex items-center gap-2 text-psi-primary font-semibold bg-psi-peach/25 px-4 py-2 rounded-lg border border-psi-peach/20 text-sm md:text-base">
                <MapPin size={18} className="animate-pulse" />
                <span>Atendimento Online</span>
              </div>
              <div className="inline-flex items-center gap-2 text-psi-dark/70 font-semibold bg-psi-bg px-4 py-2 rounded-lg border border-psi-peach/20 text-sm">
                <span>CRP 06/223358</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- ÁREAS DE ATUAÇÃO COM CHECKLISTS --- */}
      <section id="atuacao" className="py-28 px-6 bg-psi-bg/40 border-t border-b border-psi-peach/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-psi-primary font-medium tracking-wide uppercase text-sm">Especialidades</span>
            <h3 className="text-3xl md:text-4xl font-bold text-psi-primary mt-2">Como posso te ajudar?</h3>
            <div className="w-12 h-1 bg-psi-gold mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Card Clínica */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-psi-primary flex flex-col justify-between">
              <div>
                <div className="bg-psi-peach/25 w-14 h-14 rounded-2xl flex items-center justify-center text-psi-primary mb-6 border border-psi-peach/10">
                  <Brain size={32} />
                </div>
                <h4 className="text-2xl font-bold text-psi-dark mb-4">Psicologia Clínica & Psicanálise</h4>
                <p className="text-psi-dark/70 font-light leading-relaxed mb-6">
                  Sessões individuais focadas no inconsciente, autoconhecimento e resolução de conflitos internos. Um espaço de escuta sem julgamentos para lidar com questões de vida.
                </p>
              </div>
              
              {/* Checklist Clínica */}
              <div className="border-t border-psi-peach/20 pt-6 space-y-3">
                <p className="text-xs uppercase tracking-wider font-semibold text-psi-primary mb-2">Demandas Comuns:</p>
                <ul className="space-y-2.5 text-sm text-psi-dark/85">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-psi-gold bg-psi-gold/15 rounded-full p-0.5 shrink-0" />
                    <span>Gestão de ansiedade, estresse e depressão</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-psi-gold bg-psi-gold/15 rounded-full p-0.5 shrink-0" />
                    <span>Processos de autoconhecimento e autoestima</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-psi-gold bg-psi-gold/15 rounded-full p-0.5 shrink-0" />
                    <span>Conflitos amorosos, familiares ou interpessoais</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-psi-gold bg-psi-gold/15 rounded-full p-0.5 shrink-0" />
                    <span>Transição de vida, luto e crises existenciais</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card Organizacional */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-psi-primary flex flex-col justify-between">
              <div>
                <div className="bg-psi-peach/25 w-14 h-14 rounded-2xl flex items-center justify-center text-psi-primary mb-6 border border-psi-peach/10">
                  <Briefcase size={32} />
                </div>
                <h4 className="text-2xl font-bold text-psi-dark mb-4">Psicologia Organizacional</h4>
                <p className="text-psi-dark/70 font-light leading-relaxed mb-6">
                  Consultoria estratégica voltada para carreira, desenvolvimento de lideranças e estruturação de programas voltados à saúde mental nas relações corporativas.
                </p>
              </div>
              
              {/* Checklist Organizacional */}
              <div className="border-t border-psi-peach/20 pt-6 space-y-3">
                <p className="text-xs uppercase tracking-wider font-semibold text-psi-primary mb-2">Frentes de Trabalho:</p>
                <ul className="space-y-2.5 text-sm text-psi-dark/85">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-psi-gold bg-psi-gold/15 rounded-full p-0.5 shrink-0" />
                    <span>Orientação de carreira e recolocação profissional</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-psi-gold bg-psi-gold/15 rounded-full p-0.5 shrink-0" />
                    <span>Treinamento e desenvolvimento de líderes e equipes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-psi-gold bg-psi-gold/15 rounded-full p-0.5 shrink-0" />
                    <span>Prevenção e acompanhamento de Burnout no trabalho</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-psi-gold bg-psi-gold/15 rounded-full p-0.5 shrink-0" />
                    <span>Humanização e melhora do clima organizacional</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- DEPOIMENTOS ÉTICOS (NOVO) --- */}
      <section id="depoimentos" className="py-28 px-6 bg-white relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-psi-primary font-medium tracking-wide uppercase text-sm">Feedback</span>
            <h3 className="text-3xl md:text-4xl font-bold text-psi-primary mt-2">Depoimentos & Experiências</h3>
            <p className="text-psi-dark/65 font-light text-sm mt-3">Relações construídas com base no sigilo, ética e profissionalismo.</p>
            <div className="w-12 h-1 bg-psi-gold mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Depoimento 1 */}
            <div className="bg-psi-bg/40 p-8 rounded-3xl border border-psi-peach/20 shadow-sm flex flex-col justify-between relative">
              <Quote size={40} className="text-psi-peach opacity-30 absolute top-4 right-4" />
              <p className="text-psi-dark/85 font-light italic leading-relaxed text-sm md:text-base mb-6">
                "O processo de psicoterapia com a Karina tem sido fundamental. Sua escuta atenta, sem julgamentos e orientada pela psicanálise me deu espaço para entender minhas angústias e mudar minha relação comigo mesma."
              </p>
              <div>
                <p className="font-semibold text-psi-primary text-sm">C. R.</p>
                <p className="text-xs text-psi-dark/50 font-light">Paciente de Psicoterapia Online</p>
              </div>
            </div>

            {/* Depoimento 2 */}
            <div className="bg-psi-bg/40 p-8 rounded-3xl border border-psi-peach/20 shadow-sm flex flex-col justify-between relative">
              <Quote size={40} className="text-psi-peach opacity-30 absolute top-4 right-4" />
              <p className="text-psi-dark/85 font-light italic leading-relaxed text-sm md:text-base mb-6">
                "Contratamos a Karina para um workshop de liderança e gestão de estresse na equipe. Sua abordagem integrativa, que une o organizacional ao bem-estar do indivíduo, foi muito elogiada por todos os colaboradores."
              </p>
              <div>
                <p className="font-semibold text-psi-primary text-sm">L. M. (Diretora de RH)</p>
                <p className="text-xs text-psi-dark/50 font-light">Cliente de Consultoria Corporativa</p>
              </div>
            </div>

            {/* Depoimento 3 */}
            <div className="bg-psi-bg/40 p-8 rounded-3xl border border-psi-peach/20 shadow-sm flex flex-col justify-between relative">
              <Quote size={40} className="text-psi-peach opacity-30 absolute top-4 right-4" />
              <p className="text-psi-dark/85 font-light italic leading-relaxed text-sm md:text-base mb-6">
                "Fiz orientação profissional e planejamento de transição de carreira. A sensibilidade dela em enxergar meus objetivos profissionais alinhados ao meu bem-estar clínico foi o grande diferencial no meu sucesso."
              </p>
              <div>
                <p className="font-semibold text-psi-primary text-sm">T. A.</p>
                <p className="text-xs text-psi-dark/50 font-light">Cliente de Transição de Carreira</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION (NOVO) --- */}
      <section id="faq" className="py-28 px-6 bg-psi-bg/40 border-t border-b border-psi-peach/10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-psi-primary font-medium tracking-wide uppercase text-sm">Dúvidas Comuns</span>
            <h3 className="text-3xl md:text-4xl font-bold text-psi-primary mt-2">Perguntas Frequentes</h3>
            <div className="w-12 h-1 bg-psi-gold mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="space-y-4">
            {faqData.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-2xl shadow-sm border border-psi-peach/20 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <span className="font-semibold text-psi-dark text-base md:text-lg hover:text-psi-primary transition-colors">
                    {item.question}
                  </span>
                  <span className="text-psi-primary ml-4 shrink-0">
                    {openFaqId === item.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>
                
                {openFaqId === item.id && (
                  <div className="px-6 pb-6 text-psi-dark/70 text-sm md:text-base leading-relaxed font-light animate-fade-in-up border-t border-psi-bg pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTATO E FORMULÁRIO --- */}
      <section id="contato" className="py-28 px-6 bg-gradient-to-b from-psi-bg to-psi-peach/40 relative">
        <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-white/60 text-center relative z-10">
          <span className="text-psi-primary font-medium tracking-wide uppercase text-sm">Agendamento</span>
          <h3 className="text-3xl md:text-4xl font-bold text-psi-primary mt-1 mb-4">Vamos conversar?</h3>
          <p className="text-psi-dark/70 mb-8 text-base md:text-lg font-light">
            Dê o primeiro passo rumo ao autoconhecimento ou ao desenvolvimento profissional.
          </p>
          
          <div className="flex flex-col gap-4">
            <a 
              href="https://wa.me/message/UMF724W665F3G1" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white p-4.5 rounded-xl font-bold hover:brightness-105 transition-all shadow-md hover:shadow-lg group text-base md:text-lg"
            >
              <MessageCircle className="group-hover:animate-pulse" />
              Agendar Conversa pelo WhatsApp
            </a>

            <div className="relative flex py-4 items-center">
              <div className="flex-grow border-t border-psi-peach/45"></div>
              <span className="flex-shrink mx-4 text-psi-dark/40 text-xs tracking-wider uppercase font-semibold">OU ENVIE UM E-MAIL</span>
              <div className="flex-grow border-t border-psi-peach/45"></div>
            </div>

            <form className="space-y-4" action="https://formspree.io/f/xbddgnqy" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="nome" 
                  placeholder="Seu Nome" 
                  className="w-full p-4 rounded-xl bg-psi-bg/40 border border-psi-peach/30 focus:border-psi-primary focus:ring-2 focus:ring-psi-primary/20 focus:outline-none transition-all placeholder:text-psi-dark/40" 
                  required 
                />
                <input 
                  type="text" 
                  name="telefone" 
                  placeholder="Seu Telefone" 
                  className="w-full p-4 rounded-xl bg-psi-bg/40 border border-psi-peach/30 focus:border-psi-primary focus:ring-2 focus:ring-psi-primary/20 focus:outline-none transition-all placeholder:text-psi-dark/40" 
                />
              </div>
              <input 
                type="email" 
                name="email" 
                placeholder="Seu melhor e-mail" 
                className="w-full p-4 rounded-xl bg-psi-bg/40 border border-psi-peach/30 focus:border-psi-primary focus:ring-2 focus:ring-psi-primary/20 focus:outline-none transition-all placeholder:text-psi-dark/40" 
                required 
              />
              <textarea 
                name="mensagem" 
                placeholder="Gostaria de saber mais sobre..." 
                rows="4" 
                className="w-full p-4 rounded-xl bg-psi-bg/40 border border-psi-peach/30 focus:border-psi-primary focus:ring-2 focus:ring-psi-primary/20 focus:outline-none transition-all placeholder:text-psi-dark/40" 
                required
              ></textarea>
              
              <button 
                type="submit" 
                className="w-full bg-psi-primary hover:bg-psi-primary/95 text-white font-semibold p-4 rounded-xl hover:shadow-md transition-all duration-300 shadow-md shadow-psi-primary/10 text-base"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>

        {/* --- RODAPÉ --- */}
        <footer className="mt-24 text-center text-psi-primary font-medium relative z-10">
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="https://www.instagram.com/psicatapano" 
              target="_blank"
              rel="noreferrer"
              className="bg-white/60 p-3.5 rounded-full hover:bg-psi-primary hover:text-white transition-all duration-300 shadow-sm border border-psi-peach/20 text-psi-primary"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/karinacatapano" 
              target="_blank"
              rel="noreferrer"
              className="bg-white/60 p-3.5 rounded-full hover:bg-psi-primary hover:text-white transition-all duration-300 shadow-sm border border-psi-peach/20 text-psi-primary"
            >
              <Linkedin size={20} />
            </a>
          </div>
          
          <div className="space-y-2 text-xs md:text-sm text-psi-dark/65 font-light">
            <p className="font-semibold text-psi-primary/90">© 2026 Karina Catapano - Psicóloga CRP 06/223358</p>
            <p>Atendimento psicológico clínico de acordo com as resoluções vigentes do CFP.</p>
            <p className="text-[10px] text-psi-dark/40">Todos os direitos reservados.</p>
          </div>
        </footer>
      </section>

    </div>
  );
}
