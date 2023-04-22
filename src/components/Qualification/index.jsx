import React from 'react'
import { IoIosSchool, IoMdCode } from "react-icons/io";
import './styles.css'

function Qualification() {
  return (
    <section className="qualification-container">
        <h1 className="qualification-title">Qualificações</h1>
        <div className="qualification-tabs">
            <div className="qualification-tab">
                <IoIosSchool size={25} />
                <h2>Educação</h2>
            </div>
            <div className="qualification-tab">
                <IoMdCode size={25} />  
                <h2>Experiência</h2>
            </div>
        </div>
        <div className="qualification-area">
            <div className="qualifications left">
                <div className="qualification-items">
                    <h3>Análise e Dev de sistemas</h3>
                    <p>Anhanguera</p>
                    <p>2023 - Atual</p>
                </div>
                <div className="qualification-items">
                    <h3>Técnico em Administração</h3>
                    <p>Etec</p>
                    <p>2016 - 2018</p>
                </div>
            </div>
            <div className='qualification-data'>
                <div className="qualification-timeline">
                    <div className="toogle"></div>
                    <div className="line"></div>
                </div>
                <div className="qualification-timeline">
                    <div className="toogle"></div>
                    <div className="line"></div>
                </div>
                <div className="qualification-timeline">
                    <div className="toogle"></div>
                    <div className="line"></div>
                </div>
                <div className="qualification-timeline">
                    <div className="toogle"></div>
                    <div className="line"></div>
                </div>
            </div>
            <div className="qualifications right">
                <div className="qualification-items">
                    <h3>Arquitetura e Urbanismo</h3>
                    <p>Unip</p>
                    <p>2019 - 2022</p>
                </div>
                <div className="qualification-items">
                    <h3>Ensino médio</h3>
                    <p>Etec</p>
                    <p>2016 - 2018</p>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Qualification