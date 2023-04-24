import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth"
import {auth} from "../firebase";

const Signup = () => {
    const navigate=useNavigate();
    const [name,setName]=useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg,setErrosMsg]=useState("");
  const [submitButtonDisabled,setSubmitButtonDisabled]=useState(false)
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch("http://localhost:5000/api/signup", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email, password }),
  //   });
  //   const data = await response.json();
  //   if (data.success) {
  //     history.push("/login");
  //     console.log("Success");
  //   } else {
  //     // show error message
  //     console.log("Error");
  //   }
  // };
  const handleSubmit =(e)=>{
      e.preventDefault()
        setSubmitButtonDisabled(true)
   createUserWithEmailAndPassword(auth,email,password)
       .then(async (res)=>{
         setSubmitButtonDisabled(false)
         const user=res.user;
         await updateProfile(user,{
             displayName:email
         })
           navigate('/')
         console.log(res)
       })
       .catch((error)=>{
         setSubmitButtonDisabled(false)
         setErrosMsg(error.message)
         console.log(error)
       })
  }
  return (
    <div>
      <div className="mainLoginSection">
        <div className="container3" id="container3">
          <div className="form-container log-in-container">
            <form onSubmit={handleSubmit}>
              <h1>Sign Up</h1>
                <input
                    type="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Name"
                />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
              <b className="alert-info">{errorMsg}</b>
              <button className="secondary-button"  disabled={submitButtonDisabled} style={{margin:20}}>Sign Up</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <img src={"https://wp.hiebing.com/wp-content/uploads/2020/02/podcast_FINAL.gif"}/>
              </div>
            </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Signup;
