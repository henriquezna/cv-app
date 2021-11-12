import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import CreateForms from './components/CreateForms';
import Preview from './components/Preview';

function App() {
  const [data, setData] = useState("JIMBO");

  const dataToParent = (name) => {
    console.log(name, "SEND FUNCTION");
    setData(name);
  }

  useEffect(() => { 
       console.log(data, 'mainApp USEEFFECT');  
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <h1>Hello World!</h1>
        <CreateForms datas={data} dataToParent={dataToParent} />
        <Preview name={data}/>
      </body>
    </div>
  );
}

export default App;