import "./App.css";
import { TextField, Container, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";
import axios from "axios";
import { dictionary } from "./types/types";
import { Cards } from "./components/card";

function App() {
  const [definition, setDefinition] = useState<dictionary[]>([]);
  console.log(definition);
  console.log("definition", definition);
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const getDefinition = (word: string) => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => {
        setError(false);
        setDefinition(res.data);
      })
      .catch(() => {
        setError(true);
      });
  };
  const searchDefinition = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.charCode === 13 && input) {
      getDefinition(input);
    }
  };
  const onInput = (e: any) => {
    const validation = new RegExp(/^[a-zA-Z ]*$/);
    if (validation.test(e.target.value)) {
      setInput(e.target.value);
    }
  };
  return (
    <Container className="App">
      <h1>English Dictionary App</h1>
      <TextField
        variant="standard"
        placeholder="enter your word here"
        onChange={(e) => onInput(e)}
        onKeyPress={(e) => searchDefinition(e)}
        onSubmit={() => getDefinition(input)}
        value={input}
        InputProps={{
          ...({ ["data-testid"]: "input-search" } as any),
          endAdornment: (
            <InputAdornment
              position="end"
              onClick={() => getDefinition(input)}
              data-testid="search-icon"
            >
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      {error ? (
        <div>
          <h1>Word definition not found :(</h1>
        </div>
      ) : definition.length ? (
        definition &&
        definition.map((item: dictionary, index: number) => {
          return (
            <div key={index}>
              <Cards
                word={item.word}
                origin={item.origin}
                meanings={item.meanings}
                phonetic={item.phonetic}
                phonetics={item.phonetics}
              />
            </div>
          );
        })
      ) : null}
    </Container>
  );
}

export default App;
