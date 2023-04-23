import { useEffect, useState } from "react";
import { VideoCard } from "../videoCard";
import axios from "axios";
export const PodcastList = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/best-podcasts")
      .then((response) => setVideo(response.data.podcasts))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="header-left">
      <h1 className="small-bold-text">TRENDING</h1>
      <h2>BEST PODCAST</h2>
      <div className="row">
        {!video ? (
          <div>Loding</div>
        ) : (
          video.map((data) => {
            return (
              <div key={data.id}>
                <VideoCard snippet={data}></VideoCard>;
              </div>
            );
          })
        )}
      </div>
    </div>
  );
  // return <div className="podcastList">
  //     <h1  className="small-bold-text">TRENDING</h1>
  //     <h2>BEST PODCAST</h2>
  //     <div className="row">
  //         <VideoCard />
  //         <VideoCard />
  //         <VideoCard />
  //         <VideoCard />
  //         <VideoCard />
  //         <VideoCard />
  //         <VideoCard />
  //         <VideoCard />
  //         <VideoCard />
  //         <VideoCard />
  //         <VideoCard />
  //         <VideoCard />
  //
  //     </div>
  // </div>
};
