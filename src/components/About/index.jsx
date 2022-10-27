import { useState } from 'react';

import './styles.css'
import { DiBootstrap, DiCss3, DiHtml5, DiJavascript, DiNodejs, DiReact } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si"


function About() {
  return (
    <main className='about-container' id='sobre'>
        <h1 className='about-title'>Sobre Mim</h1>
        <section className='about-container-items'>
            {/* <div className='about-img'>
                <h2>Aqui irá alguma imagem</h2>
            </div> */}
            <div className='about-info'>
                <p>Olá, eu me chamo Guilherme Novaes, tenho 22 anos e estudo desenvolvimento front-end a 1 ano, desenvolvendo projetos particulares e estudando de forma auto didata.</p>
                <p>No momento estou buscando oportunidades de emprego na área, aceito qualquer tipo de desafio e oportunidades. No momento tenho interesse em front-end com ReactJs, tecnologia a qual estou preferindo utilizar em meus atuais projetos por conta de sua facilidade e praticidade no uso de componentes para construção de uma página web.</p>
            </div>
        </section>
        <h1 className='skills-title'>Minhas Skills</h1>
        <section className='skills-container-items'>
            <div className="container-item">
                <DiHtml5 size={100} />
                <h2>HTML</h2>
            </div>
            <div className="container-item">
                <DiCss3 size={100} />
                <h2>CSS</h2>
            </div>
            <div className="container-item">
                <DiJavascript size={100} />
                <h2>JavaScript</h2>
            </div>
            <div className="container-item">
                <DiReact size={100} />
                <h2>React</h2>
            </div>
            <div className="container-item">
                <DiNodejs size={100}/>
                <h2>Nodejs</h2>
            </div>
            <div className="container-item">
                <DiBootstrap size={100}/>
                <h2>Bootstrap</h2>
            </div>
            <div className="container-item">
                <SiTailwindcss size={100}/>
                <h2>Tailwind</h2>
            </div>
        </section>
    </main>
  )
}

export default About