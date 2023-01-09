import "./login.scss"

const Login=()=>{
    
    return(
        <div className="login">
<div className="top">
<div className="wrapper">
<img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQd31Qhaz7C5FWNL5gccili-3SyNnN807hbg&usqp=CAU" alt="logo"/>

</div>
</div>
<div className="container">

  <form>
    <h1>Sign in</h1>
    <input type="email" placeholder="Email or Phone number"/>
    <input type="password" placeholder="Password"/>
    <button className="loginButton">Sign in</button>
    <span>New to Movies Now?<b>Sign up now</b></span>
    <small>
        This page is protected by Google reCAPTCHA to ensure you are not 
        a robot. <b>Learn more...</b>
    </small>
  </form>
   
        </div>
        </div>
    )
}

export default Login;