import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState(false);
  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        Current count is:&nbsp;<span data-test="count">{counter}</span>
      </h1>
      <button
        className="increase-button"
        data-test="increment-button"
        onClick={() => {
          setError(false);
          setCounter(counter + 1);
        }}
      >
        Increment counter
      </button>
      <button
        className="decrease-button"
        data-test="decrement-button"
        onClick={() => {
          if (counter > 0) {
            setCounter(counter - 1);
          } else {
            setError(true);
          }
        }}
      >
        Decrement counter
      </button>
      <div
        data-test="error-message"
        className={`error ${error ? "" : "hidden"}`}
      >
        The counter cant go bellow zero
      </div>
    </div>
  );
}

export default App;

/* 
OVERVIEW OF WHAT WE DID

Set up a simple React app with Jest and Enzyme
Used Enzymes shallow() function to render a component
Tested that required DOM elements were rendered using find()
Used Enzymes .text() method to extract the text of an element
USED simulate to interact with rendered elements (clicked button)
Tested the component for updates after interaction
Created re-usable setup() and findByTestAttr() functions
*/
