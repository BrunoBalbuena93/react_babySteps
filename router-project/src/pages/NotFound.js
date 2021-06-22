import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="centered">
      <h2>No quotes found</h2>
      <Link className="btn">Add a Quote</Link>
    </div>
  );
};

export default NotFound;
