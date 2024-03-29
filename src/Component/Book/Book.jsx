import { CiStar } from "react-icons/ci";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  

  const { bookId, bookName, author, image, rating, category, tags } = book;

  return (
    <div className="border-2 p-10 rounded-lg">
      <div className="flex bg-gray-200 justify-center items-center rounded-lg py-20 mb-5">
        <Link to={`/book/${bookId}`}>
          <img className="w-36 h-48" src={image} alt="" srcSet="" />
        </Link>
      </div>
      <div className="space-y-3 mt-5">
        <div className="flex gap-3">
          <h2 className="bg-orange-200 px-3 py-1 text-[#23BE0A] rounded-full">
            {tags[0]}
          </h2>
          <h2 className="bg-orange-200 px-3 py-1 text-[#23BE0A] rounded-full">
            {tags[1]}
          </h2>
        </div>
        <div>
          <h1 className=" text-2xl font-bold book-font mt-10">{bookName}</h1>
        </div>
        <div>
          <h2 className="font-semibold">By: {author}</h2>
        </div>
        <div>
          <span>
            <hr />
          </span>
        </div>
        <div className="flex justify-between font-bold text-xl">
          <div>
            <h2>{category}</h2>
          </div>
          <div>
            <h2 className="flex items-center gap-2">
              {rating} <CiStar />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
