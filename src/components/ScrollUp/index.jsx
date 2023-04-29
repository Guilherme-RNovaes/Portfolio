import { MdKeyboardArrowUp } from "react-icons/md";
import './styles.css'

function ScrollUp() {

  window.addEventListener('scroll', function() {
    const scrollUp = document.querySelector('.scroll-up');
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        scrollUp.classList.add('max-scroll');
    }
    else scrollUp.classList.remove('max-scroll')
  })

  return (
    <a href="#home" className="scroll-up">
        <i>
            <MdKeyboardArrowUp size={35}/>
        </i>
    </a>
  )
}

export default ScrollUp