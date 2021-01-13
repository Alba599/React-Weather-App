import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>React Weather App</h1>
     </header>
     <main>
       <Forecast />
     </main>
      {/* <header className="App-header">
        <h1 className="Title">7 Day Forecast</h1>
        <p className="days">Monday</p>
        <p className="days">Tuesday</p>
        <p className="days">Wednesday</p>
        <p className="days">Thursday</p>
        <p className="days">Friday</p>
        <p className="days">Saturday</p>
        <p className="days">Sunday</p>
      </header> */}
      <footer>Page created by Alba Halili</footer>
    </div>
  );
}

export default App;
