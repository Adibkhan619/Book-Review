import { IoMdStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const SingleBook = ({item}) => {
    const {bookId, bookName, author, image, rating, category, tags} = item;
    return (
        <Link to={`/book/${bookId}`}>
        <div className="border-[1px] shadow-sm p-5 rounded-2xl">
            
            <div className="bg-[#F3F3F3] rounded-2xl">
                <img className="w-[200px] mx-auto p-5" src={image} alt="" />
            </div>
            
            <div className="space-y-4 mt-6">
            <div className="flex gap-5">
                <p className="bg-[#23BE0D0D] p-2 font-medium rounded-3xl text-[#23BE0A]">{tags[0]}</p>
                <p className="bg-[#23BE0D0D] p-2 font-medium rounded-3xl text-[#23BE0A]">{tags[1]}</p>
            </div>
            <h1 className="play-fair text-2xl font-bold">{bookName}</h1>
            <h1 className=" text-gray-600 font-medium">By: {author}</h1>
            </div>
            <div className="border-dashed border-b-2 my-5"></div>
            <div className="flex text-gray-600 font-medium justify-between">
                <p>{category}</p>
                <p className="flex gap-1 items-center">{rating}<span className="text-xl"><IoMdStarOutline />
</span></p>
            </div>
        </div>
        </Link>
    );
};

SingleBook.propTypes ={
    item: PropTypes.object,
}
export default SingleBook;