import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyInfoComponent></MyInfoComponent>
        <p>{/* Edit <code>src/App.js</code> and save to reload. */}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// * Move the three variables you just created into the MyInfoComponent state via the React useState hook. The three state variables should still display on the page.
// * Add three text input fields to the page.
// * Add an onChange handler function to each text input field.
// * Connect the setter function from React's useState hook to the event.target.value of the text input field. If you did it right, the state variables displayed to the page should update in real time as you type.

function MyInfoComponent() {
  const [myName, setMyName] = useState("");
  const [myFavoriteColor, setMyFavoriteColor] = useState("");
  const [myFavoriteMovie, setMyFavoriteMovie] = useState([]);

  return (
    <div>
      <p>
        My name is {myName}
        <br></br>
        <input
          type="text"
          placeholder="     type name here"
          onChange={(event) => {
            const name = event.target.value;
            setMyName(name);
          }}
        ></input>
      </p>

      <p style={{ backgroundColor: myFavoriteColor }}>
        My favorite color is {myFavoriteColor}
        <br></br>
        <input
          type="text"
          placeholder="    favorite color here"
          onChange={(event) => {
            const color = event.target.value;
            setMyFavoriteColor(color);
          }}
        ></input>
      </p>

      <p>
        My favorite movies are:{" "}
        {myFavoriteMovie.map((movie) => (
          <li>{movie}</li>
        ))}
        <br></br>
        <input
          type="text"
          placeholder="    first favorite movie"
          onChange={(event) => {
            const favoriteMovie1 = event.target.value;
            setMyFavoriteMovie([
              favoriteMovie1,
              myFavoriteMovie[1],
              myFavoriteMovie[2],
            ]);
          }}
        ></input>
        &nbsp;
        <input
          type="text"
          placeholder=" second favorite movie"
          onChange={(event) => {
            const favoriteMovie2 = event.target.value;
            setMyFavoriteMovie([
              myFavoriteMovie[0],
              favoriteMovie2,
              myFavoriteMovie[2],
            ]);
          }}
        ></input>
        &nbsp;
        <input
          type="text"
          placeholder="   third favorite movie"
          onChange={(event) => {
            const favoriteMovie3 = event.target.value;
            setMyFavoriteMovie([
              myFavoriteMovie[0],
              myFavoriteMovie[1],
              favoriteMovie3,
            ]);
          }}
        ></input>
      </p>
    </div>
  );
}

export default App;
