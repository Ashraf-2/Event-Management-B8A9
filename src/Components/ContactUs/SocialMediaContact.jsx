
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const SocialMediaContact = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center px-5 py-10">
            <div data-aos="fade-right" data-aos-duration="1500"
            className="w-full md:w-5/12">
                <h1 className="text-5xl my-10 text-orange-400 font-bold">Reach Us for your program</h1>
                <p className="text-3xl">We value your input! Share your thoughts, tell us about the event you envision, or simply reach out to us. Your opinion matters. Connect with us on social media for updates, inspiration, and more.</p>
            </div>
            <div data-aos="fade-left" data-aos-duration="2000" className="border">
                <div className="w-full shadow-2xl">
                    <form className="card-body">
                        <div className="">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your email" className="input w-full md:w-[500px] input-bordered" required />
                        </div>
                        <div className="">
                            <label className="label">
                                <span className="label-text">Type of your event</span>
                            </label>
                            <input type="password" placeholder="Subject matter of your event" className="input w-full md:w-[500px] input-bordered" required />

                        </div>
                        <div className="">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" placeholder="Details of your desired event" className="input-bordered input w-full md:w-[500px] py-0 px-2 h-40 max-w-lg" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn  bg-gradient-to-r from-[#ff3e00] to-[#ffbe30] hover:opacity-80 text-white font-bold text-lg">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SocialMediaContact;