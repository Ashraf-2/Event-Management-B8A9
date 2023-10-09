import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import userPic from "../../assets/user.png";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () =>{
        logOut()
        .then(res => console.log('successfully logged out'))
        .catch(error => console.log(error))
    }


    const navLinks = <>
        <li id="sidebar"><NavLink className="font-semibold text-xl" to="/">Home</NavLink></li>
        {/* <li><NavLink to="/about">About Us</NavLink></li> */}
        <li id="sidebar"><NavLink className="font-semibold text-xl" to="/contact">Contact</NavLink></li>
        <li id="sidebar"><NavLink className="font-semibold text-xl" to="/gallery">Gallery</NavLink></li>
        <li id="sidebar"><NavLink className="font-semibold text-xl" to="/stuffs">Stuffs</NavLink></li>
        {/* <li id="sidebar"><a className="font-semibold text-xl" href="">About us</a></li> */}

    </>
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img src="https://i.ibb.co/WyxRNts/logo-harmony.png" className="btn btn-ghost normal-case text-xl" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <Link to="/login" className="btn">Login</Link> */}
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={userPic} />
                        </div>
                    </label>
                    {
                        user ?
                            <Link to="/">
                                <button onClick={handleSignOut} className="btn">Sign Out</button>
                            </Link>
                            :
                            <Link to="/login">
                                <button className="btn">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;