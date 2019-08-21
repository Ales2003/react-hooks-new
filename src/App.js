import React from 'react';
import './App.css'
import CustomHookOne from './components/CustomHookOne';
import CustomHookTwo from './components/CustomHookTwo';

export const NameContext = React.createContext()

function App() {
  return (
    <div className="App">
        <CustomHookOne />
        <CustomHookTwo />
     </div>
  );
}

export default App;
