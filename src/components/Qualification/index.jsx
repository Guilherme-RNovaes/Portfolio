import { useState } from 'react'

import { IoIosSchool, IoMdCode } from "react-icons/io";
import './styles.css'
import Modal from '../Modal';

function Qualification() {
  const [toogleState, setToogleState] = useState(1);
  
  const toogleTab = (index) => {
    setToogleState(index)
  }

  const [modalState, setModalState] = useState(1);

  const modalTab = (index) => {
    setModalState(index)
  }

  function handleClick(e) {
    e.preventDefault();
    modalTab(1)
  }

  return (
    <section className="qualification-container">
        <h1 className="qualification-title">Qualificações</h1>
        <div className="qualification-tabs">
            <div 
                className={
                    toogleState === 1
                    ? 'qualification-tab-active'
                    : 'qualification-tab'
                }
                onClick={() => toogleTab(1)}
            >
                <IoIosSchool size={25} />
                <h2>Educação</h2>
            </div>
            <div 
                className={
                    toogleState === 2
                    ? 'qualification-tab-active'
                    : 'qualification-tab'
                }
                onClick={() => toogleTab(2)}
            >
                <IoMdCode size={25} />  
                <h2>Experiência</h2>
            </div>
        </div>
        <div 
            className={
                toogleState === 1
                ? "qualification-area-active"
                : 'qualification-area'
            }
        >
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
        <div 
            className={
                toogleState === 2
                ? "qualification-area-active"
                : 'qualification-area'
            }
        >
            <div className="qualifications left">
                <div className="qualification-items">
                    <div 
                        className="qualification-content"
                        onClick={() => modalTab(2)}
                    >
                        <h3>Atendente Telemarketing</h3>
                        <p>CPFL Atende</p>
                        <p>2022 - Atual</p>
                    </div>
                    <div className={
                            modalState === 2 
                            ? 'modal-active' 
                            : 'modal'
                        }
                    >
                        <Modal
                            event={handleClick}
                            close='X'
                            title='Atendente Telemarketing Receptivo'
                            period='2022 - Atual'
                            obs='Trabalhei durant'
                        />
                    </div>
                </div>
                <div className="qualification-items">
                    <div 
                        className="qualification-content"
                        onClick={() => modalTab(3)}
                    >
                        <h3>Auxiliar Administrativo</h3>
                        <p>MEI - Welmax Construtora</p>
                        <p>2019 - 2022</p>
                    </div>
                    <div className={
                            modalState === 3 
                            ? 'modal-active' 
                            : 'modal'
                        }
                    >
                        <Modal
                            event={handleClick}
                            close='X'
                            title='Auxiliar Administrativo'
                            period='2019 - 2022'
                            obs='Trabalhei durant'
                        />
                    </div>
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
            </div>
            <div className="qualifications right">
                <div className="qualification-items">
                    <div 
                        className="qualification-content"
                        onClick={() => modalTab(4)}
                    >
                        <h3>Analista de Suporte Técnico</h3>
                        <p>MEI - Primax Online</p>
                        <p>2019 - 2022</p>
                    </div>  
                    <div className={
                            modalState === 4 
                            ? 'modal-active' 
                            : 'modal'
                        }
                    >
                        <Modal
                            event={handleClick}
                            close='X'
                            title='Analista de Suporte Técnico'
                            period='2019 - 2022'
                            obs='Trabalhei durant'
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification