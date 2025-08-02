import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Resume from '../pages/Resume'
import Portfolio from '../pages/Portfolio'
import Blog from '../pages/Blog'
import Certificates from '../pages/Certificates'

const MainLayout = () => {
    return (
        <div>
            <Home />
            <About />
            <Resume />
            <Portfolio />
            <Certificates />
            <Blog />
            <Contact />
        </div>
    )
}

export default MainLayout
