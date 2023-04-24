import "../../index.css"
import {Link} from "react-router-dom";

export const LeftMainSection = () => {
    return <div className="header-left">
        <h1>Listen with Your Ears, See with Your Eyes</h1>
        <p className="small-bold-text2"> Whether you prefer to listen on-the-go or watch for a more immersive experience, our platform has you covered. Discover entertaining and informative content that's perfect for your lifestyle.</p>
        <div className="flex features-header2">
            <Link to="/Podcast" className="hover-links primary-button btn-space">Get Started</Link>
            <Link to="/Podcast" className="hover-links secondary-button btn-space">Top Trending</Link>
        </div>
    </div>
}
