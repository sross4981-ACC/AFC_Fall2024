import { getRandomNumber } from './componets/helper'
import { useState, useEffect} from 'react';
import './App.css';
import Dice from './componets/Dice';

function App() {
  const [dice1, setDice1] = useState(getRandomNumber());
  const [dice2, setDice2] = useState(getRandomNumber());
  const [sum, setSum] = useState(0);
  const newDice1 = getRandomNumber();
  const newDice2 = getRandomNumber();



  const handleClick = () => {
    setDice1(newDice1);
    setDice2(newDice2);
    const newSum = addedDice(newDice1, newDice2);
    addedDice(newDice1,newDice2)
    console.log(newSum);
    setSum(newSum);
  };

  const addedDice = (dice1, dice2) => {
    const added = dice1 + dice2 + 2;
    console.log(added);
    return added; 
  };
  useEffect(() => {
    return () => {
      handleClick();
    };
  }, []); 

  return (
    <>
    <div id='background'>
      <div id='title'>
      <h1>Dice Rollers</h1>
      </div>
      <div id='diceHolder'>
      <div id='hello'> 
        <Dice number={dice1} /> 
        </div> <div id='world'> 
          <Dice number={dice2} /> 
          </div>
          </div>
          <div id='roll'>
      <button onClick={handleClick}>Roll</button>
      </div>
      <h2>Added Dice Value: {sum}</h2>
      </div>
    </>
  );
}

export default App;
