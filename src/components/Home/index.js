import { Link } from 'react-router-dom';
import logoTitle from '../../assets/images/logo-s.png';
import './index.scss';

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={logoTitle} alt="developer" />
          aram
          <br />
          Software Developer
        </h1>
        <h2> Full Stack Developer / Generalist / Gamer </h2>
        <Link to='/contact' className='flat-button'>Contact me</Link>
      </div>
    </div>
  )
}

export default Home
