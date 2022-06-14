import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const [user, setUser] = useState("jessjelly");

  return (
    <div className="App">
      <Header user={user} />
      <Home />
    </div>
  );
}

export default App;
