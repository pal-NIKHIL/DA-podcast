import '../index.css'
import Mainlogo from "../assest/mainLogo.png"
export const Navbar = ()=>{
    const logoUrl = "https://img.freepik.com/premium-vector/podcast-flat-icon_180786-8.jpg?w=2000"
    return <nav>
        <div className="container main-nav flex">
            <a href="#" className="company-logo">
                <img src="https://cdn.dribbble.com/users/250315/screenshots/11437914/media/24511d2620645ea2e8bdf6c79a2dbcd5.gif"/>
            </a>
            <div className="nav-links">
                <ul className="flex header-links">
                    <li><a href="#" className="hover-links">Product</a></li>
                    <li><a href="#" className="hover-links">Audio</a></li>
                    <li><a href="#" className="hover-links">Video</a></li>
                    <li><a href="#" className="hover-links">Trending</a></li>
                </ul>
            </div>
            <div className="nav-links">
                <ul className="flex">
                    <li><a href="#" className="hover-links primary-button">Log in</a></li>
                    <li><a href="#" className="hover-links secondary-button">Sign up</a></li>
                </ul>
            </div>
        </div>
    </nav>
}