import { useContext, useState } from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import swal from 'sweetalert';

const Register = () => {
    const {createUser,googlePopUpRegister} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = (e)=> {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log("register data: ",name,email,password);

        createUser(email,password)
        .then(result => {
            console.log(result.user)
            swal("Congratulations", "Your signup successfull!", "success");
            navigate(location?.state ? location.state : '/');
        })
        .catch(error=> console.log(error) )

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Register Here!</h1>
                        
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
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
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn my-3 shadow-2xl bg-gradient-to-r from-[#ff3e00] to-[#ffbe30] hover:opacity-80 text-white font-bold text-lg rounded px-10 uppercase" >Sign Up</button>
                            </div>
                            <p>Have an account already? <Link className='font-bold' to="/login">Login Here</Link></p>
                            {/* <div className='flex flex-col items-center'>
                                <p>or Sign Up Using</p>
                                <p className='text-red-600 text-4xl'><AiFillGoogleCircle></AiFillGoogleCircle></p>
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;