import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex justify-center bg-gray-200 h-screen shadow-2xl">
            <div className="text-center flex flex-col rounded-xl gap-10 px-10 py-12 bg-white my-[210px]">
                <h1 className="text-3xl p-5 rounded-xl text-white font-semibold  bg-blue-400">You Hit an Error!!!</h1>
                <p className="text-gray-600 play-fair text-2xl font-bold">Please Go Back</p>
                <Link to="/"><button className="btn bg-green-400 px-12 text-white font-semibold text-2xl">Home</button></Link>
            </div>
            
        </div>
    );
};

export default ErrorPage;