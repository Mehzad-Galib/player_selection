import React from "react";
import { useState, useEffect } from "react";
import FakeData from "../src/FakeData/fakeData.json";
import Info from "../src/Components/Info/Info";
import Athletes from "./Components/Athletes/Athletes";

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
    <div className="container text-center">
        <Athletes key={athletes.id} athletes={athletes}></Athletes>
      </div>

      <main className="container my-5">
      <section className="col-md-12 border-end g-5">
      <div className="row row-cols-4">
        
        {player.map((player) => (
          <Info
            handleAddPlayer={handleAddPlayer}
            info={player}
            key={player.id}
          ></Info>
        ))}
      </div>
      
      </section>
      </main>
    </>
  );
}

export default App;
