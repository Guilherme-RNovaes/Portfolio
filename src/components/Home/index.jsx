import Typewriter from 'typewriter-effect';

import Perfil from '../../img/Profile-Picture.png'
import './styles.css'

function Home() {
  return (
    <main className='main-container' id='home'>
        <section className="main-info">
            <p className='main-hello'>Olá, eu sou</p>
            <h1><span>Guilherme Novaes</span></h1>
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
            <div className='main-button-area'>
                <button className='main-button-1'>Veja meu trabalho</button>
                <a href='https://www.canva.com/design/DAFPb_DdYns/view' target='_blank'>
                    <button className='main-button-2'>Download CV</button>
                </a>
            </div>
        </section>
        <section className="main-img">
            <div>
                <img src={Perfil} alt="foto de perfil" />
            </div> 
        </section>
    </main>
  )
}

export default Home