import React from 'react';
// Ícones para ilustrar as duas áreas de atuação
import { MessageCircle, Brain, Briefcase, ChevronDown, Instagram, Linkedin, MapPin } from 'lucide-react';

export default function App() {
  
  // CORES DA MARCA (Para referência):
  // Fundo Suave: #efc9c1
  // Ação/Texto Forte: #c6444c
  
  return (
    <div className="font-sans text-gray-800">
      
      {/* --- NAV BAR --- */}
      <nav className="fixed w-full bg-[#efc9c1]/95 backdrop-blur-sm shadow-sm z-50 p-4 transition-all">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold text-[#c6444c] tracking-tight">
            Psi. Karina Catapano
          </h1>
          <ul className="hidden md:flex gap-8 font-medium text-[#c6444c]">
            <li><a href="#inicio" className="hover:opacity-75 transition-opacity">Início</a></li>
            <li><a href="#sobre" className="hover:opacity-75 transition-opacity">Sobre Mim</a></li>
            <li><a href="#atuacao" className="hover:opacity-75 transition-opacity">Atuação</a></li>
            <li><a href="#contato" className="hover:opacity-75 transition-opacity">Contato</a></li>
          </ul>
          {/* Menu Mobile simples (apenas botão de ação) */}
          <a href="#contato" className="md:hidden bg-[#c6444c] text-white px-4 py-2 rounded-full text-sm font-bold">
            Fale Comigo
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION (CAPA) --- */}
      <section id="inicio" className="min-h-screen flex flex-col justify-center items-center bg-[#efc9c1] px-6 pt-20 text-center relative overflow-hidden">
        {/* Elemento decorativo de fundo */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-white/20 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-4xl animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-white/30 text-[#c6444c] text-sm font-bold mb-4 tracking-wide">
            PSICOLOGIA CLÍNICA & ORGANIZACIONAL
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#c6444c] mb-6 leading-tight">
            Escuta analítica para transformar vidas e carreiras.
          </h2>
          <p className="text-lg md:text-xl text-gray-800 mb-10 leading-relaxed max-w-2xl mx-auto">
            Da profundidade da Psicanálise à estratégia do ambiente corporativo. 
            Um olhar integrado sobre quem você é e onde você quer chegar.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="#contato" 
              className="bg-[#c6444c] text-white text-lg px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform font-semibold"
            >
              Agendar Conversa
            </a>
            <a 
              href="#sobre" 
              className="bg-white/50 text-[#c6444c] text-lg px-8 py-4 rounded-full hover:bg-white hover:shadow-md transition-all font-semibold"
            >
              Conhecer a Karina
            </a>
          </div>
        </div>
        
        <a href="#sobre" className="absolute bottom-8 animate-bounce text-[#c6444c] opacity-70">
          <ChevronDown size={32} />
        </a>
      </section>

      {/* --- SOBRE (BIO) --- */}
      <section id="sobre" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          
          {/* FOTO */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[#efc9c1] rounded-full translate-x-3 translate-y-3 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="/perfil.jpg" 
                alt="Karina Catapano" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
          
          {/* TEXTO BIO */}
          <div className="flex-1 text-left">
            <h3 className="text-3xl font-bold text-[#c6444c] mb-6">Olá, sou Karina Catapano</h3>
            
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed text-justify">
              <p>
                Tenho 26 anos e sou apaixonada pelo ser humano e suas complexidades. 
                Minha atuação é híbrida e integrativa: sou <strong>Psicóloga Organizacional e Clínica</strong>, 
                com ênfase em <strong>Psicanálise</strong>.
              </p>
              <p>
                Acredito que não existe separação entre a "pessoa" e o "profissional". 
                Na clínica, utilizo a escuta analítica para tratar angústias, ansiedades e processos de autoconhecimento.
              </p>
              <p>
                No âmbito organizacional, aplico essa mesma sensibilidade para desenvolver talentos, 
                melhorar o clima e humanizar relações de trabalho. Meu objetivo é proporcionar 
                um espaço seguro de fala e transformação.
              </p>
            </div>

            {/* Destaque CRP */}
            <div className="mt-8 inline-flex items-center gap-2 text-[#c6444c] font-semibold bg-[#efc9c1]/20 px-4 py-2 rounded-lg">
              <MapPin size={20} />
              <span>Atendimento Online & Presencial</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- ÁREAS DE ATUAÇÃO (NOVO) --- */}
      <section id="atuacao" className="py-20 px-6 bg-[#fff5f2]">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-[#c6444c] mb-12">Como posso te ajudar?</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card Clínica */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#c6444c]">
              <div className="bg-[#efc9c1] w-12 h-12 rounded-lg flex items-center justify-center text-[#c6444c] mb-6">
                <Brain size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Psicologia Clínica & Psicanálise</h4>
              <p className="text-gray-600">
                Sessões individuais focadas no inconsciente, autoconhecimento e resolução de conflitos internos.
                Um espaço de escuta livre de julgamentos para lidar com ansiedade, depressão e questões relacionais.
              </p>
            </div>

            {/* Card Organizacional */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#c6444c]">
              <div className="bg-[#efc9c1] w-12 h-12 rounded-lg flex items-center justify-center text-[#c6444c] mb-6">
                <Briefcase size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Psicologia Organizacional</h4>
              <p className="text-gray-600">
                Consultoria voltada para carreira, desenvolvimento de lideranças e saúde mental no trabalho.
                Alinhando o bem-estar do colaborador com os objetivos estratégicos da empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTATO --- */}
      <section id="contato" className="py-24 px-6 bg-[#efc9c1]">
        <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur rounded-3xl p-8 md:p-12 shadow-2xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-[#c6444c] mb-4">Vamos conversar?</h3>
          <p className="text-gray-600 mb-8 text-lg">
            Sinta-se à vontade para tirar dúvidas ou agendar uma sessão inicial.
          </p>
          
          <div className="flex flex-col gap-4">
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white p-4 rounded-xl font-bold hover:brightness-105 transition-all shadow-md group"
            >
              <MessageCircle className="group-hover:animate-pulse" />
              Agendar pelo WhatsApp
            </a>

            <div className="relative flex py-4 items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-400 text-sm">OU E-MAIL</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <form className="space-y-4" action="https://formspree.io/f/SEU_CODIGO" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="nome" placeholder="Seu Nome" className="w-full p-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#c6444c] transition-all" required />
                <input type="text" name="telefone" placeholder="Seu Telefone" className="w-full p-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#c6444c] transition-all" />
              </div>
              <input type="email" name="email" placeholder="Seu melhor e-mail" className="w-full p-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#c6444c] transition-all" required />
              <textarea name="mensagem" placeholder="Gostaria de saber mais sobre..." rows="3" className="w-full p-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#c6444c] transition-all" required></textarea>
              <button type="submit" className="w-full bg-[#c6444c] text-white font-bold p-4 rounded-xl hover:opacity-90 transition-all shadow-lg">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>

        <footer className="mt-16 text-center text-[#c6444c] font-medium">
          <div className="flex justify-center gap-8 mb-6">
            <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/40 transition-colors"><Instagram /></a>
            <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/40 transition-colors"><Linkedin /></a>
          </div>
          <p className="text-sm opacity-80">
            © 2026 Karina Catapano - Psicóloga CRP 00/00000<br/>
            Todos os direitos reservados.
          </p>
        </footer>
      </section>

    </div>
  );
}