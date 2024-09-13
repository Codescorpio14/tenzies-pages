import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Die from "./Die";
import Confetti from "react-confetti";

type DicesProps = {
  handleCount: React.Dispatch<React.SetStateAction<number>>;
};

export default function Dices({ handleCount }: DicesProps) {
  const [dices, setDices] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const isHeldValue = dices.every((dice) => dice.isHeld);
    const firstDiceNumber = dices[0].number;
    const allNumbersMatch = dices.every(
      (dice) => dice.number === firstDiceNumber
    );
    if (isHeldValue && allNumbersMatch) {
      setTenzies(true);
    }
  }, [dices]);

  function allNewDice() {
    const newDices = [];
    for (let i = 0; i < 10; i++) {
      newDices.push({
        id: nanoid(4),
        number: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
      });
    }
    return newDices;
  }

  // Roll Dices Function
  function rollDice() {
    if (!tenzies) {
      setDices((preDices) => {
        return preDices.map((preDice) => {
          return preDice.isHeld
            ? preDice
            : {
                id: nanoid(4),
                number: Math.floor(Math.random() * 6) + 1,
                isHeld: false,
              };
        });
      });
      handleCount((preCount) => preCount + 1);
    } else {
      setDices(allNewDice());
      setTenzies(false);
      handleCount((preCount) => (preCount = 0));
    }
  }

  // Hold a Dice Function
  function Hold(Id: string) {
    setDices((preDices) => {
      return preDices.map((dice) =>
        dice.id === Id ? { ...dice, isHeld: !dice.isHeld } : dice
      );
    });
  }

  return (
    <>
      {tenzies && <Confetti />}
      <div className="dices">
        {dices.map((dice) => (
          <Die key={dice.id} value={dice} holdDie={() => Hold(dice.id)} />
        ))}
      </div>
      <button className="btn" onClick={rollDice}>
        {tenzies ? "Play Again!" : "Roll"}
      </button>
    </>
  );
}
