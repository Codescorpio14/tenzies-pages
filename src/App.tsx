import Header from "./components/Header";
import Dices from "./components/Dices";
import { useState } from "react";

function App() {
  const [moveCount, setMoveCount] = useState(0);
  return (
    <div className="container">
      <Header count={moveCount} />
      <Dices handleCount={setMoveCount} />
    </div>
  );
}

export default App;
