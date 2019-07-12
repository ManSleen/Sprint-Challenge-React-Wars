import React from "react";
import Person from "./Person";
import { Loader } from "semantic-ui-react";
import { Card } from "semantic-ui-react";
import "../App.css";

const People = ({ people }) => {
  console.log(people);
  return (
    <div className="people-container">
      <Card.Group centered>
        {people ? (
          people.map(person => {
            return <Person person={person} />;
          })
        ) : (
          <Loader active>Loading...</Loader>
        )}
      </Card.Group>
    </div>
  );
};

export default People;
