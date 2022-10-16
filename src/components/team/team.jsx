import React, {useEffect} from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'
import './team.css'
import Team1 from '../../assets/team1.jpg'
import Team2 from '../../assets/team2.jpg'
import Team3 from '../../assets/team3.jpg'

const Team = () => {
  useEffect (() => {
    Aos.init({ duration: 2000 });
}, [])
  return (
    <section className="team" id="team">
      <div className="max-width">
      <div className="title">
        <h1>Team Doctor's</h1>
      </div>

      <div className="members">

        <div className="content" data-aos="fade-down" data-aos-delay="800">
          <div className="img">
            <img src={Team1} alt="" />
          </div>
          <div className="info">
            <h2>Blane Opera</h2>
            <small>Lorem ipsum dolor sit amet.</small>
            <div className="mor">
              <a className="btn btn-primary" href="#">Read More</a>
            </div>
          </div>
        </div>

        <div className="content" data-aos="fade-down" data-aos-delay="900">
          <div className="img">
            <img src={Team2} alt="" />
          </div>
          <div className="info">
            <h2>Angelo Dorange</h2>
            <small>Lorem ipsum dolor sit amet.</small>
            <div className="mor">
              <a className="btn btn-primary" href="#">Read More</a>
            </div>
          </div>
        </div>

        <div className="content" data-aos="fade-down" data-aos-delay="1100">
          <div className="img">
            <img src={Team3} alt="" />
          </div>
          <div className="info">
            <h2>Blumberg Jane</h2>
            <small>Lorem ipsum dolor sit amet.</small>
            <div className="mor">
              <a className="btn btn-primary" href="#">Read More</a>
            </div>
          </div>
        </div>

      </div>
      </div>
      
    </section>
  )
}

export default Team
