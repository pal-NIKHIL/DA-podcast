import logo from './logo.svg';
import './App.css';
import './index.css'
import {Navbar} from "./navbar/navbar";
import {MainSection} from "./header/mainheader";
import {Footer} from "./footer/footer";

function App() {
  return (
    <div className="main-bg">
        <Navbar/>
        <MainSection/>
        <Footer/>
    </div>
  );
}

export default App;
