import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { puppyList } from "./data";

function App() {
  const [puppies, setpuppies] = useState(puppyList);

  return (
    <>
      <div>
        {puppies.map((puppy) => {
          return <p key={puppy.id}>{puppy.name}</p>;
        })}
      </div>
    </>
  );
}

export default App;
