import { useEffect, useState } from "react";
import SingleBook from "../SingleBook/SingleBook";


const BooksContainer = () => {

    const [books, setBooks] = useState([])
    useEffect(()=>{
        fetch('/BookData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])



    return (
        <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            
            {
                books.map(item => <SingleBook key={item.id} item={item}></SingleBook>)
            }


        </div>
    );
};

export default BooksContainer;