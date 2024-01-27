import backroundVideo from '../assets/backgroundvideo.mp4';
import './Home.css'
import Navbar from './NavBar';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'

function Home() {
    const handleSearch = (query) => {
        // Perform the search logic here and update the searchResults state
        // For this example, let's just log the search query to the console
        console.log('Searching for:', query);
      };
    return (
        <div>
            <Navbar />
            <video className="video-backg" autoPlay muted loop>
                <source src={backroundVideo} type="video/mp4" />
            </video>
            <div className="overlay">
            <div className="content">
                <h1 className='title'>Elevate Your <br /> Journey, Reclaim <br /> the Skies</h1>
                <p className='description'>Buy and Resell Market</p>
                <div className='buttons'>
                    <Link to="/login" className='l'>
                        <button className='Login'>Login</button>
                     </Link>
                    <Link to="/signup" className='l'>
                        <button className='SignUp'>Sign Up</button>
                    </Link>
                </div>
                <SearchBar onSearch={handleSearch} />
            </div>
            
            </div>
            
        </div>
    );
}

export default Home;