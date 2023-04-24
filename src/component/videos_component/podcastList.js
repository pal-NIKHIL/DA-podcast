import { useEffect, useState } from "react";
import { VideoCard } from "../videoCard";
import axios from "axios";
export const PodcastList = () => {
  // const [video, setVideo] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/best-podcasts")
  //     .then((response) => setVideo(response.data.podcasts))
  //     .catch((error) => console.error(error));
  // }, []);
    const clientsecret="62d5362cb81d48e19dfea53914aa73d0"
    const clienId="4d0375737d3c4524ab8dbd0870baddd6"
    const searchInput = "podcast"
    const [accesstoken,setAccessToken]=useState("")
    const [albums,setAlbums]=useState([])
    useEffect(()=>{
        var authParameters= {
            method:'POST',
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            },
            body:'grant_type=client_credentials&client_id='+ clienId + '&client_secret=' +clientsecret
        }
        fetch('https://accounts.spotify.com/api/token',authParameters)
            .then(result=>result.json())
            .then(data=> {
                setAccessToken(data.access_token)
            })
        async  function search(){
            var artistParameters={
                method: 'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':'Bearer ' + accesstoken
                }
            }
            var artistID = await fetch('https://api.spotify.com/v1/search?q='+searchInput+'&type=artist',artistParameters)
                .then(response=>response.json())
                .then(data=>{return data.artists.items[0].id})
            var returnedAlbum =await fetch('https://api.spotify.com/v1/artists/'+artistID+'/albums'+'?include_groups=album&market=US&limit=50',artistParameters)
                .then(response=> {
                    return response.json()
                })
                .then(data=> {
                    setAlbums(data.items)
                })
        }
        search()
    },[])


    return (
    <div className="podcastList">
      <h1 className="small-bold-text">TRENDING</h1>
      <h2>BEST PODCAST</h2>
      <div className="row"> 
        {!albums ? (
          <div>Loding</div>
        ) : (
          albums.map((data,index) => {
            return (
              <div key={index}>
                <VideoCard snippet={data}></VideoCard>;
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
