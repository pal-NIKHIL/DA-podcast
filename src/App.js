import "./App.css";
import "./index.css";
import {Navbar} from "./component/navbar/navbar";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Video} from "./pages/Video";
import {Login} from "./pages/Login";
import Signup from "./pages/Signup";
import {Search} from "./component/audio_component/Search";
import {AudioPlayer} from "./pages/AudioPlayer";


function App() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        // <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Podcast" element={<Video/>}/>
                <Route path="/Search" element={<Search/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/Audioplayer" element={<AudioPlayer/>}/>
            </Routes>
        </div>
        // </AuthContext.Provider>
    );
}

export default App;
