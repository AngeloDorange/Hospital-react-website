import React, {useEffect} from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'
import './serv.css'
import Img1 from '../../assets/heart.svg'
import Img2 from '../../assets/acces.svg'
import Img3 from '../../assets/medkit.svg'

const Service = () => {
  useEffect (() => {
    Aos.init({ duration: 2000 });
}, [])
  return (
    <section className="service" id="">
      <div className="max-width">
      <div className="cards">

<div className="card" data-aos="fade-down" data-aos-delay="800">
  <div className="img">
    <img src={Img1} alt="" />
  </div>
  <h1>Diabetes</h1>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus cumque quo at nisi eaque debitis.</p>
  <div className="more">
    <a className="btn btn-primary" href="#">Read More</a>
  </div>
</div>

<div className="card" data-aos="fade-down" data-aos-delay="900">
  <div className="img">
    <img src={Img3} alt="" />
  </div>
  <h1>Obstetrics</h1>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus cumque quo at nisi eaque debitis.</p>
  <div className="more">
    <a className="btn btn-primary" href="#">Read More</a>
  </div>
</div>

<div className="card" data-aos="fade-down" data-aos-delay="1100">
  <div className="img">
    <img src={Img2} alt="" />
  </div>
  <h1>Medical Oncology</h1>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus cumque quo at nisi eaque debitis.</p>
  <div className="more">
    <a className="btn btn-primary" href="#">Read More</a>
  </div>
</div>

</div>
      </div>
    </section>
  )
}

export default Service
