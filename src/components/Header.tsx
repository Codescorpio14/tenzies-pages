export default function Header({ count }: { count: number }) {
  return (
    <header>
      <div className="move-count">{count}</div>
      <h1>Tenzies</h1>
      <p>
        Roll the dice until all the dices are same. Click a die to freeze it at
        its current value between rolls.
      </p>
    </header>
  );
}
