import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
function BackButton({ destination = "/" }) {
  return (
    <div className="d-flex">
      <Link
        to={destination}
        className="btn btn-primary d-flex align-items-center"
      >
        <BsArrowLeft className="me-2" />
      </Link>
    </div>
  );
}

export default BackButton;