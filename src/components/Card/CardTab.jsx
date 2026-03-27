import React from "react";

const CardTab = ({ id, name, country, position, deletePlayer, price}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{country}</p>
      <h3>{position}</h3>
      <button onClick={()=> deletePlayer(id, price)} className="btn btn-primary" >Delete</button>
    </div>
  );
};

export default CardTab;
