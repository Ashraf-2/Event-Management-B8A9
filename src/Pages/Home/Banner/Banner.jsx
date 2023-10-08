import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Banner = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="1500">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/zZbsjwP/event-banner-fuu.webp)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold " >Best Event Management in town</h1>
                        <p className="mb-5">Welcome to Harmoni Event Management, where we turn dreams into unforgettable events. Our objective is to bring your vision to life, and our commitment to world-class service ensures every detail is perfect. Let's create moments that matter together!</p>

                        {/* <a href="#mission" className="scroll-m-2 duration-900"><button className="btn btn-primary">Get Started</button></a>  */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;