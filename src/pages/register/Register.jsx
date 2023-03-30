import "./register.scss"
import { useRef, useState } from "react";
const Register=()=>{
    //make email input change dynamically
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const emailRef=useRef();
    const passwordRef=useRef();
    const handleClick=()=>{
        setEmail(emailRef.current.value)
    }
    const handleFinish=()=>{
        setPassword(passwordRef.current.value)
    }
    return(
        <div className="register">


<div className="top">
<div className="wrapper">
<img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQd31Qhaz7C5FWNL5gccili-3SyNnN807hbg&usqp=CAU" alt="logo"/>

<button className="loginButton">Sign In</button>
</div>

</div>
<div className="container">
<h1>Unlimited movies, Tv shows, and more...</h1>
<h2>Watch anyone. Cancel anytime.</h2>
<p>Ready to watch? Enter your Email to create or restart your membership</p>
   {
    //if email is not set, display this, else display password input
    !email ? (
        <div className="input" >
   <input ref={emailRef} type="email" placeholder="Your Email Address"/>
<button className="registerButton" onClick={()=>handleClick()}> 
Get Started
</button>
       
        </div>
    ):(
        <form className="input" >
   <input ref={passwordRef} type="password" placeholder="password"/>
<button className="registerButton" onClick={()=>handleFinish()}> 
 Start
</button>
       
        </form> 
    )
   }
   
        </div>
        </div>
    )
}
export default Register;