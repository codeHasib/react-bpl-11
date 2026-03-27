import React, { use, useState } from "react";
import Card from "./Card";
import CardTab from "./CardTab";
import { toast } from "react-toastify";

const CardParent = ({ players, selectedTab, setCoins, coins }) => {
  const res = use(players);
  const data = res.data;

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  // choose player function
  function choosePlayer(id, name, position, country, price) {
    const obj = {
      id: id,
      name: name,
      position: position,
      country: country,
      price: price,
    };
    setSelectedPlayers((prev) => [...prev, obj]);
    let newCoins = coins - price;
    console.log(newCoins);
    if (newCoins > 0) {
      setCoins(newCoins);
      toast.success(`Successfully added ${name}`);
    } else {
      toast.warn("Insufficient coins");
    }
  }

  // delete player from selected
  function deletePlayer(id, price) {
    const filtered = selectedPlayers.filter((p) => p.id !== id);
    setSelectedPlayers(filtered);
    console.log(price);
    let newCoins = coins + price;
    setCoins(newCoins);
    toast.success("Player Deleted Successfully");
  }

  return (
    <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-4">
      {selectedTab === "available" ? (
        data.map((player) => (
          <Card
            id={player.id}
            key={player.id}
            img={player.image}
            name={player.name}
            country={player.country}
            position={player.role}
            rating={player.rating}
            bowlingStyle={player.bowlingStyle}
            battingStyle={player.battingStyle}
            price={player.price}
            selectedPlayer={choosePlayer}
            isSelected={selectedPlayers.some((p) => p.id === player.id)}
          ></Card>
        ))
      ) : selectedPlayers.length > 0 ? (
        selectedPlayers.map((players, index) => (
          <CardTab
            key={index}
            name={players.name}
            country={players.country}
            position={players.position}
            id={players.id}
            price={players.price}
            deletePlayer={deletePlayer}
          ></CardTab>
        ))
      ) : (
        <h2>nothing to show</h2>
      )}
    </div>
  );
};

export default CardParent;
