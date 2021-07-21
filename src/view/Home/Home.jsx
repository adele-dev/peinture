import React from "react";
import AdminPage from "./Components/AdminPage";
import PaintingsList from "./Components/PaintingsList";

function Home(props) {
  return (
    <div>
      <h2>Galerie des tableaux</h2>
      <PaintingsList />
      <button>Modifier la galerie</button>
      <AdminPage />
    </div>
  );
}

export default Home;
