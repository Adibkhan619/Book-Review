import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import React from 'react';

export const saveDataToLocalStorage = (book) => {
    const savedData = JSON.parse(localStorage.getItem('books')) || [];
    const storedData = savedData.find(item => item.bookId === book.bookId);
    if(storedData){
        toast('Already added into Listed Books');
       
    }
    else{
        savedData.push(book);
        localStorage.setItem('books', JSON.stringify(savedData));
        // localStorage.setItem('wishlist', JSON.stringify(savedData));
        toast('Book Added Successfully')
    }
} 
export const saveDataToLocalStorage2 = (book) => {
    const savedData = JSON.parse(localStorage.getItem('wishlist')) || [];
    const storedData = savedData.find(item => item.bookId === book.bookId);

    const savedBooksData = JSON.parse(localStorage.getItem('books'));
    const storedBooksData = savedBooksData.find(item => item.bookId === book.bookId);

    if(storedData || storedBooksData){
        toast('Book Already Added');
       
    }
    else{
        savedData.push(book);
        localStorage.setItem('wishlist', JSON.stringify(savedData));
        toast('Book Added Successfully')
    }
} 

export const getDataFromLocalStorage = () => {
    const localData = JSON.parse(localStorage.getItem('books')) || [];
    return localData;
}
export const getDataFromLocalStorage2 = () => {
    const localData = JSON.parse(localStorage.getItem('wishlist')) || [];
    return localData;
}
{/* <ToastContainer/> */}