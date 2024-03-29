import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from "react-router-dom";
import { getStoredBookList } from "../../Utility/localstorage";
import ReadCart from "../Readcart/ReadCart";

const ListedBooks = () => {
  const listBooks = useLoaderData();
  const [booklist, setBooklist] = useState([]);

  useEffect(() => {
    const storedBookIds = getStoredBookList();
    if (listBooks.length > 0) {
      const AddedBooks = listBooks.filter((book) =>
        storedBookIds.includes(book.bookId)
      );

      setBooklist(AddedBooks);

      // const addedBooks = [];
      // for (const id of storedBookIds) {
      //   const book = listBooks.find(book => book.bookId === id);
      //   if (book) {
      //     addedBooks.push(book);
      //   }
      // }


      console.log(listBooks, storedBookIds, AddedBooks);
    }
  }, []);

  return (
    <div>
      <div className="bg-gray-200 text-center font-bold text-2xl py-10 mt-10 w-9/12 mx-auto rounded-lg">
        <h2>Books</h2>
      </div>
      <div className="flex justify-center mt-5">
        <p className="flex items-center gap-5 text-center bg-green-400 rounded-lg px-5 py-3 font-bold">
          Sort By <IoIosArrowDown />
        </p>
      </div>
        {/* book list section */}
      <div>
       
        <div>
          {
            booklist.map(book=> <ReadCart key={book.bookId} book={book}></ReadCart>)
          }
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
