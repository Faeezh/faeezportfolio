import AboutImage from '../../assets/faeez.png'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <p>
                    Hi, my name is Faeez Hartley and I live in Cape Town, South Africa.
                    I'm a self taught full-stack web developer.
                    My top priority is to get your business online the right way,
                    giving you industry-standard design and all the functionality you need to operate smoothly online.
                    Get in touch today with the details of your project let's get started! Check out my resume below!
                </p>
                <h2 className='hskills'>Technical Skills:</h2>
                <div className="skills">
                    <div className='left'>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Javascript</li>
                            <li>ReactJs</li>
                        </ul>
                    </div>
                    <div className='right'>
                        <ul>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MongoDb</li>
                            <li>Photoshop</li>
                        </ul>
                    </div>
                </div>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                
                
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About