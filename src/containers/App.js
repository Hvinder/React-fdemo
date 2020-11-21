import React, { useState } from "react";
import appClasses from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

function App() {
  const [personsState, updatepersonsState] = useState({
    persons: [
      { id: "rsdhj", name: "xyz", age: 19 },
      { id: "dytjhgj", name: "abc", age: 23 },
      { id: "iuttrsdhg", name: "pqr", age: 37 },
    ],
    showPersons: true,
  });

  const nameChangeHandler = (event, id) => {
    const indexToBeUpdated = personsState.persons.findIndex(
      (person) => person.id === id
    );
    const personToBeUpdated = { ...personsState.persons[indexToBeUpdated] };
    personToBeUpdated.name = event.target.value;

    const updatedPersons = [...personsState.persons];
    updatedPersons[indexToBeUpdated] = personToBeUpdated;

    updatepersonsState({
      ...personsState,
      persons: updatedPersons,
    });
  };

  const togglePersonsVisibilityHandler = () => {
    const toggleValue = personsState.showPersons;
    updatepersonsState({ ...personsState, showPersons: !toggleValue });
  };

  const deletePersonHandler = (personIndex) => {
    const updatedPersons = [...personsState.persons];
    updatedPersons.splice(personIndex, 1);
    updatepersonsState({ ...personsState, persons: updatedPersons });
  };

  let persons = null;

  if (personsState.showPersons) {
    persons = (
      <Persons
        persons={personsState.persons}
        clicked={deletePersonHandler}
        changed={nameChangeHandler}
      />
    );
  }

  return (
    <div className={appClasses.App}>
      <Cockpit
        showPersons={personsState.showPersons}
        persons={personsState.persons}
        clicked={togglePersonsVisibilityHandler}
      />
      {persons}
    </div>
  );
}

export default App;
