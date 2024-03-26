import { IoLocationOutline } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";
import { FcDocument } from "react-icons/fc";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";

const ListedBook = ({book}) => {
    const {bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = book;
    return (
        
        <div className="flex gap-7 border-2 p-5 rounded-2xl my-5 ">
            <img className="w-[230px]  px-12 py-7 bg-gray-200 rounded-2xl" src={image} alt="" />
            <div className="text-base space-y-4">
            <h1 className="play-fair font-bold text-2xl">{bookName}</h1>
            <p className="text-base text-gray-600 font-medium">By: {author}</p>
            <div className="flex gap-5 items-center">
                <p className="font-bold text-base">Tag:</p>
                <p className="bg-[#23BE0D0D] p-2 font-medium rounded-3xl text-[#23BE0A]">{tags[0]}</p>
                <p className="bg-[#23BE0D0D] p-2 font-medium rounded-3xl text-[#23BE0A]">{tags[1]}</p>
                <p className="text-gray-600 flex items-center gap-2 "><IoLocationOutline />Year of Publishing: {yearOfPublishing}</p>
            </div>
            <div className="flex gap-5 text-gray-500">
                <p className="flex items-center gap-2"><SlPeople /> Publisher:
 {publisher}</p>
                <p className="flex items-center gap-2"><HiOutlineDocumentDuplicate /> Page:  {totalPages}</p>
            </div>
            <div className="border-b-2 w-full"></div>
            <div className="flex gap-5">
                <p className="bg-blue-100 p-3 rounded-full text-blue-500">Category: {category}</p>
                <p className="bg-orange-100 p-3 rounded-full text-orange-500"> Rating: {rating}</p>
                <button className="btn bg-green-500 text-white rounded-full text-xl">View Details</button>
            </div></div>
            
        </div>
    );
};

export default ListedBook;