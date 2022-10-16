import React, {useEffect} from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'
import './about.css'


const About = () => {
  useEffect (() => {
    Aos.init({ duration: 2000 });
}, [])

  return (
    <section className="about" id="about">
      <div className="max-width">
      <div className="sides">

<div className="left">
  <div className="title">
    <h1>About Us</h1>
 </div>
  
  <div className="content" data-aos="zoom-in-down">
  <div className="text">
    <h1>Who We Are</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus animi quasi recusandae debitis rerum et, illo qui, labore culpa facere voluptatum repellat aperiam sequi dolore in beatae necessitatibus velit. </p> <br />
    <h1>What We Do</h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consequuntur mollitia sequi et sunt non laboriosam aliquam aliquid provident ipsum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel doloribus maxime perferendis quidem soluta, vitae minus voluptatum ad adipisci ab omnis, cum, asperiores harum earum inventore qui quasi veritatis facere.</p>
  </div>
  </div>
  
</div>

<div className="right">
  <div className="title">
    <h1>Book an Appointment</h1>
  </div>
  <div className="form" data-aos="zoom-in-down">
    <form action="#">
      <div className="action">
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" id="" placeholder="Email" />
      </div>
      <div className="action">
      <input type="number" name="number" id="" placeholder="Number Phone" />
      <input type="date" name="" id="" />
      </div>
      <textarea name="message" id="" placeholder="Special Request"></textarea>

      <div className="book">
       <button className="btn btn-primary">Book Now</button>
      </div>
    </form>
  </div>
</div>
</div>
      </div>
    </section>
  )
}

export default About
