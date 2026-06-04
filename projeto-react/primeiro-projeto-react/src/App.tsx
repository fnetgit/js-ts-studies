import { useState } from "react";
import { Display } from "./components/Display";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Contador de curtidas</h1>
      <Display count={count} />
      <button onClick={() => setCount(count + 1)}>Curtir</button>
      <button onClick={() => setCount(0)}>Resetar</button>
    </div>
  );
}

export default App;
