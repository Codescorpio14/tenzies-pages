import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from "lucide-react";

type DieProps = {
  value: { number: number; isHeld: boolean };
  holdDie: () => void;
};
export default function Die({ value, holdDie }: DieProps) {
  const diceComponents = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
  const DiceComponent = diceComponents[value.number - 1];

  const className = value.isHeld ? "dice-pieces dice-held" : "dice-pieces";
  const dieClassName = value.isHeld ? "die die-held" : "die";

  return (
    <div className={dieClassName} onClick={holdDie}>
      <DiceComponent className={className} />
    </div>
  );
}
