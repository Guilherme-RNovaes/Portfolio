import React from 'react'
import { IoIosSchool, IoMdCode } from "react-icons/io";
import './styles.css'

function Qualification() {
  return (
    <section className="qualification-container">
        <h1 className="qualification-title">Qualificação</h1>
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
    </section>
  )
}

export default Qualification