import React from "react";
import styled from "styled-components";

const Button = ({ play }) => {
  return (
    <div>
      <GameButton onClick={() => play("scissors")}>가위</GameButton>
      <GameButton onClick={() => play("rock")}>바위</GameButton>
      <GameButton onClick={() => play("paper")}>보</GameButton>
    </div>
  );
};

const GameButton = styled.button`
  width: 60px;
  height: 30px;
  margin: 5px;
  background-color: transparent;
  border-radius: 8px;
  border: 2px solid grey;
`;

export default Button;
