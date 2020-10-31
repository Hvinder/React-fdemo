import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

function App() {
  const [personsState, updatepersonsState] = useState({
    persons: [
      {
        name: "xyz",
        age: 19,
      },
      {
        name: "abc",
        age: 23,
      },
    ],
    showPersons: true,
  });

  const personsStateHandler = (newName) => {
    updatepersonsState({
      ...personsState,
      persons: [
        {
          name: "xyz",
          age: 19,
        },
        {
          name: newName,
          age: 23,
        },
      ],
    });
  };

  const nameChangeHandler = (event) => {
    updatepersonsState({
      ...personsState,
      persons: [
        {
          name: event.target.value,
          age: 19,
        },
        {
          name: "abc",
          age: 23,
        },
      ],
    });
  };

  const togglePersonsVisibilityHandler = () => {
    const show = personsState.showPersons;
    updatepersonsState({ ...personsState, showPersons: !show });
  };

  let persons = null;

  if (personsState.showPersons) {
    persons = (
      <div>
        {personsState.persons.map((person) => {
          return <Person name={person.name} age={person.age} />;
        })}
        {/* <Person
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}
          inputName={nameChangeHandler}
        />
        <Person
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
          // click={personsStateHandler.bind(this, "Hvinder")}
          click={() => personsStateHandler("Harry")}
        >
          (Me xD)
        </Person> */}
      </div>
    );
  }

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
    borderRadius: "5px",
    marginTop: "16px",
  };

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
