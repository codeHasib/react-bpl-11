import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import axios from "axios";
import Tab from "./components/Tab/Tab";
import Card from "./components/Card/Card";
import { Suspense, useState } from "react";
import CardParent from "./components/Card/CardParent";
import { ToastContainer } from "react-toastify";

const players = axios.get("/public/players.json");

function App() {
  const [coins, setCoins] = useState(50000);
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
        <CardParent
          selectedTab={selectedTab}
          players={players}
          setCoins={setCoins}
          coins={coins}
        ></CardParent>
      </Suspense>

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
