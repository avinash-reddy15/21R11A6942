import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card rounded-xl bg-slate-500 h-screen w-80">
        <button
          className="bg-red text-pink-500 "
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs font-medium text-red-600 ">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
