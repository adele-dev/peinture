import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      backgroundColor: "lightgreen",
      margin: 0,
    },
    li: {
      width: "30%",
      margin: "0 auto",
      listStyle: "none",
    },
  },
}));

const paintings = [
  {
    id: 1,
    title: "La fleur enchantée",
    artist: "De Vinci",
    format: "80x80",
    price: 347000,
    description: "Très beau tableau",
    image: "https://tinyurl.com/8bd6zzxd",
  },
  {
    id: 2,
    title: "La vie colorée",
    artist: "Monet",
    format: "80x80",
    price: 347000,
    description: "Très beau tableau",
    image: "https://tinyurl.com/99d8kvcs",
  },
  {
    id: 3,
    title: "Interspace",
    artist: "Renoir",
    format: "80x80",
    price: 347000,
    description: "Très beau tableau",
    image: "https://tinyurl.com/ej5hr2xc",
  },
  {
    id: 4,
    title: "La romantique",
    artist: "Chagall",
    format: "80x80",
    price: 347000,
    description: "Très beau tableau",
    image: "https://tinyurl.com/4dffwtss",
  },
  {
    id: 1,
    title: "La fleur enchantée",
    artist: "De Vinci",
    format: "80x80",
    price: 347000,
    description: "Très beau tableau",
    image: "https://tinyurl.com/8bd6zzxd",
  },
  {
    id: 2,
    title: "La vie colorée",
    artist: "Monet",
    format: "80x80",
    price: 347000,
    description: "Très beau tableau",
    image: "https://tinyurl.com/99d8kvcs",
  },
  {
    id: 3,
    title: "La fleur enchantée",
    artist: "Renoir",
    format: "80x80",
    price: 347000,
    description: "Très beau tableau",
    image: "https://tinyurl.com/ej5hr2xc",
  },
  {
    id: 4,
    title: "La fleur enchantée",
    artist: "Chagall",
    format: "80x80",
    price: 347000,
    description: "Très beau tableau",
    image: "https://tinyurl.com/4dffwtss",
  },
];

function AdminPage(props) {
  const classes = useStyles();
  const [form, setForm] = useState({
    title: "",
    artist: "",
    format: "",
    price: 0,
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePrice = (e) => {
    const value = e.target.value;
    let price;
    if (value !== "") {
      price = parseInt(e.target.value);
    } else {
      price = 0;
    }
    setForm({ ...form, ...{ price: price } });
  };

  // Query to post datas into table GAMES - INSERT INTO
  const submitForm = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/paintings", form);
  };

  return (
    <div>
      <h1>Modification de la galerie</h1>
      <Link to="/">
        <button>Retour</button>
      </Link>
      <h2>Ajouter un nouveau tableau</h2>
      <form onSubmit={submitForm}>
        <fieldset>
          <legend>Insérer tableau</legend>
          <div>
            <label for="">Titre</label>
            <input
              type="text"
              onChange={handleChange}
              name="title"
              value={form.title}
            />
          </div>
          <div>
            <label for="">Artiste</label>
            <input
              type="text"
              onChange={handleChange}
              name="artist"
              value={form.artist}
            />
          </div>
          <div>
            <label for="">Format</label>
            <input
              type="text"
              onChange={handleChange}
              name="format"
              value={form.format}
            />
          </div>
          <div>
            <label for="">Prix</label>
            <input
              type="text"
              onChange={handlePrice}
              name="price"
              value={form.price.toString()}
            />
          </div>
          <div>
            <label for="">URL Image </label>
            <input
              type="text"
              onChange={handleChange}
              name="image"
              value={form.image}
            />
          </div>
          <div>
            <label for="">Description</label>
            <textarea
              name="description"
              onChange={handleChange}
              value={form.description}
              rows="5"
              cols="33"
            ></textarea>
          </div>
          <button type="submit">Valider</button>
        </fieldset>
      </form>

      <h2>Modification / Suppression d'un tableau</h2>
      <ul>
        {paintings.map((painting) => (
          <>
            <li key={painting.id} className={classes.line}>
              {painting.title} - {painting.artist} - {painting.format}{" "}
              <div>
                <button>Modifier</button> <button>-</button>
              </div>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default AdminPage;
