import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaEye ,FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2'
import axios from "axios";
// import { Helmet } from "react-helmet-async";

const Register = () => {
  const {createUser,updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();
  
    const [registerError, setRegisterError] = useState('');
    const [showPassword,setShowPassword] = useState(false);
    const handleRegister = e =>{
      
        e.preventDefault();
        console.log(e.currentTarget)
        const from = new FormData(e.currentTarget);
        const name = from.get('name')
        
        const photo = from.get('photo');
        const email = from.get('email');
        const password = from.get('password');
        const role = from.get('role');

        const status = role === "buyer" ? "approved" : "pending";
        const wishlist = [];
        const userData = {name,photo,email,password,role,status,wishlist};
        console.log(userData);

        setRegisterError('')
        if(password.length < 6){
         setRegisterError('Password should be at least 6 characters or longer ');
         return;
        }
        else if (!/[A-Z]/.test(password)){
     setRegisterError('Your Password should have at least one Upper case characters.');
     return;
        }
        else if (!/[a-z]/.test(password)){
          setRegisterError('Your Password should have at least one Lower case characters.');
          return;
        }
        
        createUser(email,password)
    .then( () => {

      axios.post("https://gadget-shop-sarver.vercel.app/users", userData).then((res)=>{
        console.log(res.data)
       if(res.data.insertedId){
        Swal.fire({
            
          icon: "success",
          title: "Register successfully",
          showConfirmButton: false,
          timer: 1500,
        });
       navigate("/")
       }
      })
      
      
      
      updateUserProfile(name,photo)
      .then(()=>{
        
      })
      
    })
    .catch(error => {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
      });
      setRegisterError(error.message)
    })
    }

    

    return (
        <div className="w-[470px] lg:w-full">
          {/* <Helmet>
            <title>Our Residential || Register</title>
          </Helmet> */}
        <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col">
<div className="text-center">
  <h1 className="text-5xl font-bold">Register now!</h1>
</div>
<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <form onSubmit={handleRegister}  className="card-body">
     
  <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" placeholder="name" name="name" className="input input-bordered" required />
    </div>


    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo</span>
      </label>
      <input type="text" placeholder="photo url" name="photo" className="input input-bordered" required/>
    </div>


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
      <div className="flex">
      <input 
        type={ showPassword ? "text" : "password"}
        name="password"
        placeholder="password"
        className="input input-bordered w-[320px]"
        required />
        <span className="-ml-7 mt-3 text-[22px]" onClick={()=>{ setShowPassword(!showPassword)}}>
          {
            showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
          }
        </span>
      </div>
    </div>
    {/*//////////////////////////////*/}

    <div className="form-control">
      <label className="label">
        <span className="label-text">Role</span>
      </label>
          <select name="role" className="select select-bordered w-full max-w-xs">
      <option value="buyer">Buyer</option>
      <option value="seller">Seller</option>
          </select>
    </div>

    {
        registerError && <p className="text-red-700 text-[14px]">{registerError}</p>
    }
    <div className="form-control mt-6">
      <button className="btn btn-primary">Register</button>
    </div>
  </form>

  <p className="text-[14px] ml-8 mb-6">Already have an Account? <Link className="text-blue-600" to='/login'>Login..</Link> </p>
</div>
</div>
</div>
    </div>
    );
};

export default Register;