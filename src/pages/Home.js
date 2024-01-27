import backroundVideo from '../assets/backgroundvideo.mp4';
import './Home.css'

function Home() {
    return (
        <div>
            <video className="video-bg" autoPlay muted loop>
            <source src={backroundVideo} type="video/mp4" />
        </video>
        </div>
    );
}

export default Home;
