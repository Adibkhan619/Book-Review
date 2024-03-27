import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex justify-center bg-gray-100 h-screen shadow-2xl">
            <div className="text-center flex h-[350px] flex-col rounded-xl gap-5 px-10 py-10 bg-white my-[150px]">

                <h1 className="text-5xl font-bold text-red-600"><em>Error 404!</em> </h1>

                <h1 className="text-2xl p-2 rounded-xl text-white font-bold  bg-blue-400">Page Not Found!</h1>
                
                <p className="text-white text-3xl px-5 rounded-lg bg-blue-400 mx-10 py-3 font-bold">Please Go Back</p>
                
                <Link to="/"><button className="btn bg-green-400 px-10 play-fair text-white font-bold text-2xl">Home</button></Link>
            </div>
            
        </div>
    );
};

export default ErrorPage;