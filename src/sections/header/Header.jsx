import { useEffect } from 'react'
import HeaderImage from '../../assets/hero.png'
import data from './data'
import AOS from 'aos'
//import 'aos/dist/aos.css'
import './header.css'
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Header = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait" className='me'/>
        </div>
        <h3 className='name' data-aos="fade-up">I'm Faeez Hartley</h3>
        <h2>
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p  data-aos="fade-up">
        You are a click away from building your dream website or web app. Send me the details of your project for a modern, mobile responsive, highly performant website today!
        </p>
        <div className="header__cta"  data-aos="fade-up">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
       {/* <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>*/}
      </div>
    </header>
  )
}

export default Header