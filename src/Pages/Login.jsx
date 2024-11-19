import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaEye ,FaEyeSlash } from 'react-icons/fa';
// import { Helmet } from "react-helmet-async";

// import { getAuth } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth/cordova";

const Login = () => {


  ///google login
  // const auth = getAuth();
  // const provider = new GoogleAuthProvider()

  const {Login,GoogleLogin,githubLogin} = useContext(AuthContext);
  const [showPassword,setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const from = new FormData(e.currentTarget);
        const email = from.get('email');
        const password = from.get('password');
        console.log(email,password);
        Login(email,password)
        .then(result =>{
          console.log(result.user);
          navigate(location?.state ? location.state : '/');
          Swal.fire({
            
            icon: "success",
            title: "Login successfully",
            showConfirmButton: false,
            timer: 1500
          });
          "/"
        })
        .catch(error =>{
          console.error(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Incorrect password!",
            
          });
        });
  }


    const handleGoogle = () =>{
      GoogleLogin()
      .then()
      .catch()
    }
    const handleGithub = () =>{
      githubLogin()
      .then()
      .catch()
    }
   
    return (
        <div className="w-[470px] lg:w-full">
          {/* <Helmet>
            <title>Our Residential || Login</title>
          </Helmet> */}
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={ showPassword? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
          <span className="ml-[200px] -mt-9 text-[22px]" onClick={()=>{ setShowPassword(!showPassword)}}>
          {
            showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
          }
        </span>
          <label className="label mt-4">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
       
      </form>
        <button onClick={handleGoogle} className="btn bg-white w-[240px] ml-6"><FcGoogle /> Continue With Google</button>
        <button onClick={handleGithub} className="btn bg-white w-[240px] ml-6 mt-2"><FaGithub></FaGithub>Continue With Github</button>
      <p className="text-[14px] ml-8 mb-6">Do not have an Account <Link className="text-blue-600" to='/register'>Register..</Link> </p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;