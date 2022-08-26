import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import img1 from "../images/cricket.png";

const Card = (product) => {
  const [quantity, setQuantity] = useState(1);
  const [Redirect, setRedirect] = useState(false);
  const {
    id,
    title,
    index,
    image,
    qty,
    category,
    description,
    btn,
    value,
    price,
    handleClick,
  } = product;

  // console.log(product)
  return (
    <section className="card"  key={id}>
      <div className="card-img">
        <NavLink to={`/product/${id}`}>
          <img src={img1} alt="not found" />
        </NavLink>
      </div>
      {id}
      <div className="card-title">
        <h2>{title}</h2>
        <h2>{category}</h2>
      </div>
      <div className="card-desc">
        <p>{description}</p>
      </div>
      {value !== "category" ? (
        <p className="price">Price :{price * quantity}/- </p>
      ) : (
        ""
      )}

      <div
        className="card-btn"
        style={{ justifyContent: `${qty === "no" ? "center" : ""}` }}
      >
        {qty === "yes" ? (
          <select
            value={quantity}
            // onChange={handleSelect}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return (
                <option key={i} value={i + 1}>
                  {" "}
                  {i + 1}
                </option>
              );
            })}
          </select>
        ) : (
          ""
        )}
        {btn === "Explore" ? (
          <button>{btn}</button>
        ) : (
          <button onClick={() => handleClick(product, quantity, setQuantity)}>
            {btn}
          </button>
        )}
      </div>
    </section>
  );
};

export default Card;
