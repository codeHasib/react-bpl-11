import React from "react";

const Card = ({
  img,
  name,
  country,
  position,
  rating,
  battingStyle,
  bowlingStyle,
  price,
}) => {
  return (
    <div className="p-4 border rounded-2xl" >
      <div>
        <img className="h-65" src={img} alt="" />
        <div>
        <h2 className="text-[18px] font-semibold" >{name}</h2>
          <p> {country} </p>
          <button className="btn" > {position} </button>
        </div>
        <div>
            <h2>
                Rating
            </h2>
            <h2>
                {rating}
            </h2>
        </div>
        <div>
            <h2>
                {battingStyle}
            </h2>
            <h2>
                {bowlingStyle}
            </h2>
        </div>
        <div>
            <h2>
                Price: {price}
            </h2>
            <button className="btn" >
                Choose Player
            </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
