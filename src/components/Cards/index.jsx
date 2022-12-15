import Button from "../Button"
// import { BiLink } from "react-icons/bi";

import "./styles.css"

function Cards({ title, info, tech, link, img }) {
  let typeCard = ''
  if (img === '' || title === ''|| info === '' || tech === '' || link === '') {
      typeCard = 'no-img'
      return (
        <h3 className={typeCard}>Em desenvolvimento...</h3>
      )
  } else {
    typeCard = 'card'
  }

  return (
    <div className={typeCard}>
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