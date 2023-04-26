import { useState } from 'react';

import './styles.css'

function Skills() {
  
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
    </section>
  )
}

export default Skills