import Cards from '../Cards'

// import FirstCard from '../../components/Cards/img/taskList/ProjectImg.jpeg'

import './styles.css'

function Projects() {
  return (
    <main className='projects-container' id='projetos'>
      <h1>Meus Projetos</h1>
      <section className='projects-area'>
        <Cards 
          title='' 
          info=''
          tech=''
          link=''
          img='' 
          // title='Task List' 
          // info='1'
          // tech='React - Node - Javascript - HTML - CSS - AxiosAPI'
          // link='https://my-task-list-xi.vercel.app/'
          // img={FirstCard}
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