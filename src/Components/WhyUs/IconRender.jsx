/* eslint-disable react/jsx-key */
import { FaHandshake } from 'react-icons/fa';
import { FaImage } from 'react-icons/fa';
import { BsBalloonFill } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { GiShatter } from 'react-icons/gi';
import { AiFillSound } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { FiTrendingUp } from 'react-icons/fi';


const IconRender = ({ iconSingular }) => {
    // console.log(iconSingular);
    const {id,iconA,title,description} = iconSingular;
    const ar = [
        <FaHandshake></FaHandshake>,
        <FaImage></FaImage>,
        <BsBalloonFill></BsBalloonFill>,
        <FiPhoneCall></FiPhoneCall>,
        <GiShatter></GiShatter>,
        <AiFillSound></AiFillSound>,
        <FiSettings></FiSettings>,
        <FiTrendingUp></FiTrendingUp>
        ]
    return (
        
        <div>
            <div className="card border transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110  duration-800 bg-base-200 hover:bg-orange-100 hover:shadow-xl hover:text-black text-black shadow-lg">
                <div className="flex flex-col items-center justify-center py-5">
                    <p className='text-4xl text-orange-500'>{ar[id-1]}</p>
                    <h2 id="title" className="card-title text-center">{title}</h2>
                    <p className='text-center' id="desc">{description}</p>
                    
                </div>
            </div>


        </div>
    );
};

export default IconRender;