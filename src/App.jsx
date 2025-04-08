// import { useState } from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-start primaryTextColor min-h-[100vh]">
      <Navbar/>
      <div className="center tertiaryBackgroundColor w-full flex-grow">
        <Card/>
      </div>
    </div>
  );
}

export default App;
