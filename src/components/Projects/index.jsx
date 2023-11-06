import Cards from '../Cards'

import FirstCard from '../../components/Cards/img/taskList/ProjectImg.jpeg'

import './styles.css'

function Projects() {
  return (
    <main className='projects-container' id='projetos'>
      <h1>Meus Projetos</h1>
      <section className='projects-area'>
        <Cards 
          title='Task List' 
          info='Lista de tarefas feita em ReactJs'
          tech='ReactJs - Javascript - HTML - CSS - Axios'
          link='https://my-task-list-xi.vercel.app/'
          img={FirstCard}
        />
        <Cards 
          title=''
          info=''
          tech=''
          link=''
          img='' 
        />
        <Cards 
          title='' 
          info=''
          tech=''
          link=''
          img='' 
        />
      </section>
      
    </main> 
  )
}

export default Projects