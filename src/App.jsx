import { useState } from "react";
import './App.css'
function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card text-center shadow p-4" >
        <h3 className="mb-3">Counter App</h3>

        <h1 className="display-4 mb-4">{count}</h1>

        <div className="d-flex justify-content-between">
          <button
            className="btn btn-danger"
            onClick={decrement}
          >
            -
          </button>

          <button
            className="btn btn-success"
            onClick={increment}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
