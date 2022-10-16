import React, {useEffect} from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'
import './blog.css'
import Blog1 from '../../assets/hero.jpg'
import Blog2 from '../../assets/about.jpg'
import Blog3 from '../../assets/pexels-pixabay-269077.jpg'
import Blog4 from '../../assets/event1.jpg'
import Blog5 from '../../assets/event4.jpg'
import Blog6 from '../../assets/bann.jpg'

const Blog = () => {
    useEffect (() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <section id="blog" className="blog">
            <div className="max-width">
            <div className="container">
                <div className="title">
                    <h1>News and Events</h1>
                </div>

                <div className="items top">
                    <div className="item" data-aos="fade-down" data-aos-delay="800">
                       <div className="img">
                       <a href="#"><img src={Blog1} alt="" /></a>
                       </div>
                        <div className="info">
                            <h2>Featured</h2>
                        </div>
                    </div>

                    <div className="item" data-aos="fade-down" data-aos-delay="900">
                       <div className="img">
                       <a href="#"><img src={Blog2} alt="" /></a>
                       </div>
                        <div className="info">
                            <h2>Featured</h2>
                        </div>
                    </div>

                    <div className="item" data-aos="fade-down" data-aos-delay="1100">
                       <div className="img">
                       <a href="#"><img src={Blog3} alt="" /></a>
                       </div>
                        <div className="info">
                            <h2>Featured</h2>
                        </div>
                    </div>
                   
                </div>

                <div className="items">
                    <div className="item" data-aos="fade-down" data-aos-delay="800">
                       <div className="img">
                       <a href="#"><img src={Blog4} alt="" /></a>
                       </div>
                        <div className="info">
                            <h2>Featured</h2>
                        </div>
                    </div>

                    <div className="item" data-aos="fade-down" data-aos-delay="900">
                       <div className="img">
                       <a href="#"><img src={Blog5} alt="" /></a>
                       </div>
                        <div className="info">
                            <h2>Featured</h2>
                        </div>
                    </div>

                    <div className="item" data-aos="fade-down" data-aos-delay="1100">
                       <div className="img">
                       <a href="#"><img src={Blog6} alt="" /></a>
                       </div>
                        <div className="info">
                            <h2>Featured</h2>
                        </div>
                    </div>
                   
                </div>
            </div>
            </div>
        </section>
    )
}

export default Blog
