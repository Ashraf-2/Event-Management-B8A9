import SocialMediaContact from "./SocialMediaContact";

const Contact = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/tBwcRds/busy-woman-doing-many-things-same-time.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Contact Us</h1>
                        <p className="mb-5">We are always open for you.</p>
                        <div className="flex gap-1">
                            <input type="text" placeholder="email" className="w-full border-none md:w-72 bg-gray-200 rounded px-2" />
                            <input type="submit" value="Subscribe" className=" bg-gradient-to-r from-[#ff3e00] to-[#ffbe30] hover:opacity-80  text-lg px-5 py-2 text-white border-none font-bold btn normal-case rounded" />
                        </div>
                        <p className="text-base my-5">Please subscribe us to get latest info..</p>
                    </div>
                </div>

            </div>
            <div>
                <SocialMediaContact></SocialMediaContact>
            </div>
        </div>
    );
};

export default Contact;