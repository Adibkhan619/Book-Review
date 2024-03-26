export const saveDataToLocalStorage = (book) => {
    const savedData = JSON.parse(localStorage.getItem('books')) || [];
    const storedData = savedData.find(item => item.bookId == book.bookId);
    if(storedData){
        alert('Data already ase');
    }
    else{
        savedData.push(book);
        localStorage.setItem('books', JSON.stringify(savedData));
    }
} 

export const getDataFromLocalStorage = () => {
    const localData = JSON.parse(localStorage.getItem('books')) || [];
    return localData;
}