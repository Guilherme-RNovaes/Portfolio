import './styles.css'

function Header() {
  const active = () => {(
    console.log('tá ativado')
  )}

  return (
    <header className='header-container'>
        <a href="#home"><h1>GN</h1></a>
        <div className='header-infos'>
          <a href='#sobre'>Sobre mim</a>
          <a href='#projetos'>Projetos</a>
          <a href='#contato'>contato</a>
        </div>

        <div className="header-hamburguer" onClick={active}>
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