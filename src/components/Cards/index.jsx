import Button from "../Button"
// import { BiLink } from "react-icons/bi";

import "./styles.css"

function Cards({ title, info, tech, link, img }) {
  if (img === '' || title === ''|| info === '' || tech === '' || link === '') {
    return(
      <h3 className="no-img">Em desenvolvimento...</h3>
    )
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
                        <Button content='Visitar' sty='3' /> 
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards