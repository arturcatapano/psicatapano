import React from 'react';
// Se der erro nos ícones, rode no terminal: npm install lucide-react
import { MessageCircle, Mail, ChevronDown, Instagram, Linkedin } from 'lucide-react';

export default function App() {
  
  // Nossas cores (para referência):
  // Fundo: #efc9c1 (psi-primary)
  // Detalhe: #c6444c (psi-btn)
  
  return (
    <div className="font-sans text-gray-800">
      
      {/* --- HEADER / NAVEGAÇÃO --- */}
      <nav className="fixed w-full bg-[#efc9c1]/90 backdrop-blur-sm shadow-sm z-50 p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#c6444c]">Psi. Nome Sobrenome</h1>
          <ul className="flex gap-6 font-medium text-[#c6444c]">
            <li><a href="#inicio" className="hover:underline">Início</a></li>
            <li><a href="#sobre" className="hover:underline">Sobre</a></li>
            <li><a href="#contato" className="hover:underline">Contato</a></li>
          </ul>
        </div>
      </nav>

      {/* --- HERO SECTION (INÍCIO) --- */}
      <section id="inicio" className="min-h-screen flex flex-col justify-center items-center bg-[#efc9c1] px-6 pt-20 text-center">
        <div className="max-w-3xl animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-[#c6444c] mb-6">
            Acolhimento e Transformação
          </h2>
          <p className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed">
            Psicoterapia online e presencial para ajudar você a reencontrar seu equilíbrio emocional.
          </p>
          <a 
            href="#contato" 
            className="inline-block bg-[#c6444c] text-white text-lg px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Agendar Consulta
          </a>
        </div>
        
        {/* Seta indicando scroll */}
        <a href="#sobre" className="absolute bottom-10 animate-bounce text-[#c6444c]">
          <ChevronDown size={40} />
        </a>
      </section>

      {/* --- SOBRE A PSICÓLOGA --- */}
      <section id="sobre" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Espaço para Foto */}
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-200 rounded-full flex-shrink-0 border-4 border-[#efc9c1] overflow-hidden">
            {/* Coloque a foto dela aqui depois */}
            <img src="https://placehold.co/400x400/efc9c1/c6444c?text=Foto+Psi" alt="Foto da Psicóloga" className="w-full h-full object-cover"/>
          </div>
          
          <div className="text-left">
            <h3 className="text-3xl font-bold text-[#c6444c] mb-4">Sobre Mim</h3>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Olá! Sou psicóloga clínica especializada em Terapia Cognitivo-Comportamental. 
              Meu objetivo é proporcionar um espaço seguro e livre de julgamentos, onde possamos trabalhar juntos 
              suas questões emocionais.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Com experiência em ansiedade, depressão e autoconhecimento, acredito que cada jornada é única.
            </p>
          </div>
        </div>
      </section>

      {/* --- CONTATO E RODAPÉ --- */}
      <section id="contato" className="py-20 px-6 bg-[#efc9c1]">
        <div className="max-w-xl mx-auto bg-white/80 backdrop-blur rounded-2xl p-8 shadow-xl">
          <h3 className="text-3xl font-bold text-center text-[#c6444c] mb-8">Entre em Contato</h3>
          
          <div className="flex flex-col gap-4">
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              className="flex items-center justify-center gap-3 bg-green-500 text-white p-4 rounded-xl font-bold hover:bg-green-600 transition-colors"
            >
              <MessageCircle />
              Chamar no WhatsApp
            </a>

            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-500">ou envie um e-mail</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Formulário Simples */}
            <form className="space-y-4" action="https://formspree.io/f/SEU_CODIGO" method="POST">
              <input type="text" name="nome" placeholder="Seu Nome" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-[#c6444c]" required />
              <input type="email" name="email" placeholder="Seu E-mail" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-[#c6444c]" required />
              <textarea name="mensagem" placeholder="Como posso ajudar?" rows="4" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-[#c6444c]" required></textarea>
              <button type="submit" className="w-full bg-[#c6444c] text-white font-bold p-3 rounded-lg hover:opacity-90 transition-opacity">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>

        <footer className="mt-16 text-center text-[#c6444c] font-medium">
          <div className="flex justify-center gap-6 mb-4">
            <Instagram className="cursor-pointer hover:scale-110" />
            <Linkedin className="cursor-pointer hover:scale-110" />
          </div>
          <p>© 2024 Psicóloga Nome Sobrenome - CRP 00/00000</p>
        </footer>
      </section>

    </div>
  );
}