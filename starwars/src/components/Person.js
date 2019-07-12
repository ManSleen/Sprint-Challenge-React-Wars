import React from "react";
import { Card, Icon } from "semantic-ui-react";

const Person = ({ person }) => {
  console.log(person);

  const extra = (
    <a>
      <Icon name="user" />
      16 Friends
    </a>
  );

  return (
    <Card
      image={require("../images/stormtrooper.png")}
      header={person.name}
      meta={person.gender}
      description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
      extra={extra}
    />
  );
};

export default Person;
