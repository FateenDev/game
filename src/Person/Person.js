import React from "react";

const Person = props => {
  return (
    <div>
      <h1>
        Hi,I am {props.name} ! , my age is {props.age}
      </h1>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
