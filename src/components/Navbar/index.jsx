import { useState, useEffect, useMemo } from 'react'
import { RiCodeSSlashFill, RiContactsBookFill, RiHomeFill, RiToolsFill, RiTrophyFill, RiUser3Fill } from 'react-icons/ri'
import './styles.css'


function Navbar() {
  const HeaderList = useMemo(() => [
    { id: 1, urlName: 'Home', ico: <RiHomeFill />, url: '#home' },
    { id: 2, urlName: 'Sobre mim', ico: <RiUser3Fill />, url: '#sobre' },
    { id: 3, urlName: 'Skills', ico: <RiCodeSSlashFill />, url: '#skills' },
    { id: 4, urlName: 'Qualificação', ico: <RiTrophyFill />, url: '#qualificacao' },
    { id: 5, urlName: 'Projetos', ico: <RiToolsFill />, url: '#projetos' },
    { id: 6, urlName: 'Contato', ico: <RiContactsBookFill />, url: '#contato' }
  ], [])

  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    // Função para verificar a posição do scroll e atualizar o link ativo na navbar
    const handleScroll = () => {
      const sections = HeaderList.map(item => document.getElementById(item.url.slice(1))); // Obtém as seções usando o URL das props
      const scrollPosition = window.scrollY + 100; // Adicione um offset para melhorar a precisão da mudança

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveLink(HeaderList[index].url); // Atualiza o link ativo com o URL da seção correspondente
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Remova o event listener quando o componente for desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [HeaderList]);
  
    const HeaderLinks = HeaderList.map((props) => 
      <div key={props.id}>
        <a 
          href={props.url}
          // onClick={() => setActiveLink(props.url)} 
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