import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Person from "./Person/Person";

const StyledButton = styled.button`
  background-color: ${(props) => (props.alt ? "green" : "red")};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  borderradius: 5px;
  margintop: 16px;

  &:hover {
    background-color: ${(props) => (props.alt ? "lightgreen" : "salmon")};
    color: black;
  }
`;

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

  const paraClasses = [];
  if (personsState.persons.length <= 2) {
    paraClasses.push("red");
  }
  if (personsState.persons.length <= 1) {
    paraClasses.push("bold");
  }

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
  }

  return (
    <div className="App">
      <p className={paraClasses.join(" ")}>List of persons</p>
      <StyledButton
        alt={personsState.showPersons}
        onClick={togglePersonsVisibilityHandler}
      >
        Toggle Persons
      </StyledButton>
      {persons}
    </div>
  );
}

export default App;
