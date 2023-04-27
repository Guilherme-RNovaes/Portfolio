import { useState } from 'react';

import './styles.css'

function Header() {

  const HeaderList = [
    { id: 1, urlName: 'Home', url:'#home' },
    { id: 2, urlName: 'Sobre mim', url: '#sobre'},
    { id: 3, urlName: 'Skills', url: '#skills'},
    { id: 4, urlName: 'Qualificação', url: '#qualificacao'},
    // { id: 5, urlName: 'Projetos', url: '#projetos'},
    { id: 6, urlName: 'Contato', url: '#contato'}
  ]

  // const HamburguerList = [
  //   { id: 1}
  // ]

  const [activeLink, setActiveLink] = useState('#home')

  const HeaderLinks = HeaderList.map((props) => 
    <div className="header-infos" key={props.id}>
      <a 
        href={props.url} 
        onClick={() => setActiveLink(props.url)} 
        className={activeLink === props.url ? 'header-link-active' : 'header-link'}
      >
        {props.urlName}
      </a>
    </div>
  )

  const[isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => { 
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  return (
    <header className={isScrolled ? 'scrolled' : 'header-container'}>
        <a href="#home"><h1>GN</h1></a>
        <div className='header'>
          {HeaderLinks}
        </div>
    </header>
  )
}

export default Header