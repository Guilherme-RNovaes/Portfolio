import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi"
import { GrClose } from "react-icons/gr"

import './styles.css'

function Header() {

  const [isSmallScreen, setIsSmallScreen] = useState(window.matchMedia('(max-width: 768px)').matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleMediaQueryChange = (event) => {
      setIsSmallScreen(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const [toogleState, setToogleState] = useState(0);

  const toogleTab = (index) => {
    setToogleState(index)
  }

  const HeaderList = [
    { id: 1, urlName: 'Home', url:'#home' },
    { id: 2, urlName: 'Sobre mim', url: '#sobre'},
    { id: 3, urlName: 'Skills', url: '#skills'},
    { id: 4, urlName: 'Qualificação', url: '#qualificacao'},
    { id: 5, urlName: 'Projetos', url: '#projetos'},
    { id: 6, urlName: 'Contato', url: '#contato'}
  ]

  const [activeLink, setActiveLink] = useState('#home')

  const HeaderLinks = HeaderList.map((props) => 
    <div className="header-infos" key={props.id}>
      <a 
        href={props.url} 
        onClick={() => setActiveLink(props.url) & setToogleState(0)} 
        className={activeLink === props.url ? 'header-link-active' : 'header-link'}
      >
        {props.urlName}
      </a>
    </div>
  )

  const[isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => { 
    setIsScrolled(window.scrollY === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  return (
    <>
    <header className={isScrolled ? 'scrolled' : 'header-container'}>
        <a href="#home"><h1>GN</h1></a>
        <div className={isSmallScreen ? 'mobile' : 'desktop'}>
          {HeaderLinks}
        </div>
        <div className={isSmallScreen ? 'show-hamburguer' : 'no-hamburguer'}>
          <button onClick={() => toogleTab(1) && toogleState(1)}>
            <GiHamburgerMenu />
          </button>
        </div>
    </header>

        <div className={isSmallScreen && toogleTab === 1 ? 'hamburguer' : 'header'}>
          <div id={toogleState === 1 ? 'hamburguer-active' : 'hamburguer-inactive'}>
            <button onClick={() => toogleTab(0) && toogleState(0)}>
              <GrClose />
            </button>
            {HeaderLinks}
          </div>
        </div>
    </>

  )
}

export default Header