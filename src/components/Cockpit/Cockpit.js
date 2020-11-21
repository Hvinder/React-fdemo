import React, { useEffect, useRef } from "react";
import cockPitClasses from "./Cockpit.module.css";

const Cockpit = (props) => {
  const btnRef = useRef(null);
  useEffect(() => {
    console.log("[Cockpit.js] initialized");
    // btnRef.current.click();
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
      <button ref={btnRef} className={btnClasses} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
