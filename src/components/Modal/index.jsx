import './styles.css'

function Modal({ close, title, period, text, event, listItem1, listItem2, listItem3, listItem4}) {
  return (
    <div className='modal-container'>
        <div className='modal-content'>
          <div className='modal-close' onClick={event}>
            {close}
          </div>
          <div className='modal-header'>
            <h2>{title}</h2>
            <h4>{period}</h4>
          </div>
          <section className="modal-content-infos">
            <div className="modal-text">
              <p>{text}</p>
            </div>
            <div className="modal-list">
              <ul>
                <li>{listItem1}</li>
                <li>{listItem2}</li>
                <li>{listItem3}</li>
                <li>{listItem4}</li>
              </ul>
            </div>
          </section>
        </div>
    </div>
  )
}

export default Modal