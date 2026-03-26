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
      <div className="space-y-3">
        <img className="h-65" src={img} alt="" />
        <h2 className="text-[18px] font-semibold" >{name}</h2>
        <div className="flex justify-between items-center border-b pb-2" >
          <p className="font-bold" > {country} </p>
          <button className="btn" > {position} </button>
        </div>
        <div className="flex justify-between items-center">
            <h2 className="font-bold" >
                Rating
            </h2>
            <h2 className="font-bold" >
                {rating}
            </h2>
        </div>
        <div className="flex justify-between items-center" >
            <h2 className="font-light" >
                {battingStyle}
            </h2>
            <h2 className="font-light" >
                {bowlingStyle}
            </h2>
        </div>
        <div className="flex justify-between items-center">
            <h2>
                Price: ${price}
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
