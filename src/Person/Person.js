import React from "react";
import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <h3 onClick={props.click}>Name: {props.name} <span>{props.children}</span></h3>
      <h4>Age: {props.age}</h4>
      <input type="text" onChange={props.inputName} value={props.name} />
    </div>
  );
};

export default person;
