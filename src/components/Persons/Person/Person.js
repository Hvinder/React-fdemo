import React from "react";
import personCLasses from "./Person.module.css";

const Person = (props) => {
  return (
    <div className={personCLasses.Person}>
      <h3 onClick={props.click}>
        Name: {props.name} <span>{props.children}</span>
      </h3>
      <h4>Age: {props.age}</h4>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
