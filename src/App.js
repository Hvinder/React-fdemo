import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

function App() {
  const [personsState, updatepersonsState] = useState({
    persons: [
      { id: "rsdhj", name: "xyz", age: 19 },
      { id: "dytjhgj", name: "abc", age: 23 },
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

  const style = {
    backgroundColor: "red",
    color: 'white',
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
    borderRadius: "5px",
    marginTop: "16px",
  };

  let persons = null;

  if (personsState.showPersons) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return (
            <Person
              name={person.name}
              age={person.age}
              key={person.id}
              click={() => deletePersonHandler(index)}
              changed={(event) => nameChangeHandler(event, person.id)}
            />
          );
        })}
      </div>
    );
    style.backgroundColor = 'green';
  }

  return (
    <div className="App">
      <button style={style} onClick={togglePersonsVisibilityHandler}>
        Toggle Persons
      </button>
      {persons}
    </div>
  );
}

export default App;
