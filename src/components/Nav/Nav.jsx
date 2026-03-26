import React from "react";

const Nav = ({ coin }) => {
  return (
    <nav className="p-4 flex justify-between items-center">
      <div>
        <img src="/public/logo.png" alt="" />
      </div>
      <ul className="flex gap-3 justify-center items-center" >
        <li>Home</li>
        <li>Fixture</li>
        <li>Teams</li>
        <li>Schedules</li>
        <li>
          <button className="btn btn-primary" > {coin} coins </button>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
