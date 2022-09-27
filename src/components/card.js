import React from "react";

const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Prix - {price}FCFA</p>
        <button onClick={() => handleClick(item)}>Ajouter au panier</button>
      </div>
    </div>
  );
};

export default Cards;
