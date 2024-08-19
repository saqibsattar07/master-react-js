import { useState, useEffect } from "react";


export const LearnUseEffect = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };

  const [randomNumber, setRandomNumber] = useState(null);
  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 100) + 1;
    // Generates random number between 1 and 100
    setRandomNumber(newRandomNumber);
  };

  // Example 1- It runs each time when component is mounted and re-render
  useEffect(() => {
    console.log("use Effect Called");
  });


  // Example 2- It runs only once when component is mounted ([] means no dependencies)
  // useEffect(() => {
  //   console.log("use Effect Called");
  // }, []);


  // Example 3- It runs when component is mounted and whenever dependence changes.
  // useEffect(() => {
  //   console.log("use Effect Called", count);
  // }, [count]);


  /* Example 4- The cleanup function (the function you return from useEffect)
  when the component unmounts or when the dependencies is the dependency 
  array change. Since count is in the dependency array, whenever count changes
  the cleanup function is called before the new effect runs. */
  // useEffect(() => {
  //   console.log("use Effect Called", count);
  //   return () => {
  //     console.log("Cleanup function called");
  //   };
  // }, [count]);

  
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleCount}>Increase Count</button>
      <hr />
      <h1>Random Number: {randomNumber}</h1>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
    </>
  );
};
