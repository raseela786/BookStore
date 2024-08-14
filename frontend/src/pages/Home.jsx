
import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5656/books")
      .then((response) => {
        if (response.data) {
          setBooks(response.data);
        } else {
          setBooks([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setBooks([]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="d-flex justify-content-between align-items-centers ">
        <h2 >Books List</h2>
       
        <Link to="/books/create" className="btn btn-link">
          <MdOutlineAddBox className="text-primary" style={{ fontSize: '2rem' }} />
        </Link>

      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table class="table table-bordered ">
          <thead>
            <tr>
              <th className="text-center">No</th>
              <th className="text-center">Title</th>
              <th class="d-none d-md-table-cell text-center">
                Author
              </th>
              <th class="d-none d-md-table-cell text-center">
                Publish Year
              </th>
              <th className="text-center" >
                Operations
              </th>
            </tr>
          </thead>
          <tbody>
            {books.length > 0 ? (
              books.map((book, index) => (
                <tr key={book._id} >
                  <td class="text-center">
                    {index + 1}
                  </td>
                  <td class="text-center">
                    {book.title}
                  </td>
                  <td class="text-center d-none d-md-table-cell">
                    {book.author}
                  </td>
                  <td class="text-center d-none d-md-table-cell">
                    {book.publishYear}
                  </td>
                  <td class="text-center">
                    <div class="d-flex justify-content-center gap-2">
                      <Link to={`/books/details/${book._id}`}>
                      <i class="bi bi-info-circle fs-6"></i>
                      </Link>
                      <Link to={`/books/edit/${book._id}`}>
                      <i class="bi bi-pencil text-warning fs-6"></i>
                      </Link>
                      <Link to={`/books/delete/${book._id}`}>
                      <i class="bi bi-trash text-danger fs-6"></i>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                 class="text-center"
                >
                  No books available
                </td>
              </tr>
            )}
          </tbody>
        </table>
        
      )}
    </div>
  );
};

export default Home;