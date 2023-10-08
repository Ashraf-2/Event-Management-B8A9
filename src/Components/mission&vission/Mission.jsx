/* eslint-disable react/no-unescaped-entities */
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Mission = () => {
    return (
        <div data-aos="zoom-in" data-aos-duration="1000" id="mission" className="grid grid-cols-1 md:grid-cols-3 gap-3 py-20 bg-[#f7f7f7] px-5">
            <div>
                <p className="text-xl tracking-[10px] uppercase text-[#878787]">We are Harmoni</p>
                <h2 className="text-5xl font-normal my-5"> <span className="font-bold">No.1</span> Events Management</h2>
                <button className="btn my-3 shadow-2xl bg-gradient-to-r from-[#ff3e00] to-[#ffbe30] hover:opacity-80 text-white font-bold text-lg rounded-3xl px-10 uppercase">Get started!</button>
            </div>
            <div>
                <h3 className="text-2xl font-bold tracking-[5px]">Our Mission</h3>
                <p className="my-4 text-base text-[#878787]">At <span className="text-[#ff3e00] font-medium">Harmoni</span>, our mission is to create unforgettable moments that bring people together. We believe in the power of events to inspire, connect, and celebrate. Our dedication to excellence and creativity drives us to craft events that not only meet but exceed our clients' expectations. With every event we plan, we aim to leave a lasting impression and a trail of happy memories.</p>
            </div>
            <div>
                <h3 className="text-2xl font-bold tracking-[5px]">Our Vision</h3>
                <p className="my-4 text-base text-[#878787]">Our vision is to be the premier event management company known for innovation, passion, and a commitment to excellence. We envision a world where every event, big or small, is an extraordinary experience. To achieve this, we continuously strive to push the boundaries of event planning, incorporating the latest trends, technologies, and creative ideas. We aspire to be the go-to choice for individuals and businesses seeking to transform their events into exceptional, one-of-a-kind experiences.</p>
            </div>
        </div>
    );
};

export default Mission;