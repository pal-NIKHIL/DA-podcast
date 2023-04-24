import { useEffect, useState } from "react";
export const TopPodcast = () => {
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

        search()
    },[])
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

    return (
        <div className="flex3 list Card-Container">
            <h2>Top Playlist</h2>
            <hr color={"white"}/>
            {albums.map((album, index) => (
                <div className="flex mb-3" key={index}>
                    <h3 className="m-2">{index + 1}</h3>
                    <img src={album.images[1].url} style={{ height: 80, borderRadius: "50%" }} />
                    <div className="flex3 ml-3">
                        <h6>{album.name.slice(0, 25)}</h6>
                        <a href={album.external_urls.spotify} target="_blank" rel="noreferrer">
                            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/991px-Spotify_icon.svg.png"} width="24" height="24" alt="Spotify Icon" />
                        </a>
                    </div>
                </div>
            ))}
        </div>

    );
};
