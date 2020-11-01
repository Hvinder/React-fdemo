import React from "react";
import Radium from "radium";
import "./Person.css";

const person = (props) => {
  const personStyle = {
    "@media (min-width : 500px)": {
      width: "450px",
    },
  };
  return (
    <div className="Person" style={personStyle}>
      <h3 onClick={props.click}>
        Name: {props.name} <span>{props.children}</span>
      </h3>
      <h4>Age: {props.age}</h4>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
