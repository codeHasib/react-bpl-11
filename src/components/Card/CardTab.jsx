import React from "react";

const CardTab = ({ name, country, position }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{country}</p>
      <h3>{position}</h3>
    </div>
  );
};

export default CardTab;
