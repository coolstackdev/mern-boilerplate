import React from 'react';
import './App.css';

import { StateProvider } from "./store";
import { testReducer } from "./reducers";

import TestComponent from "./components/Test";

function App() {
  return (
    <div className="App">
      <StateProvider reducer={testReducer} initialState={{count: 0}}>
        <h1>Welcome to MEAN Boilerplate!</h1>
        <TestComponent />
      </StateProvider>
    </div>
  );
}

export default App;
