import { Link } from "react-router-dom";
export const AudioCard = ({ snippet }) => {
    console.log(snippet)
    console.log(snippet.id);
    return (
        <Link to={`/cards/${snippet.id}`} className="maincard" style={{textDecoration:"none"}}>
            <div id="movie-container">
                <div className="movie-card">
                    <img src={snippet.thumbnail}/>
                    <div className="card__details">
                        <div className="name">{snippet.title.slice(0, 30)}</div>
                        <p>{snippet.publisher.slice(0, 20)}</p>
                        <button className="secondary-button">Read more</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};
