import { Link, useLoaderData, useParams } from "react-router-dom";

const ServiceDetail = () => {
    const servicesEvent = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const singleService = servicesEvent.find(service => service.id === idInt);
    console.log(singleService);
    const { title, image, short_description, price, serviceInfo } = singleService;

    return (
        <div className="px-10 my-10 flex flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center bg-zinc-300">
                <img className="object-cover block" src={image} alt={idInt} />

            </div>
            <div className="my-5">
                <div>
                    <p className="text-4xl font-bold text-center">Event Name: {title}</p>
                </div>
                <div className="my-5">

                    <p className="text-xl font-semibold ">Description: </p>
                    <p className="text-xl">{short_description}</p>
                </div>
                
                <div className="my-5 flex flex-row items-center gap-1">

                    <p className="text-xl font-semibold m">We will provide service: </p>
                    <p className="text-xl">{serviceInfo}.</p>
                </div>
                <div className="my-5">

                    <p className="text-xl font-bold"><span>Event Charge:</span> {price}</p>
                </div>
                <div className="flex flex-col items-center">
                    <button className="btn my-3 shadow-2xl bg-gradient-to-r from-[#ff3e00] to-[#ffbe30] hover:opacity-80 text-white font-bold text-lg rounded-3xl px-10 uppercase">Purchase Event</button>
                </div>

            </div>
            <div>
                <Link to="/"><button className="btn btn-ghost">Back</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetail;