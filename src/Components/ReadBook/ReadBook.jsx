import { useEffect, useState } from "react";
import { getDataFromLocalStorage } from "../utility/localStorage";
import ListedBook from "../ListedBook/ListedBook";
// import PagesToRead from "../PagesToRead/PagesToRead";


const ReadBook = () => {
      
        const [listedBooks, setListedBooks] = useState([]);

        useEffect(() => {
          const data = getDataFromLocalStorage();
          setListedBooks(data);
        }, []);
      
        console.log(listedBooks);

    return (
        <div>
            {listedBooks.map(book => <ListedBook key={book.bookId} book={book}></ListedBook>)}
            
            {/* {listedBooks.map(book => <PagesToRead key={book.bookId} book={book}></PagesToRead>)}
        
            {listedBooks.map(book => <TriangleBar key={book.bookId} book={book}></TriangleBar>)} */}

        </div>
        
    );
};

export default ReadBook;