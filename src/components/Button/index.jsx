import "./styles.css"

function Button({ content, sty }) {
  return (
    <div>
        <button className={`main-button-${sty}`}><p>{content}</p></button>
    </div>
  )
}

export default Button