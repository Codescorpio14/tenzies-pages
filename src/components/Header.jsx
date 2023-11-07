export default function Header({ count }) {
  return (
    <header>
      <div className="move-count">{count}</div>
      <h1>Tenzies</h1>
      <p>
        Roll until dice are the same. Click each die to freeze it at its current
        value betweenrolls.
      </p>
    </header>
  );
}
