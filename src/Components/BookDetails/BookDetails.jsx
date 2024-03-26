import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    // const [book, setBook] = useState([]);
    const books = useLoaderData();
    const {id} = useParams();
    const idInt= parseInt(id);
    console.log(books, id);
    const book = books.find(item => item.bookId === idInt);
    console.log(book);
    
    return (
        <div>
            <h1>i am book</h1>
        </div>
    );
};

export default BookDetails;