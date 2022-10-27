import { useState } from 'react';

import './styles.css'

function Header() {
    const[isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true)
      return () => (window.onscroll = null)
    }

  return (
    <header className={isScrolled ? 'scrolled' : 'header-container'}>
        <a href="#home"><h1>GN</h1></a>
        <div className='header-infos'>
          <a href='#sobre'>Sobre mim</a>
          <a href='#projetos'>Projetos</a>
          <a href='#contato'>contato</a>
        </div>

        <div className="header-hamburguer">
          <div className="hamburguer-1"> </div>
          <div className="hamburguer-2"> </div>
          <div className="hamburguer-3"> </div>
        </div>
        <div className='header-hamburguer-links'>
          <a href='#sobre'>Sobre mim</a>
          <a href='#projetos'>Projetos</a>
          <a href='#contato'>contato</a>
        </div>
    </header>
  )
}

export default Header