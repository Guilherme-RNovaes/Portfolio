import { useState } from 'react';
import { DiBootstrap, DiCss3, DiHtml5, DiJavascript, DiMysql, DiReact } from "react-icons/di";
import { SiTailwindcss, SiNodedotjs, SiMongodb, SiDocker } from "react-icons/si"
import { BsCheck2Circle } from "react-icons/bs"

import './styles.css'

function Skills() {

  const FrontList = [
    { id: 1, ico: <DiHtml5 size={30} />, skillName: 'Html', skillLevel: 'Avançado' },
    { id: 2, ico: <DiCss3 size={30} />, skillName: 'Css', skillLevel: 'Avançado' },
    { id: 3, ico: <DiBootstrap size={30} />, skillName: 'Bootstrap', skillLevel: 'Iniciante' },
    { id: 4, ico: <SiTailwindcss size={30} />, skillName: 'Tailwind', skillLevel: 'Iniciante' },
    { id: 5, ico: <DiJavascript size={30} />, skillName: 'Javascript', skillLevel: 'Avançado' },
    { id: 6, ico: <DiReact size={30} />, skillName: 'React', skillLevel: 'Avançado' }

  ]

  const BackList = [
    { id: 1, ico: <SiNodedotjs size={30} />, skillName: 'NodeJs', skillLevel: 'Iniciante' },
    { id: 2, ico: <SiMongodb size={30} />, skillName: 'MongoDb', skillLevel: 'Iniciante' },
    { id: 3, ico: <DiMysql size={30} />, skillName: 'MySql', skillLevel: 'Iniciante' },
    { id: 4, ico: <SiDocker size={30} />, skillName: 'Docker', skillLevel: 'Iniciante' }
  ]

  const PersonalList = [
    { id: 1, ico: <BsCheck2Circle size={30} />, skillName: 'Proativo' },
    { id: 2, ico: <BsCheck2Circle size={30} />, skillName: 'Flexível' },
    { id: 3, ico: <BsCheck2Circle size={30} />, skillName: 'Criativo' },
    { id: 4, ico: <BsCheck2Circle size={30} />, skillName: 'Dinâmico' },
    { id: 5, ico: <BsCheck2Circle size={30} />, skillName: 'Resiliente' },
    { id: 6, ico: <BsCheck2Circle size={30} />, skillName: 'Organizado' }
  ]
  
  const FrontSkillsList = FrontList.map((props) =>
    <div className='skill-list'>
        <i>{props.ico}</i>
        <div className="skill-title">
            <h3>{props.skillName}</h3>
            <p>{props.skillLevel}</p>
        </div>
    </div>
  ) 
  
  const BackSkillsList = BackList.map((props) =>
    <div className='skill-list'>
        <i>{props.ico}</i>
        <div className="skill-title">
            <h3>{props.skillName}</h3>
            <p>{props.skillLevel}</p>
        </div>
    </div>
  ) 
  
  const PersonalSkillsList = PersonalList.map((props) =>
    <div className='skill-list'>
        <i>{props.ico}</i>
        <div className="skill-title">
            <h3>{props.skillName}</h3>
            <p>{props.skillLevel}</p>
        </div>
    </div>
  ) 

  const [toogleState, setToogleState] = useState(1);
  
  const toogleTab = (index) => {
    setToogleState(index)
  }

  return (
    <section className="skills-container" id='skills'>
        <h1>Minhas Skills</h1>
        <section className="skills-tabs">
            <div 
                className={
                    toogleState === 1
                    ? 'skills-tab-active'
                    : 'skills-tab'
                }
                onClick={() => toogleTab(1)}
            >
                <h2>Front-end</h2>
            </div>
            <div 
                className={
                    toogleState === 2
                    ? 'skills-tab-active'
                    : 'skills-tab'
                }
                onClick={() => toogleTab(2)}
            >
                <h2>Back-end</h2>
            </div>
            <div 
                className={
                    toogleState === 3
                    ? 'skills-tab-active'
                    : 'skills-tab'
                }
                onClick={() => toogleTab(3)}
            >
                <h2>Pessoais</h2>
            </div>
        </section>
        <section className="skills">
            <div 
                className={
                    toogleState === 1
                    ? 'skills-content-active'
                    : 'skills-content'
                }
            >
                {FrontSkillsList}
            </div>
            <div 
                className={
                    toogleState === 2
                    ? 'skills-content-active'
                    : 'skills-content'
                }
            >
                {BackSkillsList}
            </div>
            <div 
                className={
                    toogleState === 3
                    ? 'skills-content-active'
                    : 'skills-content'
                }
            >
                {PersonalSkillsList}
            </div>
        </section>
    </section>
  )
}

export default Skills