import "./styles.css"

function Button({ content, style }) {
  return (
    <div>
        <button className={`main-button-${style}`}>{content}</button>
    </div>
  )
}

export default Button