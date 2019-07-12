import React from "react";
import Person from "./Person";

import { Card } from "semantic-ui-react";
import "../App.css";

const People = ({ people }) => {
  console.log(people);
  return (
    <div className="people-container">
      <Card.Group centered>
        {people.map(person => {
          return <Person key={person.name} person={person} />;
        })}
      </Card.Group>
    </div>
  );
};

export default People;
