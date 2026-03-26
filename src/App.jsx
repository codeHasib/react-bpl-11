import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import axios from "axios";
import Tab from "./components/Tab/Tab";
import Card from "./components/Card/Card";
import { Suspense, useState } from "react";
import CardParent from "./components/Card/CardParent";

let coins = 15000;
const players = axios.get("/public/players.json");

function App() {
  const [selectedTab, setSelectedTab] = useState("available");

  // Tab Function
  function toggleTab(e) {
    const value = e.target.value;
    setSelectedTab(value);
  }
  return (
    <>
      <Nav coin={coins}></Nav>
      <Hero></Hero>
      <Tab toggleTab={toggleTab} selectedTab={selectedTab}></Tab>
      <Suspense fallback={<p>Loading...</p>}>
        <CardParent selectedTab={selectedTab} players={players}></CardParent>
      </Suspense>
    </>
  );
}

export default App;
