import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [pjDetail, setPjDetail] = useState({});

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_DETAIL}${id}`)
      .then((response) => {
        if (response.data.name) {
          setPjDetail(response.data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => window.alert(err));
  }, [id]);
  return (
    <div>
      <h3>{pjDetail.name && pjDetail.name}</h3>
      <h5>{pjDetail.status ? pjDetail.status : ":( no hay status"}</h5>
      <img src={pjDetail.image} alt={pjDetail.name} />
      <section>
        <span>🐞{pjDetail.species}</span>
        <span> ♀ {pjDetail.gender}</span>
        <span>🌍 {pjDetail.origin?.name}</span>
      </section>
    </div>
  );
};

export default Detail;