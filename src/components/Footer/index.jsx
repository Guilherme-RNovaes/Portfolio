import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineWhatsApp } from "react-icons/ai";

import "./styles.css"

function Footer() {
  return (
    <footer className="contato" id='contato'>
        <h1>Guilherme Novaes</h1>
        <div className="contato-social">
            <a href="https://github.com/Guilherme-RNovaes" target="_blank" rel="noreferrer"><AiOutlineGithub size={30} /></a>
            <a href="https://www.instagram.com/gr.novaes/" target="_blank" rel="noreferrer"><AiOutlineLinkedin size={30} /></a>
            <a href="https://api.whatsapp.com/send?phone=5516988448896&text=Ol%C3%A1,%20Guilherme!https://www.instagram.com/gr.novaes/" target="_blank" rel="noreferrer"><AiOutlineWhatsApp size={30} /></a>
            <a href="https://www.instagram.com/gr.novaes/" target="_blank" rel="noreferrer"><AiOutlineInstagram size={30} /></a>
        </div>
    </footer>
  )
}

export default Footer