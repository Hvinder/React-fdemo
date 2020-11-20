import React, { useEffect } from "react";
import cockPitClasses from "./Cockpit.module.css";

const Cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] initialized");
  }, []); // Add arguments to array as dependencies on which to call the function

  const paraClasses = [];
  if (props.persons.length <= 2) {
    paraClasses.push(cockPitClasses.red);
  }
  if (props.persons.length <= 1) {
    paraClasses.push(cockPitClasses.bold);
  }
  let btnClasses = "";
  if (props.showPersons) {
    btnClasses = cockPitClasses.Red;
  }
  return (
    <div className={cockPitClasses.Cockpit}>
      <p className={paraClasses.join(" ")}>List of persons</p>
      <button className={btnClasses} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
