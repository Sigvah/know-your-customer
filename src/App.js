import "./App.css";
import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";
import { useState, useRef } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { GetPep } from "./api/axios";
import { PersonInfo } from "./PersonInfo";

const PageWrapper = styled.div`
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [hits, setHits] = useState();
  const inputRef = useRef();
  function handleClick() {
    GetPep(inputRef.current.value).then((foundHits) => {
      setHits(foundHits);
    });
  }
  return (
    <PageWrapper>
      <TextField
        id="standard-basic"
        label="Søk etter person"
        variant="standard"
        name="kycRef"
        inputRef={inputRef}
      />
      <Button variant="contained" onClick={handleClick}>
        <SearchIcon />
      </Button>

      {hits ? (
        hits.numberOfHits < 1 ? (
          <h1>Ingen personer funnet!</h1>
        ) : (
          <h1>Vi fant {hits.numberOfHits} person(er)</h1>
        )
      ) : (
        <div />
      )}
      {hits &&
        hits.numberOfHits > 0 &&
        hits.hits.map((thisPerson, index) => {
          return <PersonInfo key={index} person={thisPerson} />;
        })}
    </PageWrapper>
  );
};

export default App;
