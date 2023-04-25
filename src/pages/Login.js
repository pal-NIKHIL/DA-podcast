import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
// import { Audio } from "./Audio";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";

export const Login = () => {
    const navigate=useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg,setErrosMsg]=useState("");
    const [submitButtonDisabled,setSubmitButtonDisabled]=useState(false)
    const handleSubmit =(e)=>{
        e.preventDefault()
        setSubmitButtonDisabled(true)
        signInWithEmailAndPassword(auth,email,password)
            .then((res)=>{
                setSubmitButtonDisabled(false)
                console.log(res)
                navigate('/')
            })
            .catch((error)=>{
                setSubmitButtonDisabled(false)
                setErrosMsg(error.message)
                console.log(error)
            })
    }
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const response = await fetch("http://localhost:5000/api/login", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({email, password}),
    //     });
    //     const data = await response.json();
    //     if (data.success) {
    //         console.log("success");
    //         ///history.push("/Audio");
    //         setSuccess(true);
    //         setIsLoggedIn(true);
    //     } else {
    //         // show error message
    //         console.log("bad creadentials");
    //     }
    //     if (successLogin) {
    //     }
    // };
    return (
        <div>
                <div className="mainLoginSection">
                    <div className="container3 " id="container3">
                        <div className="form-container log-in-container">
                            <form onSubmit={handleSubmit}>
                                <h1>Login</h1>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Email-id"
                                />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="Password"
                                />
                                <b className="alert-info">{errorMsg}</b>
                                <button disabled={submitButtonDisabled} type="submit" className="secondary-button">Login</button>
                            </form>
                        </div>
                        <div className="overlay-container">
                            <div className="overlay">
                                <div className="overlay-panel overlay-right">
                                    <img
                                        src={"https://storage.googleapis.com/pr-newsroom-wp/1/2023/03/Preview-On-Home_Podcasts-GIF.gif"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};
