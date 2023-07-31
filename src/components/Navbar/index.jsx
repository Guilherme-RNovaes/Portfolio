import { useState } from 'react'
import { RiCodeSSlashFill, RiContactsBookFill, RiHomeFill, RiToolsFill, RiTrophyFill, RiUser3Fill } from 'react-icons/ri'
import './styles.css'


function Navbar() {
  const HeaderList = [
    { id: 1, urlName: 'Home', ico: <RiHomeFill />, url:'#home' },
    { id: 2, urlName: 'Sobre mim', ico: <RiUser3Fill />, url: '#sobre'},
    { id: 3, urlName: 'Skills', ico: <RiCodeSSlashFill />, url: '#skills'},
    { id: 4, urlName: 'Qualificação', ico: <RiTrophyFill />, url: '#qualificacao'},
    { id: 5, urlName: 'Projetos', ico: <RiToolsFill />, url: '#projetos'},
    { id: 6, urlName: 'Contato', ico: <RiContactsBookFill />, url: '#contato'}
  ]
  
  const [activeLink, setActiveLink] = useState('#home');
  
    const HeaderLinks = HeaderList.map((props) => 
      <div key={props.id}>
        <a 
          href={props.url}
          onClick={() => setActiveLink(props.url)} 
          className={activeLink === props.url ? 'navbar-link-active' : 'navbar-link'}
        >
          {props.ico}
          <a 
            href={props.url}
            className={activeLink === props.url ? 'name' : 'navbar-inactive'}
          >
            {props.urlName}
          </a>
        </a>
      </div>
    )
  return (
    <div className='navbar-container'>
      <div className='navbar-area'>
        <div className='navbar-items'>
          {HeaderLinks}
        </div>
      </div>
    </div>
  )
}

export default Navbar