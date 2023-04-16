import { useState } from 'react';

import './styles.css'

function Header() {

  const HeaderList = [
    { id: 1, urlName: 'Home', url:'#home' },
    { id: 2, urlName: 'Sobre mim', url: '#sobre'},
    { id: 3, urlName: 'Projetos', url: '#projetos'},
    { id: 4, urlName: 'Contato', url: '#contato'}
  ]

  const HeaderLinks = HeaderList.map((props) => 
    <div className="header-infos" key={props.id}>
      <a href={props.url}>{props.urlName}</a>
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
        <div className='header-infos'>
          {HeaderLinks}
        </div>
    </header>
  )
}

export default Header