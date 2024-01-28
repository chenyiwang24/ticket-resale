import backroundVideo from '../assets/backgroundvideo.mp4';
import './HomeAfter.css'
import Navbar from './NavBar';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'

function HomeAfter() {
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
                <h1 className='title'>Seize every <br /> Oppurtunity, No <br /> Seat Wasted</h1>
                <p className='description'>Buy and Resell Market</p>
                <div className='buttons1'>
                    <Link to="/login" className='l'>
                        <button className='Login'>Login</button>
                     </Link>
                    <Link to="/signup" className='l'>
                        <button className='SignUp'>Sign Up</button>
                    </Link>
                </div>
                <div><SearchBar onSearch={handleSearch} /></div>
                
            </div>
            </div>
            <div className='mid-container'>
                <h2 className='text-1'>Today's offers</h2>
                <div className='offers'>
                    <div className='offer'>
                        <img src={img1} alt="" />
                        <h4 className='title1'>New AAdvantage® updates</h4>
                        <p className='desc1'>Learn about new ways to redeem and get rewarded, plus other exclusive program benefits</p>
                    </div>
                    <div className='offer'>
                        <img src={img2} alt="" />
                        <h4 className='title1'>Dream your way to status</h4>
                        <p className='desc1'>Reach status and Loyalty Point Rewards faster with AAdvantage Hotels™ stays</p>
                    </div>
                    <div className='offer'>
                        <img src={img3} alt="" />
                        <h4 className='title1'>Relax before the runway</h4>
                        <p className='desc1'>Get access to more than 100 Admirals Club® lounges and partner lounges worldwide</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeAfter;