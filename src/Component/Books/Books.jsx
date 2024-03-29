// import Book from "../Book/Book";
// import { useEffect, useState } from "react";
// import './Books.css'

// const Books = () => {
//   const [allbooks, setAllbooks] = useState([]);

//   useEffect(() => {
//     fetch("bookslists.json")
//       .then((res) => res.json())
//       .then((data) => setAllbooks(data));
//   }, []);

//   return (
//     <div className="w-9/12 mx-auto">
//       <div>
//         <h1 className="text-6xl font-bold mt-20 text-center mb-20">Books</h1>
//       </div>
//       <div className="book-container ">
//         {allbooks.map((book) => (
//           <Book key={book.bookId} book={book}></Book>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Books;
