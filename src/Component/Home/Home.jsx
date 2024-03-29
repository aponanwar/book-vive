import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Book from "../Book/Book";

import "../Books/Books.css";

const Home = () => {
  const books = useLoaderData();
  return (
    <div>
      <Banner></Banner>

      <div className="w-9/12 mx-auto">
        <div>
          <h1 className="text-6xl font-bold mt-20 text-center mb-20">Books</h1>
        </div>
        <div className="book-container">
          {books.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
