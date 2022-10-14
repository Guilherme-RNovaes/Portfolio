import Typewriter from 'typewriter-effect';

import Perfil from '../../img/Profile-Picture.png'
import './styles.css'

function Main() {
    
    const clicou = () => {(
        console.log('tá clicado')
    )}; 

  return (
    <main className='main-container'>
        <section className="main-info">
            <h1>Oi, eu sou o <span>Guilherme</span></h1>
            <h2>
                <Typewriter
                    options={{
                        strings: [
                            '<span style="color: var(--text-color);">Desenvolvedor</span> Front-end jr', 
                            '<span style="color: var(--text-color);">Desenvolvedor</span> React jr'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h2>
            <p>Veja um pouco dos meus projetos.</p>
            <button className='main-button' onClick={clicou}>Veja meu trabalho</button>
        </section>
        <section className="main-img">
            <div>
                <img src={Perfil} alt="foto de perfil" />
            </div> 
        </section>
    </main>
  )
}

export default Main