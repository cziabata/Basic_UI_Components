import React from "react";
import './App.css';
import { Counter } from "./UI/Counter";
import { Posts } from "./UI/Posts";

function App() {
  return (
    <div className="App">
      <Counter />
      <Posts />
    </div>
  );
}

export default App;
