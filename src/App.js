import React from 'react';
import './App.css'
import DataFetching from './components/DataFetching';
import ComponentA from './components/ComponentA';

export const NameContext = React.createContext()

function App() {
  return (
    <div className="App">
      <DataFetching />
      <NameContext.Provider value = {"Alex"}>
        <ComponentA /> 
      </NameContext.Provider>

     </div>
  );
}

export default App;
