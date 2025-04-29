import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ar-button-5 onClick={() => setCount(count + 1)}>
      点击 {count} 次
    </ar-button-5>
  );
}

export default App;
