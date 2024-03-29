import Book from "../Book/Book";

const ReadCart = ({ book }) => {
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
  return (
    <div className="flex w-9/12 mx-auto border-2 mt-5 justify-center">
      <div className="bg-gray-300 p-5 m-5">
        <img src={image} alt="" srcSet="" />
      </div>
      <div className="mt-5 space-y-2">
        <h2 className="book-font text-2xl font-bold">
          <>{bookName}</>
        </h2>
        <h2>
          <>By: {author}</>
        </h2>
        <div className="flex">
          <div>
            <h2 className="bg-yellow-200 mr-2">#{tags[0]}</h2>
          </div>
          <div>
            <h2 className="bg-yellow-200 mr-2">#{tags[1]}</h2>
          </div>
        </div>

        <div className="flex mb-3">
          <h2 className="mr-5">
            <>Publisher: {publisher}</>
          </h2>
          <h2>
            <>Pages: {totalPages}</>
          </h2>
        </div>
        <hr />
        <div className="flex mt-5">
          <div className="mr-8 bg-blue-200 rounded-full px-3 py-1">
            <h2>Category: {category}</h2>
          </div>
          <div className="mr-8 rounded-full px-3 py-1 bg-orange-200">
            <h2>Rating: {rating}</h2>
          </div>
          <div className="mr-8 px-3 py-1 bg-green-500 rounded-full text-white">
            <h2>View Details</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadCart;
