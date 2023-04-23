import React from 'react'
import './styles.css'

function Modal({ close, title, period, obs
 }) {

  const [toogleState, setToogleState] = useState(1);
  
  const toogleTab = (index) => {
    setToogleState(index)
  }

  return (
    <div className='modal-container'>
        <div className='modal-content'>
          <div 
            className="modal-close"
            
          >
            X
          </div>
          <div className='modal-header'>
            <h2>{title}</h2>
            <p>{period}</p>
          </div>
          <p>{obs}</p>
        </div>
    </div>
  )
}

export default Modal