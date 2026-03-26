import React, { use } from "react";
import Card from "./Card";
import CardTab from "./CardTab";

const CardParent = ({
  players,
  selectedTab,
  selectedPlayer,
  selectedPlayers,
}) => {
  const res = use(players);
  const data = res.data;
  return (
    <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-4">
      {selectedTab === "available" ? (
        data.map((player) => (
          <Card
            key={player.id}
            img={player.image}
            name={player.name}
            country={player.country}
            position={player.role}
            rating={player.rating}
            bowlingStyle={player.bowlingStyle}
            battingStyle={player.battingStyle}
            price={player.price}
            selectedPlayer={selectedPlayer}
          ></Card>
        ))
      ) : selectedPlayers.length > 0 ? (
        selectedPlayers.map((players, index) => <CardTab key={index} name={players.name} country={players.country} position={players.position}></CardTab>)
      ) : (
        <h2>nothing to show</h2>
      )}
    </div>
  );
};

export default CardParent;
