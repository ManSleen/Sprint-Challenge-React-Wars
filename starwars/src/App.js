import React, { useState, useEffect } from "react";
import People from "./components/People";
import { Loader, Dimmer, Icon, Button } from "semantic-ui-react";
import axios from "axios";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

const App = () => {
  const [people, setPeople] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${page}`)
      .then(res => {
        console.log(res);
        // console.log(res.data.results);
        setPeople(res.data.results);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
    setIsLoading(true);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      setIsLoading(true);
    }
  };

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="buttons-holder">
        <Button color="yellow" onClick={prevPage} icon labelPosition="left">
          <Icon name="left arrow" />
          Previous Page
        </Button>
        <Button color="orange" onClick={nextPage} icon labelPosition="right">
          <Icon name="right arrow" />
          Next Page
        </Button>
      </div>
      {!isLoading ? (
        <People people={people} />
      ) : (
        <Dimmer active>
          <Loader>Loading...</Loader>
        </Dimmer>
      )}
    </div>
  );
};

export default App;
