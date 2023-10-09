import { useLoaderData } from "react-router-dom";
import HomePgServices from "../HomePgServices/HomePgServices";

const Services = () => {
    const events = useLoaderData();
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/XtBDbtF/banner-1.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold">EventExcellence: Crafting Unforgettable Moments</h1>
                    </div>
                </div>
            </div>

            <div className="px-10 mx-auto ">
                <p className="text-4xl font-bold text-center my-10">Our Services</p>
                <div className="grid gap-5">
                {
                    events.map(event => <HomePgServices key={event.id} event={event}></HomePgServices>)
                }
                </div>
            </div>
        </div>
    );
};

export default Services;