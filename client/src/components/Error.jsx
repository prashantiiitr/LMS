// src/components/Error.jsx
import React from "react";

const Error = ({ message = "Something went wrong." }) => {
  return (
    <div style={{ color: "red", padding: "1rem", border: "1px solid red" }}>
      <h2>Error</h2>
      <p>{message}</p>
    </div>
  );
};

export default Error;
