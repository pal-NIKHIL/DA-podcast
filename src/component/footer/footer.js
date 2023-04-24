import AppleLogo from "../../assest/apple-podcast.png"
import GoogleLogo from "../../assest/Google-Podcast-Logo.png"
import SpotifiyLogo from "../../assest/Spotify_Logo.png"
import YoutubeLogo from "../../assest/YouTube-Logo.png"
import Spotify2 from "../../assest/spotify2.png"
import NetflixLogo from "../../assest/NetflixLogo.png"
import GooglePodcast from "../../assest/GooglePodcast.png"
export const Footer = () => {
    return <section className="companies-section">
        <div className="container">
            <h3 className="company-motto small-bold-text2">Top Podcast</h3>
            <div className="logos flex">
                <img src={YoutubeLogo} alt="YoutubeLogo"/>
                <div>
                    <img src={GoogleLogo} alt="google logo"/>
                    <img src={GooglePodcast} alt="google Podcast"/>
                </div>
                <img src={AppleLogo} alt="apple logo"/>
                <img src={Spotify2} alt="spotify logo"/>
                <img src={NetflixLogo} alt="Netflix logo"/>
            </div>
        </div>
    </section>
}