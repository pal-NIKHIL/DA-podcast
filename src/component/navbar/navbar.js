import { useContext } from "react";
import { AuthContext } from "../../App";
import "../../index.css";
import Mainlogo from "../../assest/mainLogo.png";
import { MenuItem } from "../MenuItem";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);
  const logoUrl =
    "https://img.freepik.com/premium-vector/podcast-flat-icon_180786-8.jpg?w=2000";
  return (
    <nav>
      <div className="container main-nav flex">
        <a href="#" className="company-logo">
          <img src="https://cdn.dribbble.com/users/250315/screenshots/11437914/media/24511d2620645ea2e8bdf6c79a2dbcd5.gif" />
        </a>
        <div className="nav-links">
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
        {isLoggedIn ? (
          <div className="">
            <h2>Welcome</h2>
          </div>
        ) : (
          <div className="nav-links">
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
      </div>
    </nav>
  );
};
