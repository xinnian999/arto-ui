import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(true);

  console.log(value);
  

  return (
    <div className="main">
      <ar-switch-1 value={value} change={setValue} />
    </div>
  );
}

export default App;
