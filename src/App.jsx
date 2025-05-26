import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Lobby from "./components/Lobby";
import GameBoard from "./components/GameBoard";
import Bank from "./components/Bank";
import Rules from "./components/Rules";
import Results from "./components/Results";
import Test from "./pages/Test";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lobby" element={<Lobby />} />
      <Route path="/game" element={<GameBoard />} />
      <Route path="/bank" element={<Bank />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/results" element={<Results />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default App;
