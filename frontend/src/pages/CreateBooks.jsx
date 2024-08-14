/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:5656/books", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happend , please check console");
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h5 className=" my-4">Create Book</h5>
      {loading ? <Spinner /> : ""}
      <div className="border border-primary rounded p-4 mx-auto" style={{ maxWidth: "600px" }}>
        <div className="mb-4">
          <label className="form-label">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="my-4">
          <label className="form-label">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
        className="form-control"
          />
        </div>
        <div className="my-4">
          <label className="form-label">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary w-100"onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
};
export default CreateBooks;