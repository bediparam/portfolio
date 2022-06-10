import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logoTitle from '../../assets/images/logo-s.png'
import AnimatedLetter from '../AnimatedLetters'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = "aram".split("");
  const jobArray = "Software Developer".split("");

  useEffect( () => {
    setTimeout( () => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={logoTitle} alt="developer" />
          <AnimatedLetter
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetter
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2> Full Stack Developer / Generalist / Gamer </h2>
        <Link to="/contact" className="flat-button">
          Contact me
        </Link>
      </div>
    </div>
  )
}

export default Home
