import React from 'react';
import './App.css'
import ReducerCounter from './components/ReducerCounter';

export const NameContext = React.createContext()

function App() {
  return (
    <div className="App">
      <ReducerCounter />
     </div>
  );
}

export default App;
