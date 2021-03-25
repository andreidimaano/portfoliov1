import Navbar from '../components/navbar/navbar'
import './Home.css';
import About from '../About/About'
import Experience from '../Experience/Experience';
import Headline from '../Headline/Headline';

function Home() {
    return (
        <div className="home">
            <Navbar />
            <div className="content">
                <div className="content-container">
                    <Headline />
                    <About />
                    <Experience/>
                </div>
            </div>
        </div>
    );
}

export default Home;