import React, { useState } from "react";
import PaintingCard from "./PaintingCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gallery: {
    display: "flex",
    width: "70%",
    margin: "auto",
    flexWrap: "wrap",
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

function PaintingsList(props) {
  const classes = useStyles();
  const [painting, setPainting] = useState(paintings);
  return (
    <div>
      <h3>Liste des tableaux</h3>
      <div className={classes.gallery}>
        {paintings.map((painting) => (
          <PaintingCard key={painting.id} {...painting} />
        ))}
      </div>
    </div>
  );
}

export default PaintingsList;
