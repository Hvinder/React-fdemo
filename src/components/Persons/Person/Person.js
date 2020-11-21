import React from "react";
import personCLasses from "./Person.module.css";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";

const Person = (props) => {
  return (
    <Aux>
      <h3 onClick={props.click}>
        Name: {props.name} <span>{props.children}</span>
      </h3>
      <h4>Age: {props.age}</h4>
      <input type="text" onChange={props.changed} value={props.name} />
    </Aux>
  );
};

export default withClass(Person, personCLasses.Person);
