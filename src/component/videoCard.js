import { Link } from "react-router-dom";
import "../index.css";
export const VideoCard = ({ snippet }) => {
  //const { title, thumbnails, channelTitle } = snippet;
  console.log(snippet.id);
  return (
    <Link to={`/cards/${snippet.id}`}>
      <div className="videocard">
        <div>
          <img src={snippet.thumbnail} />
        </div>
        <div className="flex2">
          <div>
            <h5>{snippet.title}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
};
// export const VideoCard = ()=>{
//     return <div className="videocard">
//         <div>
//             <img src="https://pyxis.nymag.com/v1/imgs/891/a22/7ddd38108845ea8321175185288a3a626e-03-pop-culture-podcasts-new.2x.rsocial.w600.jpg" style={{width:300}}/>
//         </div>
//         <div className="flex2">
//             <img src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj" className="usericon"/>
//             <div>
//                 <h5>NIKHIL PAL</h5>
//             </div>
//         </div>
//     </div>
// }
