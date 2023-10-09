import { useLoaderData } from "react-router-dom";

const Stuffs = () => {
    const stuffs = useLoaderData();
    console.log(stuffs);
    return (
        <div>
            
        </div>
    );
};

export default Stuffs;