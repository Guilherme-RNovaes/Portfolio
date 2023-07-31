import Typewriter from 'typewriter-effect';
import Button from '../Button';

// import Perfil from '../../img/Profile-Picture.svg'
import './styles.css'
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';

const Cv = "https://www.canva.com/design/DAFPb_DdYns/view"

function Home() {
  return (
    <main className='main-container' id='home'>
        <section className="main-info">
            <div className='main-img'>
                <img src='https://github.com/Guilherme-RNovaes.png' alt="foto de perfil" />
            </div> 
            <p className='main-hello'>Olá, eu sou</p>
            <h1><span>Guilherme Novaes</span></h1>
            <h2>
                <Typewriter
                    options={{
                        strings: [
                            '<span style="color: var(--text-color);">Desenvolvedor</span> Full Stack',
                            '<span style="color: var(--text-color);">Desenvolvedor</span> React',
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h2>
            {/* <p>Veja um pouco dos meus projetos.</p> */}
            <div className='contact-area'>
                <a href="https://github.com/Guilherme-RNovaes" target="_blank" rel="noreferrer"><AiOutlineGithub size={25} /></a>
                <a href="https://www.linkedin.com/in/guilherme-r-novaes/" target="_blank" rel="noreferrer"><AiOutlineLinkedin size={25} /></a>
                <a href="https://api.whatsapp.com/send?phone=5516988448896&text=Ol%C3%A1,%20Guilherme!https://www.instagram.com/gr.novaes/" target="_blank" rel="noreferrer"><AiOutlineWhatsApp size={25} /></a>
                <a href="https://www.instagram.com/gr.novaes/" target="_blank" rel="noreferrer"><AiOutlineInstagram size={25} /></a>
            </div>
            <div className='main-button-area'>
                {/* <a href="#projetos">
                    <Button content='Veja meu trabalho' sty='1' />
                </a> */}
                <a href={Cv} target='blank'>
                    <Button content='Download CV' sty='2' />
                </a>
            </div>
        </section>
        {/* <section className="main-img">
            <div className='main-img'>
                <img src='https://github.com/Guilherme-RNovaes.png' alt="foto de perfil" />
            </div> 
        </section> */}
    </main>
  )
}

export default Home