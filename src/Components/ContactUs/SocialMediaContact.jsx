
const SocialMediaContact = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center h-screen">
            <div className="w-5/12 ">
                <h1 className="text-5xl my-10 text-orange-400 font-bold">Reach Us for your program</h1>
                <p className="text-3xl">We value your input! Share your thoughts, tell us about the event you envision, or simply reach out to us. Your opinion matters. Connect with us on social media for updates, inspiration, and more.</p>
            </div>
            <div className="border">
                {/* <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" />
                </div>
                <div>
                    <label htmlFor="subject">Your Event Subject</label>
                    <input type="text" placeholder="Type of Event You Want" name="subject" id="" />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" placeholder="details plan for your event" name="description" id="" />
                </div>
                
                <input type="submit" name="Submit" id="" /> */}

                {/* <div className=" bg-base-200">
                    <div className="hero-content">
                       
                        
                    </div>
                </div> */}


                <div className=" w-full  shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your email" className="input w-[500px] input-bordered" required />
                        </div>
                        <div className="">
                            <label className="label">
                                <span className="label-text">Type of your event</span>
                            </label>
                            <input type="password" placeholder="Subject matter of your event" className="input w-[500px] input-bordered" required />

                        </div>
                        <div className="">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" placeholder="Details of your desired event" className="input-bordered input py-0 px-4 h-40 w-full max-w-lg" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn  bg-gradient-to-r from-[#ff3e00] to-[#ffbe30] hover:opacity-80 text-white font-bold text-lg">Login</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default SocialMediaContact;