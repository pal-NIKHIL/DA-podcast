import AppleLogo from "../assest/apple-podcast.png"
import GoogleLogo from "../assest/Google-Podcast-Logo.png"
import SpotifiyLogo from "../assest/Spotify_Logo.png"
import YoutubeLogo from "../assest/YouTube-Logo.png"

export const Footer = () => {
    return <section className="companies-section">
        <div className="container">
            <div className="company-motto small-bold-text">Top Podcast</div>
            <div className="logos flex">
                <img src={YoutubeLogo} alt="YoutubeLogo"/>
                <img src={GoogleLogo} alt="google logo"/>
                <img src={SpotifiyLogo} alt="Spotify logo"/>
                <img src={AppleLogo} alt="apple logo"/>
            </div>
        </div>
    </section>
}