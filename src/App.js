import React from 'react';
import './App.css'
import ReduceCounterMultipleReducers from './components/ReduceCounterMultipleReducers';

export const NameContext = React.createContext()

function App() {
  return (
    <div className="App">
        <ReduceCounterMultipleReducers />
     </div>
  );
}

export default App;
