import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PaintingDetails({ match }) {
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
    <div>
      <h3>{painting?.title}</h3>
      <img src={painting?.image} alt={painting?.title} />
      <p>{painting?.description}</p>
    </div>
  );
}

export default PaintingDetails;
