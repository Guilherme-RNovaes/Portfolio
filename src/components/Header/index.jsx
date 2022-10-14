import './styles.css'

function Header() {
  return (
    <header className='header-container'>
        <h1>GN</h1>
        <div className='header-infos'>
          <a href='#'>Sobre mim</a>
          <a href='#'>Projetos</a>
          <a href='#'>contato</a>
        </div>
    </header>
  )
}

export default Header