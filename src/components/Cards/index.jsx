import Button from "../Button"
import { BiLink } from "react-icons/bi";

import "./styles.css"

function Cards({ title, info, tech, link, img }) {
  if (title == '') {
    <h1>imagem</h1>
  }

  return (
    <div className="card">
        <div className="card-image">
            <img src={img} alt="Imagem do projeto" />
            <div className="card-details">
                <h2>{title}</h2>
                <p>{info}</p>
                <p>{tech}</p>
                <div className="card-more-details">
                    <a href={link}>
                        <Button content='Visitar' style='3' /> 
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards