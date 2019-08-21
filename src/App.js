import React from 'react';
import './App.css'
import ReduceCounterStateActionObject from './components/ReduceCounterStateActionObject';

export const NameContext = React.createContext()

function App() {
  return (
    <div className="App">
        <ReduceCounterStateActionObject />
     </div>
  );
}

export default App;
