import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import axios from "axios";
import Tab from "./components/Tab/Tab";
import Card from "./components/Card/Card";
import { Suspense } from "react";
import CardParent from "./components/Card/CardParent";

let coins = 15000;
const players = axios.get("/public/players.json");

function App() {
  return (
    <>
      <Nav coin={coins}></Nav>
      <Hero></Hero>
      <Tab></Tab>
      <Suspense fallback={<p>Loading...</p>}>
        <CardParent players={players}></CardParent>
      </Suspense>
    </>
  );
}

export default App;
