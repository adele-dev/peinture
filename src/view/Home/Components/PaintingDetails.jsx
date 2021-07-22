import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "60%",
    margin: "auto",
  },
}));

function PaintingDetails({ match }) {
  const classes = useStyles();
  const [painting, setPainting] = useState({});
  const { id } = useParams();

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:8000/api/paintings/${id}`, {
          withCredentials: true,
        })
        .then((response) => response.data)
        .then((data) => {
          setPainting(data);
        });
    } catch (e) {
      //err
    }
  }, [match?.params?.id]);
  return (
    <div className={classes.container}>
      <h3>{painting?.title}</h3>
      <img src={painting?.image} alt={painting?.title} width="500px" />
      <p>{painting?.description}</p>
      <Link to="/">
        <button>Retour</button>
      </Link>
    </div>
  );
}

export default PaintingDetails;
