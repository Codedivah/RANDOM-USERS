import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h3>The page does not exist</h3>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default Error;
