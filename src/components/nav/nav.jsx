import React, {useEffect, useRef} from 'react'
import {useState} from 'react'
import { gsap } from "gsap";
import './nav.css'
import Log1 from '../../assets/medical.svg'
import Bar from '../../assets/bars.svg'



const Navigation = () =>{

      // store a reference to the box div
  
  const nav = useRef();

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.to("label", { rotationX: "360", autoAlpha: 1,  ease: 1, duration: 1.30, stagger: 1.5 }, "+=0.10");
  });
     
  const [activeNav, setActiveNav] = useState('#')

  const [toggleMenu, setToggleMenu] = useState(false);
  const smallScreen = () => {
    setToggleMenu(!toggleMenu);
  }
  useEffect(() => {

    const changeWidth = () => {
      //setLargeur(window.innerWidth);

      if(window.innerWidth > 1024){
        setToggleMenu(false);
      }
    }

    window.addEventListener('resize', changeWidth);

    return () => {
      window.addEventListener('remove', changeWidth);
    }
  }, [])

    return (
        <nav>

          <div className="logo">
            <label>Medi<span><img src={Log1} alt="" /></span>Care</label>
          </div>

          {toggleMenu && (
             <ul className="navigation">
             <li><a className="active" href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Home</a></li>
             <li><a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a></li>
             <li><a href="#service" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>Services</a></li>
             <li><a href="#team" onClick={() => setActiveNav('#team')} className={activeNav === '#team' ? 'active' : ''} >Profile</a></li>
             <li><a href="#blog" onClick={() => setActiveNav('#blog')} className={activeNav === '#blog' ? 'active' : ''}>Blog</a></li>
             <li><a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact</a></li>
           </ul>
          )}


          <button onClick={smallScreen}><img src={Bar} alt="" /></button>
        </nav>
    )
}

export default Navigation