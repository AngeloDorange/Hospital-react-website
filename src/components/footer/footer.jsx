import React, {useEffect} from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'
import './footer.css'
import Pay from '../../assets/payment.png'
import Log1 from '../../assets/medical.svg'

const Footer = () => {
  useEffect (() => {
    Aos.init({ duration: 2000 });
}, [])
  return (
    <section className="foot" id="contact">
      <div className="max-width">
      <div className="logo">
      <label>Medi<span><img src={Log1} alt="" /></span>Care</label>
      </div>

      <div className="parts">
        <div className="part1" data-aos="fade-down" data-aos-delay="800">
          <h1>Office Adress</h1>
          <p>Main Road, New-York 1234, Second Ave</p>
          <a className="btn btn-primary" href="#">Get Direction</a>
        </div>

        <div className="part2" data-aos="fade-down" data-aos-delay="900">
          <h1>Online Consultation</h1>
          <p>+1 516 890 6547</p>
          <div className="text">
          <img src={Pay} alt="" />
          </div>
        </div>

        <div className="part3" data-aos="fade-down" data-aos-delay="1100">
          <h1>Email Adress</h1>
          <p>Medicare@gmail.com</p>
          <div className="news">
            <h1>Suscribe for latest news</h1>
            <div className="form">
            <input type="email" name="email" id="" placeholder="Your email" />
            <button className="btn btn-primary">Send</button>
            </div>
          </div>
        </div>

      </div>

      <div className="design">
        <hr />
      <p>Copyright 2022 MediCare. All Rights Reserved. Designed by <span>Angelo Dorange</span></p>
      </div>
      </div>
    </section>
  )
}

export default Footer
