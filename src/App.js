import './App.css';
import Navigation from './components/nav/nav';
import Hero from './components/hero/hero'
import Service from './components/service/serv'
import About from './components/about/about'
import Team from './components/team/team'
import Blog from './components/blog/blog'
import Footer from './components/footer/footer'


function App() {
    return (
        <div className="App">
            <Navigation /> <Hero /> <Service /> <About /> <Team /> <Blog /> <Footer /> 
        </div>
    )
}

export default App;