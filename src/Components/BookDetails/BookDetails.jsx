
import { Link, useLoaderData, useParams } from "react-router-dom";
import { saveDataToLocalStorage, saveDataToLocalStorage2 } from "../utility/localStorage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {

    const books = useLoaderData();
    const {id} = useParams();
    const idInt= parseInt(id);

    const book = books.find(item => item.bookId === idInt);

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = book;

    const handleReadBtn = () => {
      saveDataToLocalStorage(book);       
    }
    const handleWIshlistBtn = () => {
      saveDataToLocalStorage2(book);       
    }

    return (
        <div>
            <div className="flex gap-12 my-6">
                <img className="p-20 bg-[#1313130D] rounded-2xl max-w-[480px]" src={image} alt="" />
            <div className="space-y-6">
                <h1 className="font-bold text-4xl play-fair">{bookName}</h1>
                <p className="font-medium text-gray-600 text-xl">By: {author}</p>

                <div className="border-t-2 py-4  border-b-2">
                    <p className="text-xl text-gray-600">{category}</p>
                </div>

                <p className="text-black text-base font-bold"> Review: <span className="text-gray-600 text-base font-normal "> {review}</span></p>

                <div className="flex gap-5">
                <p className="bg-[#23BE0D0D] p-2 font-medium rounded-3xl text-[#23BE0A]">{tags[0]}</p>
                <p className="bg-[#23BE0D0D] p-2 font-medium rounded-3xl text-[#23BE0A]">{tags[1]}</p>
                </div>

                <div className="border-b-2"></div>

                <div className="flex justify-start gap-20">
                    <div className="text-gray-600 text-base font-normal">
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div className="text-black font-bold">
                    <p>{totalPages}</p>
                    <p>{publisher}</p>
                    <p>{yearOfPublishing}</p>
                    <p>{rating}</p>
                    </div>
                </div>

                <div className="text-lg">
                <Link><button onClick={handleReadBtn} className="btn border-gray-300 bg-white px-5 mr-3">Read</button></Link>
                <Link><button onClick={handleWIshlistBtn} className="btn text-white bg-[#59C6D2]">Wishlist</button></Link>               
                </div>            
            </div> 
            </div>
            
            <ToastContainer/>
        </div>
    );
};

export default BookDetails;