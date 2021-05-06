import React from "react";
import { useState, useEffect } from "react";
import FakeData from "../src/FakeData/fakeData.json";
import Info from "../src/Components/Info/Info";
import Athletes from "./Components/Athletes/Athletes";
import './App.css';

function App() {
  const [player, setPlayer] = useState([]);
  useEffect(() => {
    setPlayer(FakeData);
  }, []);
  const [athletes, setAthletes] = useState([]);
  const handleAddPlayer = (addPlayer) => {
    const newAthletes = [...athletes, addPlayer];
    setAthletes(newAthletes);
  };
  return (
    <>
      <h1 className='text-center border'>Player Selection</h1>
      <div className="d-flex container row flex-row-reverse">

        <div className="col-md-9 col-sm-12">
        <div className="row justify-content-evenly">
        {player.map((player) => (
              <Info
                handleAddPlayer={handleAddPlayer}
                info={player}
                key={player.id}
              ></Info>
            ))}
        </div>
        </div>

        <div className="col-md-3">
        <Athletes key={athletes.id} athletes={athletes}></Athletes>
        </div>
      </div>

      

     
    </>
  );
}

export default App;
