import { useEffect, useState } from "react";
import { getDataFromLocalStorage } from "../utility/localStorage";
import ListedBook from "../ListedBook/ListedBook";


const ReadBook = () => {
      
        const [listedBooks, setListedBooks] = useState([]);

        useEffect(() => {
          const data = getDataFromLocalStorage();
          setListedBooks(data);
        }, []);
      
        // console.log(listedBooks);

    return (
        <div>
            {listedBooks.map(book => <ListedBook key={book.bookId} book={book}></ListedBook>)}
        </div>
        
    );
};

export default ReadBook;