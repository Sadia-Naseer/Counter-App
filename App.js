import React, { useState } from 'react';
import './App.css';

function App() {
  // Initialize the count state to 0
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Counter Application</h1>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
