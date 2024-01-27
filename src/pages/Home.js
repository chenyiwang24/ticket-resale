import backroundVideo from '../assets/backgroundvideo.mp4';
import AAIcon from '../assets/AA-icon.png'
import './Home.css'
import Navbar from './NavBar';

function Home() {
    return (
        <div>
            <Navbar />
            <video className="video-bg" autoPlay muted loop>
                <source src={backroundVideo} type="video/mp4" />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1 className='title'>No Seat <br /> Wasted</h1>
                <p className='description'>Buy and Resell Market</p>
                <div className='buttons'>
                    <button>Login</button>
                    <button></button>
                </div>
            </div>

        </div>
    );
}

export default Home;