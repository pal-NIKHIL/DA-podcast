export const AudioPlayer = ()=>{
    return<div className="body2 Card-Containe2 m-5">
        <a href='https://fonts.googleapis.com/css?family=Allerta' rel='stylesheet'/>
        <h2>Wellcome to Podcast</h2>
        <div className="container-audio">
            <audio controls loop autoPlay>
                <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/new_year_dubstep_minimix.ogg"
                        type="audio/ogg"/>
                Your browser dose not Support the audio Tag
            </audio>
        </div>
    </div>

}