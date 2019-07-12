import React, { useState, useEffect } from "react";
import People from "./components/People";
import axios from "axios";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

const App = () => {
  const [people, setPeople] = useState(null);
  const [page, setPage] = useState("");

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res => {
        // console.log(res);
        // console.log(res.data.results);
        setPeople(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <People people={people} />
    </div>
  );
};

export default App;
