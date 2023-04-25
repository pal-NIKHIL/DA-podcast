import {useEffect, useState} from "react";
import "../../index.css";
import hamburger_icon from "../../assest/hamburger_icon.png"
import {MenuItem} from "../MenuItem";
import {Link, useLocation} from "react-router-dom";
import {auth} from "../../firebase";

export const Navbar = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location=useLocation()
  useEffect(() => {
    setMenuOpen(false)
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is logged in
        setUser(authUser);
      } else {
        // User is logged out
        setUser(null);
      }
    });

    return unsubscribe;
  }, [location]);
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="container main-nav flex">
        <Link to="/" className="company-logo">
          <img src="https://cdn.dribbble.com/users/250315/screenshots/11437914/media/24511d2620645ea2e8bdf6c79a2dbcd5.gif" />
        </Link>
        <div className="nav-links" id={menuOpen ? 'active' : ''}>
          <ul className="flex header-links">
            {MenuItem.map(({ title, url }, index) => {
              return (
                  <li key={index}>
                    <Link to={url} className="hover-links">
                      {title}
                    </Link>
                  </li>
              );
            })}
          </ul>
        </div>
        {user!==null ? (
            <div className="nav-links">
              <ul className="flex">
                <li>
                  <button className="secondary-button">Welcome</button>
                </li>
              </ul>
            </div>
        ) : (
            <div className="nav-links" id={menuOpen ? 'active' : ''}>
              <ul className="flex">
                <li>
                  <Link to="/login" className="hover-links primary-button">
                    Log in
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="hover-links secondary-button">
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
        )}
        <div>
          <img onClick={handleMenuClick} src={hamburger_icon} className="nav-toogle hover-links" style={{width:40}}/>
        </div>
      </div>
    </nav>
  );
};
