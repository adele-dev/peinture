import React from "react";
import PaintingsList from "./Components/PaintingsList";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <h1>Bienvenue dans la galerie du petit prince</h1>
      <Link to="/login">
        <button>Modifier la galerie</button>
      </Link>
      <PaintingsList />
    </div>
  );
}

export default Home;
