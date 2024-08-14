/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`https://bookstore-5-09z6.onrender.com/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. please check console");
        console.log(error);
      });
  };
  return (
    <div className=" container p-4">
      <BackButton />
      <h5 className=" my-4">Delete Book</h5>
      {loading ? <Spinner /> : ""}
      <div className="border border-danger rounded p-4 mx-auto" style={{ maxWidth: "600px" }}>
        <h3 className="mb-4">Are You Sure You want to delete this book?</h3>
        <button
          className="btn btn-danger w-100"
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};
export default DeleteBook;