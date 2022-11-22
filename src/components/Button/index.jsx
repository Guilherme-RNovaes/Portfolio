import "./styles.css"

function Button({ content, sty }) {
  return (
    <div>
        <button className={`main-button-${sty}`}>{content}</button>
    </div>
  )
}

export default Button