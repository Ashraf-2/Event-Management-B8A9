import { useLoaderData } from "react-router-dom";
import SingleEmp from "./SingleEmp";

const Employe = () => {
    const employes = useLoaderData();
    console.log(employes);
    return (
        <div className="py-10 mx-5">
            <h2 className="text-4xl font-bold text-center my-5 text-orange-400 ">Our Best Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {
                employes.map(employe => <SingleEmp key={employe.id} employe={employe}></SingleEmp>)
            }
            </div>
            
        </div>
    );
};

export default Employe;