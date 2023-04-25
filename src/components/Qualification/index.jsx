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
    <section className="qualification-container" id='qualificacao'>
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
                    <div className="qualification-content">
                        <h3>Análise e Dev de sistemas</h3>
                        <p>Anhanguera</p>
                        <h4>2023 - Atual</h4>
                    </div>
                </div>
                <div className="qualification-items">
                    <div className="qualification-content">
                        <h3>Técnico em Administração</h3>
                        <p>Etec</p>
                        <h4>2016 - 2018</h4>
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
                <div className="qualification-timeline">
                    <div className="toogle"></div>
                    <div className="line"></div>
                </div>
            </div>
            <div className="qualifications right">
                <div className="qualification-items">
                    <div className="qualification-content">
                        <h3>Arquitetura e Urbanismo</h3>
                        <p>Unip</p>
                        <h4>2019 - 2022</h4>
                    </div>
                </div>
                <div className="qualification-items">
                    <div className="qualification-content">
                        <h3>Ensino médio</h3>
                        <p>Etec</p>
                        <h4>2016 - 2018</h4>
                    </div>
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
                        <h4>2022 - Atual</h4>
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
                            text='Trabalho a pouco mais de 1 ano na empresa CPFL Atende como Atendente de Telemarketing Receptivo, executando funções como:'
                            listItem1='Suporte ao cliente no call center'
                            listItem2='Registro de informações e serviços no sistema'
                            listItem3='Resolução de problemas'
                            listItem4='Cadastro e alteração cadastral'
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
                        <h4>2019 - 2022</h4>
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
                            text='Prestei serviço durante 3 anos para a empresa Welmax Construtora como Auxiliar administrativo, executando funções como:'
                            listItem1='Emissão e controle das certidões da empresa'
                            listItem2='Resolução de problemas'
                            listItem3='Criação de planilhas para controle'
                            listItem4='Atendimento receptivo ao cliente'
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
                        <h4>2019 - 2022</h4>
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
                            text='Prestei serviço durante 3 anos para a empresa Primax Online como Analista de Suporte Técnico, executando funções como:'
                            listItem1='Suporte ao cliente através de chat e telefone'
                            listItem2='Resolução de problemas'
                            listItem3='Cadastro e alteração cadastral'
                            listItem4='Registro de informações e bugs do sistema'
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification