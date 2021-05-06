import React from "react";
import Element from "./Element";
import Card from "./Card";
const Elements = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <Card className={}>
          <Element user={user} key={user.username}></Element>
        </Card>
      ))}
    </>
  );
};

export default Elements;
