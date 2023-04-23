import logo from './logo.svg';
import './App.css';
import './index.css'
import {Navbar} from "./component/navbar/navbar";
import {MainSection} from "./component/header/mainheader";
import {Footer} from "./component/footer/footer";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Product} from "./pages/Product";
import {Audio} from "./pages/Audio";
import {Video} from "./pages/Video";

function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Product" element={<Product/>}/>
            <Route path="/Audio" element={<Audio/>}/>
            <Route path="/Video" element={<Video/>}/>
        </Routes>
    </div>
  );
}

export default App;
