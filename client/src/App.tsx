import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // interface IDuck {
  //   name: number,
  //   surname: string,
  //   makeSound: (sound: string) => void
  // }
  // const duck: IDuck = {
  //   name: 6,
  //   surname: " dwadwa"
  //   makeSound: (sound: any) => console.log("ddwadwa")
  // }
  // const duck3: IDuck = {
  //   name: 0,
  //   surname: '',
  //   makeSound: (sound) => console.log("dwa")
  // }
  // console.log(duck.name);
  // duck.name = 5;
  // console.log(duck3);
  // duck3.makeSound(1); //any de versen number yazamıyorsun

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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

export default App;
