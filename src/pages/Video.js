import {useEffect, useState} from "react";
import {PodcastList} from "../component/videos_component/podcastList";
import {TopPodcast} from "../component/videos_component/TopPodcast";
import {MainPodcast} from "../component/videos_component/MainPodcast";

export const Video = () => {

    return <div className="container">
       <div className="flex2 videoMainSection">
           <MainPodcast/>
           <TopPodcast/>
       </div>
        <PodcastList/>
    </div>
}