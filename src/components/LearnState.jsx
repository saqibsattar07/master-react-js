import { useState } from "react";

export const LearnState = () => {
  // const [currentValue, Function] = useState()
  const [number, setNumber] = useState(4);
  console.log("Number: ", number);

  const handleNum = () => {
    setNumber(9);
  };

  const [position, setPosition] = useState({ x: 1, y: 2 });
  console.log("Position: ", position);

  const handlePosition = () => {
    setPosition({ x: 4, y: 8 });
  };

  return (
    <>
      <h1>Number</h1>
      <button onClick={handleNum}>Change Number</button>

      <h1>
        Position: {position.x} {position.y}
      </h1>
      <button onClick={handlePosition}>Change Position</button>
    </>
  );
};
