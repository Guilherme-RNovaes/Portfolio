import "./styles.css"

function Button({ content, tp }) {
  return (
    <div>
        <button className={`main-button-${tp}`}>{content}</button>
    </div>
  )
}

export default Button