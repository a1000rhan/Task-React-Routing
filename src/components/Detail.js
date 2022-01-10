import React from "react";
import { useParams } from "react-router-dom";
import products from "../products";

function Detail() {
  const { productSlug } = useParams();
  const cookie = products.find((prod) => prod.slug === productSlug);
  console.log(cookie);
  return (
    <div className="detail">
      {cookie && ( // if there is cookie show its data
        <>
          <h5>{cookie.name}</h5>
          <img src={cookie.image} alt="cookie" />
          <p>{cookie.price} KD</p>
          <p>{cookie.description}</p>
        </>
      )}
    </div>
  );
}

export default Detail;
