import Typewriter from 'typewriter-effect';
import Button from '../Button';

import Perfil from '../../img/Profile-Picture.svg'
import './styles.css'

const Cv = "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F4yJIQvEgu2AU51qP3eXknD%2FGuilherme-Novaes---CV%3Fnode-id%3D0%253A1%26t%3DvVJz3UfGEVFwXLEt-1"

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
                <a href="#projetos">
                    <Button content='Veja meu trabalho' sty='1' />
                </a>
                <a href={Cv} target='blank'>
                    <Button content='Download CV' sty='2' />
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