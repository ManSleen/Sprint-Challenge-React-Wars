import React from "react";
import { Card, Icon } from "semantic-ui-react";
import "../App.css";

const Person = ({ person }) => {
  console.log(person);

  const extra = (
    <a>
      <Icon name="user" />
      16 Friends
    </a>
  );

  const meta = (
    <div className="meta-container">
      {`Gender: ${person.gender}`}
      <br />
      {`Birth Year: ${person.birth_year}`}
    </div>
  );

  return (
    <Card
      image={require("../images/stormtrooper.png")}
      header={person.name}
      meta={meta}
      description={`${person.name} is ${person.height}cm tall, weighs ${
        person.mass
      }kg, has an eye color of ${person.eye_color}, a skin color of ${
        person.skin_color
      } and a hair color of ${person.hair_color}. ${
        person.name
      } has starred in ${person.films.length} films. Vehicles owned: ${
        person.vehicles.length
      }.`}
      extra={extra}
    />
  );
};

export default Person;
