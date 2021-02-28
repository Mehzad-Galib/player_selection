import { useState, useEffect } from "react";
import FakeData from "../src/MOCK_DATA.json";
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
      <Athletes athletes={athletes}></Athletes>
      </div>
      <div className="d-flex">
      <header className="container my-5">
          {player.map((player) => (
            <Info
              handleAddPlayer={handleAddPlayer}
              info={player}
              key={player.id}
            ></Info>
          ))}
      </header>
      </div>
    </>
  );
}

export default App;
