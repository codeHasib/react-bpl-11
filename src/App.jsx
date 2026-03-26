import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import axios from "axios";
import Tab from "./components/Tab/Tab";
import Card from "./components/Card/Card";
import { Suspense, useState } from "react";
import CardParent from "./components/Card/CardParent";

let coins = 15000;
const players = axios.get("/public/players.json");
const selectedPlayers = [];

function App() {
  const [selectedTab, setSelectedTab] = useState("available");

  // Tab Function
  function toggleTab(e) {
    const value = e.target.value;
    setSelectedTab(value);
  }

  // choose player function
  function selectedPlayer(name, position, country) {
    const obj = {
      name: name,
      position: position,
      country: country,
    };
    selectedPlayers.push(obj);
    console.log(selectedPlayers);
  }

  return (
    <>
      <Nav coin={coins}></Nav>
      <Hero></Hero>
      <Tab toggleTab={toggleTab} selectedTab={selectedTab}></Tab>
      <Suspense fallback={<p>Loading...</p>}>
        <CardParent
          selectedPlayer={selectedPlayer}
          selectedTab={selectedTab}
          players={players}
          selectedPlayers={selectedPlayers}
        ></CardParent>
      </Suspense>
    </>
  );
}

export default App;
