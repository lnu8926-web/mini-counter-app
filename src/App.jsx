import "./App.css";
import { useState } from "react";

import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Reset from "./components/Reset";

function App() {
  const [count, setCount] = useState(0);
  const onChangeCount = (value) => {
    const newCount = count + value;
    if (newCount >= -999 && newCount <= 999) {
      setCount(count + value);
    }
  };
  const onChangeReset = (value) => {
    setCount(0);
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section className="Viewer">
        <Viewer count={count} />
      </section>
      <section className="Controller">
        <Controller onChangeCount={onChangeCount} />
      </section>
      <section className="Reset">
        <Reset onChangeReset={onChangeReset} />
      </section>
    </div>
  );
}

export default App;
