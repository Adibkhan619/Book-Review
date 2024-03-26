import { ToastContainer, toast } from 'react-toastify';
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
        toast('Book Added Successfully')
    }
} 

export const getDataFromLocalStorage = () => {
    const localData = JSON.parse(localStorage.getItem('books')) || [];
    return localData;
}
{/* <ToastContainer/> */}