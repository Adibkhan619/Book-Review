

const SingleBook = ({item}) => {
    const {bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = item;
    return (
        <div>
            
            <div className="bg-gray-300 rounded-2xl">
                <img className="w-32 p-5" src={image} alt="" />
            </div>
            
            <div className="flex gap-5">
                <p>{tags[0]}</p>
                <p>{tags[1]}</p>
            </div>
            <h1>{bookName}</h1>
            <h1>By: {author}</h1>
            <div className="border-dashed border-b-2"></div>
        </div>
    );
};

export default SingleBook;