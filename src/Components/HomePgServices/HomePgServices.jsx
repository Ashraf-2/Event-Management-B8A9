/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const HomePgServices = ({ event }) => {
    const { id, title, image, price, short_description, services } = event;
    return (
        <div className="w-full">
            <div className="card flex flex-col md:flex-row items-center bg-base-100 shadow-xl">
                <figure className="flex-1 bg-green-500"><img className="bg-green-400 w-[100%] h-[200px] object-cover block" src={image} alt="Album" /></figure>
                <div className="card-body flex-1">
                    <h2 className="card-title">{title}</h2>
                    <p>{short_description.slice(0, 100)}</p>
                    <div className="card-actions justify-end">
                        <p>{price}</p>
                        <Link to={`/service/${id}`}>

                            <button className="btn shadow-2xl bg-gradient-to-r from-[#ff3e00] to-[#ffbe30] hover:opacity-80 text-white font-bold text-base rounded-md px-5 normal-case">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePgServices;