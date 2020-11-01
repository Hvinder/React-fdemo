import React from "react";
// import "./Person.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #aaa;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = (props) => {
  const personStyle = {
    "@media (min-width : 500px)": {
      width: "450px",
    },
  };
  return (
    <StyledDiv>
      <h3 onClick={props.click}>
        Name: {props.name} <span>{props.children}</span>
      </h3>
      <h4>Age: {props.age}</h4>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
};

export default person;
