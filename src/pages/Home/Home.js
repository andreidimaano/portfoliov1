import About from '../About/About';
import Navbar from '../components/navbar/navbar';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Footer from '../Footer/Footer';
import Headline from '../Headline/Headline';
import Work from '../Work/Work';
import Left from '../components/left/left'
import Right from '../components/right/right'
import './Home.css';

function Home() {
    return (
        <div className="home">
            <Navbar />
            <Left />
            <Right />
            <div className="content">
                <div className="content-container">
                    <Headline />
                    <About />
                    <Experience/>
                    <Work />
                    <Contact />
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Home;