// src/components/Header.jsx

import React, { useState } from 'react';
import { Button } from './button'; 

export default function Header () {
  // Estado para controlar se o menu está aberto ou fechado.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-5 z-50 w-[90%] md:w-[80%] max-w-[1400px] mx-auto 
      h-[100px] flex justify-between items-center bg-[#1618028C] px-4 rounded-3xl backdrop-blur-sm border">
      
      {/* Logo */}
      <a href="/" className="flex-shrink-0">
        <img 
          src="https://versellpay.com/wp-content/uploads/2024/08/logo-versell.svg" 
          alt="Logotipo da Versell Pay" 
          className="w-[150px] h-auto"
        />
      </a>

      {/* Botão do Hambúrguer (visível apenas em telas pequenas) */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)} // Ação para abrir/fechar o menu
        className="md:hidden text-white focus:outline-none"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {/* Mostra o ícone de 'X' se o menu estiver aberto, caso contrário, mostra o hambúrguer */}
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-4 6h4"></path>
          )}
        </svg>
      </button>

      {/* Menu de navegação */}
      <nav className={`
        md:flex items-center gap-3
        ${isMenuOpen ? 'block' : 'hidden'} 
        md:block // O menu deve estar sempre visível em telas grandes
        absolute md:static top-[100px] left-0 w-full md:w-auto p-4 md:p-0 
        bg-[#0f0f0f] md:bg-transparent rounded-b-3xl border-t md:border-none border-gray-700 
        flex-col md:flex-row shadow-lg md:shadow-none
      `}>
        <Button className='bg-transparent text-white'>Fazer login</Button>
        <Button className='bg-transparent text-white border border-[#BCCF00] hover:text-black hover:bg-[#BCCF00]'>Criar conta</Button>
      </nav>
      
    </header>
  );
};

