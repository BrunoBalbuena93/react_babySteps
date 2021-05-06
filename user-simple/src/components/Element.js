import React from "react";

const Element = ({ user }) => {
  return (
    <div>
      {user.username} Age: {user.age} YO
    </div>
  );
};

export default Element;
