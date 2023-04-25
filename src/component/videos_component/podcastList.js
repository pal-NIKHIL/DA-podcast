import { useEffect, useState } from "react";
import { VideoCard } from "../videoCard";
export const PodcastList = () => {
    const clientsecret="62d5362cb81d48e19dfea53914aa73d0"
    const clienId="4d0375737d3c4524ab8dbd0870baddd6"
    const searchInput = "podcast"
    const [accessToken, setAccessToken] = useState("")
    const [albums, setAlbums] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        var authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + clienId + '&client_secret=' + clientsecret
        }
        fetch('https://accounts.spotify.com/api/token', authParameters)
            .then(result => result.json())
            .then(data => {
                setAccessToken(data.access_token)
            })
    }, [])

    useEffect(() => {
        if (accessToken) {
            search()
        }
    }, [accessToken])

    async function search() {
        var artistParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        }
        try {
            const response = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', artistParameters)
            const data = await response.json()
            const artistID = data.artists.items[0].id
            const albumResponse = await fetch(`https://api.spotify.com/v1/artists/${artistID}/albums?include_groups=album&market=US&limit=50`, artistParameters)
            const albumData = await albumResponse.json()
            setAlbums(albumData.items)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="podcastList">
            <h3>#TRENDING</h3>
            <h2>BEST PODCAST</h2>
            <div className="row">
                {loading ? (
                    <div><h1>Loading</h1></div>
                ) : (
                    albums.map((data, index) => {
                        return (
                            <div key={index}>
                                <VideoCard snippet={data}></VideoCard>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};
