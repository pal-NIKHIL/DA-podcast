export const TopPodcast = () => {
    const ArtistCard = () => {
        return <div className="flex">
            <h3>01</h3>
            <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png"
                 style={{height: 80}}/>
            <div className="flex3">
                <h6>Nikhil Pal</h6>
                <p className="small-bold-text">View:30000</p>
            </div>
            <a className="tertiary-button" style={{color:"black"}}>Follow</a>
        </div>
    }
    return <div className="flex3 list Card-Container">
        <h2>Top Artist</h2>
        <hr/>
        <ArtistCard/>
        <ArtistCard/>
        <ArtistCard/>
        <ArtistCard/>
        <ArtistCard/>
        <ArtistCard/>
        <ArtistCard/>
        <ArtistCard/>
    </div>
}