import logo from "./logo.svg";
import { createContext, useState } from "react";
import "./App.css";
import "./index.css";
import { Navbar } from "./component/navbar/navbar";
import { MainSection } from "./component/header/mainheader";
import { Footer } from "./component/footer/footer";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Audio } from "./pages/Audio";
import { Video } from "./pages/Video";
import { Login } from "./pages/Login";
import Signup from "./pages/Signup";

export const AuthContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Audio" element={<Audio />} />
          <Route path="/Video" element={<Video />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
