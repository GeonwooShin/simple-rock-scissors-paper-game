import React from "react";

const Box = ({ user, item, result }) => {
  let finalResult;
  if (user === "Computer" && result !== "Draw" && result !== "") {
    finalResult = result === "Win" ? "Lose" : "Win";
  } else {
    finalResult = result;
  }
  return (
    <div className={`box ${finalResult}`}>
      <h1 className="game_user">{user}</h1>
      <img
        className="item-img"
        src={item && item.img}
        alt={item && item.name}
      ></img>
      <h2 className="game_result">{finalResult}</h2>
    </div>
  );
};

export default Box;
