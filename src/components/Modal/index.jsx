import './styles.css'

function Modal({ close, title, period, obs, event}) {
  return (
    <div className='modal-container'>
        <div className='modal-content'>
          <div className='modal-close' onClick={event}>
            {close}
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