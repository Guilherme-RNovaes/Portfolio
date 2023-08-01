import Typewriter from 'typewriter-effect';
import Button from '../Button';

import './styles.css'
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
import ProfilePicture from '../ProfilePicture';

const Cv = "https://www.canva.com/design/DAFPb_DdYns/view"

function Home() {
  const ContactList = [
    { id: 1, ico: <AiOutlineGithub size={25} />, url: 'https://github.com/Guilherme-RNovaes' },
    { id: 2, ico: <AiOutlineLinkedin size={25} />, url: 'https://www.linkedin.com/in/guilherme-r-novaes/'},
    { id: 3, ico: <AiOutlineInstagram size={25} />, url: 'https://www.instagram.com/gr.novaes/'},
    { id: 4, ico: <AiOutlineWhatsApp size={25} />, url: 'https://api.whatsapp.com/send?phone=5516988448896&text=Ol%C3%A1,%20Guilherme!'},
  ]

  const ContactLinks = ContactList.map((props) =>
    <a key={props.id} href={props.url} target="_blank" rel="noreferrer">{props.ico}</a>
  )

  return (
    <main className='main-container' id='home'>
        <section className="main-info">
            <div className='main-img'>
                <ProfilePicture />
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
            <div className='contact-area'>
                {ContactLinks}
            </div>
            <div className='main-button-area'>
                <a href={Cv} target='blank'>
                    <Button content='Download CV' sty='2' />
                </a>
            </div>
        </section>
    </main>
  )
}

export default Home