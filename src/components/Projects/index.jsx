import Cards from '../Cards'

import './styles.css'

function Projects() {
  return (
    <main className='projects-container' id='projetos'>
      <h1>Meus Projetos</h1>
      <section className='projects-area'>
        <Cards link="https://github.com/" />
      </section>
      
    </main> 
  )
}

export default Projects