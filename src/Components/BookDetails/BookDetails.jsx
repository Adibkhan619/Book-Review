// import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    // const [book, setBook] = useState([]);
    const books = useLoaderData();
    const {id} = useParams();
    const idInt= parseInt(id);
    console.log(books, id);
    const book = books.find(item => item.bookId === idInt);
    console.log(book);
    const {bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = book;

    return (
        <div>
            <div className="flex gap-12">
                <img className="p-20 bg-[#1313130D] rounded-2xl max-w-[480px]" src={image} alt="" />
            <div className="space-y-3">
                <h1 className="font-bold text-4xl play-fair">{bookName}</h1>
                <p className="font-medium text-gray-600 text-xl">By: {author}</p>

                <div className="border-t-2 border-b-2">
                    <p>{category}</p>
                </div>

                <p className="text-black font-bold"> Review: <span className="text-gray-600 font-normal "> {review}</span></p>

                <div>
                    <p>{tags[0]}</p>
                    <p>{tags[1]}</p>
                </div>

                <div className="border-2"></div>

                <div className="flex justify-start gap-20">
                    <div className="text-black font-bold">
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div className="text-gray-600 text-base font-normal">
                    <p>{totalPages}</p>
                    <p>{publisher}</p>
                    <p>{yearOfPublishing}</p>
                    <p>{rating}</p>
                    </div>
                </div>

                <div>
                <Link><button className="btn btn-accent mr-3">Read</button></Link>
                <Link><button className="btn btn-accent mr-3">Wishlist</button></Link>
                </div>
            
                
            
            </div> 
            </div>
            
            
        </div>
    );
};

export default BookDetails;