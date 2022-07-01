import { useState } from "react";
import "./App.css";
import Box from "./components/Box";
import Button from "./components/Button";

const choice = {
  rock: {
    name: "Rock",
    img: "https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/rock.png",
  },
  scissors: {
    name: "Scissors",
    img: "https://w7.pngwing.com/pngs/879/636/png-transparent-scissors-drawing-cartoon-art-scissors-art-scalable-vector-graphics-line.png",
  },
  paper: {
    name: "Paper",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjx9a4CY64kmEAGBkZOOvql2020gd98i6huw&usqp=CAU",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [comSelect, setComSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    // console.log(`${userChoice} 선택됨`);
    setUserSelect(choice[userChoice]);
    let comChoice = randomChoice();
    setComSelect(choice[comChoice]);
    setResult(winOrLose(choice[userChoice], choice[comChoice]));
  };

  const randomChoice = () => {
    let itemArr = Object.keys(choice);
    let randomItem = itemArr[Math.floor(Math.random() * itemArr.length)];
    console.log(randomItem);
    return randomItem;
  };

  const winOrLose = (user, com) => {
    if (user.name === com.name) {
      return "Draw";
    } else if (user.name === "Rock") {
      return com.name === "Scissors" ? "Win" : "Lose";
    } else if (user.name === "Scissors") {
      return com.name === "Paper" ? "Win" : "Lose";
    } else if (user.name === "Paper") {
      return com.name === "Rock" ? "Win" : "Lose";
    }
  };

  return (
    <>
      <div className="main_box">
        <Box user="You" item={userSelect} result={result} />
        <Box user="Computer" item={comSelect} result={result} />
      </div>
      <div className="main_button">
        <Button play={play}></Button>
      </div>
    </>
  );
}

export default App;
