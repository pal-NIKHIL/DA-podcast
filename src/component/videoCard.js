import { Link } from "react-router-dom";
import "../index.css";
export const VideoCard = ({ snippet }) => {
  console.log("nikhil",snippet)
  return (
    <Link to={'/Audioplayer'} className="maincard" style={{textDecoration:"none"}}>
      <div id="movie-container">
        <div className="movie-card">
          <img src={snippet.images[0].url}/>
            <div className="card__details">
              <div className="name m-2">{snippet.name.slice(0,30)}</div>
              <button className="secondary-button m-2">Read more</button>
            </div>
        </div>
      </div>
    </Link>
  );
};

