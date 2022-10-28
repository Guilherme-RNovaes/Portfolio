import Typewriter from 'typewriter-effect';
import Button from '../Button';

import Perfil from '../../img/Profile-Picture.png'
import './styles.css'

const Cv = "https://www.canva.com/design/DAFPb_DdYns/view"

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
                <Button content='Veja meu trabalho' tp='1' />
                <a href={Cv} target='_blank'>
                    <Button content='Download CV' tp='2' />
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