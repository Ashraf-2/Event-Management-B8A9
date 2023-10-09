import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from 'sweetalert';
import { getAuth, updateProfile } from "firebase/auth";

const auth = getAuth();
const Login = () => {
    const { signIn, googleSignIn,updateUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [loginError, setloginError] = useState("");

    const handleLogin = (e) => {
        
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log("login data: ", email, password);

        if (password.length < 6) {
            setloginError("Password should have atleast 6 characters");
            swal("invalid Password!","Your Password should have atleast 6 characters","error");
            // console.log(loginError);
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setloginError("Password must have one uppercase");
            swal("invalid Password","Password must have one uppercase","error");
            return;
        }
        else if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)){
            setloginError("Pasword must have one special character");
            swal("invalid Password","Pasword must have one special character","error");
            return;
        }

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                swal("Good job!", "Logged in successfully!", "success");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => setloginError(error.message));

    }
    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                swal("Congratulations!", "Login successfully!", "success");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-300">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <div>
                            {
                                loginError && <p className="my-2 text-red-600 font-medium">{loginError}</p>
                            }
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body pb-0 mb-0">
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
                                <button className="btn  shadow-2xl bg-gradient-to-r from-[#ff3e00] to-[#ffbe30] hover:opacity-80 text-white font-bold text-lg rounded px-10 uppercase">Login</button>
                            </div>
                            <p className="mt-3">Don't have an account? <Link className="font-bold" to="/register">Register Here</Link></p>

                        </form>
                        <div className='flex flex-col items-center mt-3 mb-5'>
                            <p>or Sign in using</p>
                            
                                <button onClick={handleGoogle} className="btn text-red-600 text-4xl hover:cursor-pointer"><AiFillGoogleCircle></AiFillGoogleCircle>
                                </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
