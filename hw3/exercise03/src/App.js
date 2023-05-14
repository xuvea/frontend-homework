import { React, useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./pages/Navbar";
function App() {
  const [gameOfThronesData, setgameOfThronesData] = useState([]);

  useEffect(() => {
    axios
      .get("https://thronesapi.com/api/v2/Characters")
      .then((response) => {
        setgameOfThronesData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <Navbar gameOfThronesData={gameOfThronesData} />;
}

export default App;
