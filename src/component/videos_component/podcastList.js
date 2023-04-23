import {useEffect, useState} from "react";
import {VideoCard} from "../videoCard";

export const PodcastList = ()=>{
    const [video, setVideo] = useState([])
    const FetchData = async () => {
        try{
            fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCPxMZIFE856tbTfdkdjzTSQ&order=viewCount&key=AIzaSyAr_cvrEVsd0feEZJI8ejNjhq8lQbO4mUA").then((result) => {
                return result.json()
            }).then((data) => {
                setVideo(data.items)
            })
        }
        catch (e){
            console.log(e)
        }
    }
    useEffect(() => {
        FetchData()
    }, [])
    return <div className="header-left">
        <h1  className="small-bold-text">TRENDING</h1>
        <h2>BEST PODCAST</h2>
        <div className="row">
            {
                !video?<div>Loding</div>:
                video.map((data) => {
                    return <VideoCard snippet={data.snippet}></VideoCard>
                })
            }
        </div>
    </div>
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
}