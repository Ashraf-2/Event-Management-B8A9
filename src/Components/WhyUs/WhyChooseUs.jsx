import { useEffect, useState } from "react";
import IconRender from "./IconRender";
// import "whyUs.json";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();



const WhyChooseUs = () => {
    const [iconss ,setIcons] = useState([]);
    useEffect(()=> {

        fetch("whyUs.json")
        .then(res => res.json())
        .then(data => setIcons(data))
    },[])
    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000" className="px-5 py-16 bg-red-400">
            <div className="flex flex-col md:flex-row justify-between">
                <div>
                    <p className="text-xl tracking-[5px] uppercase text-[#878787]">Why Choose Us</p>
                    <h2 className="text-5xl">Harmoni <span className="font-bold">Advantages</span> </h2>
                </div>
                <button className="btn my-3 shadow-xl bg-gradient-to-r from-[#ff3e00] to-[#ffbe30] hover:opacity-80 text-white font-bold text-lg rounded-3xl lg:px-10 uppercase">Meet The Team</button>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-5">
                {
                    iconss.map(iconSingular => <IconRender key={iconSingular.id} iconSingular={iconSingular}></IconRender>)
                }
            </div>
        </div>
    );
};

export default WhyChooseUs;