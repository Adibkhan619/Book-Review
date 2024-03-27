import { useEffect, useState } from "react";
import { getDataFromLocalStorage2 } from "../utility/localStorage";
import ListedBook from "../ListedBook/ListedBook";


const Wishlist = () => {
    const [listedBooks, setListedBooks] = useState([]);

        useEffect(() => {
          const data = getDataFromLocalStorage2();
          setListedBooks(data);
        }, []);
      
        // console.log(listedBooks);
    return (
        <div>
            {listedBooks.map(book => <ListedBook key={book.bookId} book={book}></ListedBook>)}
        </div>
    );
};

export default Wishlist;