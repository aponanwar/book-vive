import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveBookList } from "../../Utility/localstorage";

const BookReview = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const bookIdInt = parseInt(bookId);

  const book = books.find((book) => book.bookId === bookIdInt);
  // console.log(book);
  const {
    bookName,
    image,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  const handleAddToRead = () => {
    saveBookList(bookIdInt);
    toast("Added to Read");
  };

  const handleAddToWishlist = () => {
    toast("Added on Wishlist");
  };

  return (
    <div className="flex w-9/12 mx-auto mt-10">
      <div className="p-10 w-1/3">
        <img
          className="border-1 rounded-3xl text-center bg-gray-200 w-[425px] h-[564px] p-10"
          src={image}
          alt=""
          srcSet=""
        />
      </div>
      <div className="p-10 w-2/3">
        <h2 className="text-3xl font-bold book-font mb-3">{bookName}</h2>
        <h2 className="mb-3">By:{author}</h2>
        <hr />
        <h2 className="mt-3 mb-3">{category}</h2>
        <hr />
        <h2 className="mt-3 mb-3">
          <span className="font-bold">Review: </span>
          {review}
        </h2>

        <div className="flex mb-3">
          <h2 className="font-bold mr-2">Tag: </h2>
          <h2 className="bg-yellow-100 mr-4 rounded-lg ">#{tags[0]}</h2>
          <h2 className="bg-yellow-100 mr-4 rounded-lg ">#{tags[1]}</h2>
        </div>
        <hr />
        <div className="mt-5 mb-5">
          <h2>
            Number of pages: <span className="font-bold">{totalPages}</span>
          </h2>
          <h2>
            Publisher: <span className="font-bold">{publisher}</span>
          </h2>
          <h2>
            Year of Publishing:{" "}
            <span className="font-bold">{yearOfPublishing}</span>
          </h2>
          <h2>
            Rating: <span className="font-bold">{rating}</span>
          </h2>
        </div>
        <div className="flex text-2xl">
          <button
            onClick={handleAddToRead}
            className="btn mr-5 border-orange-300 bg-white"
          >
            Read
          </button>
          <button
            onClick={ handleAddToWishlist }
            className="btn bg-slate-400 text-white"
          >
            WishList
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default BookReview;
