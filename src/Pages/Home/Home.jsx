import { useEffect, useState } from "react";
import WhyChooseUs from "../../Components/WhyUs/WhyChooseUs";
import Mission from "../../Components/mission&vission/Mission";
import Banner from "./Banner/Banner";
import { Link, useLoaderData } from "react-router-dom";
import HomePgServices from "../../Components/HomePgServices/HomePgServices";

const Home = () => {
    const events = useLoaderData();
    console.log(events);
    return (
        <div>
            <Banner></Banner>
            <Mission></Mission>
            <WhyChooseUs></WhyChooseUs>
            <div className="flex flex-col items-center py-16  bg-green-500 ">

                <div className=" grid grid-cols-1 md:grid-cols-2 px-10 gap-5 mx-auto">
                    {
                        events.slice(0, 4).map(event => <HomePgServices key={event.id} event={event}></HomePgServices>)
                    }
                </div>
                <Link to="/services"><button className="btn mt-5 ">see all</button></Link>
            </div>
        </div>
    );
};

export default Home;