
const SingleEmp = ({employe}) => {
    const {name,image,designation} = employe;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="h-[300px]" src={image} alt="Shoes" /></figure>
                <div className="card-body flex flex-col items-center justify-center">
                    <h2 className="card-title text-3xl font-medium">{name}</h2>
                    <p className="text-lg">{designation} </p>
                </div>
            </div>
        </div>
    );
};

export default SingleEmp;