import React from "react";
import Person from "./Person";

const People = ({ people }) => {
  console.log(people);
  return (
    <div>
      {people ? (
        people.map(person => {
          return <Person person={person} />;
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default People;
