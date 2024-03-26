import { useEffect, useState } from "react";
import { getDataFromLocalStorage } from "../utility/localStorage";
import ListedBook from "../ListedBook/ListedBook";

const ListedBooks = () => {

    const [listedBooks, setListedBooks] = useState([]);
    console.log(listedBooks);
    useEffect(() => {
        const data = getDataFromLocalStorage();
        setListedBooks(data);      
    }, [])
       
    return (
        <div>
            <div className="max-w-full text-center my-10 bg-gray-100 rounded-3xl">
                <h1 className="py-8 font-bold text-3xl">Books</h1>
            </div>
            <div>
                {
                    listedBooks.map(book => <ListedBook book={book} key={book.bookId}></ListedBook>)
                }
            </div>
            <button className="btn">Sort</button>
        </div>
    );
};

export default ListedBooks;