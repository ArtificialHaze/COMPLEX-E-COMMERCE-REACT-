import React from "react";
import { urlFor } from "./client";

const OneProduct = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <a href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image)}
            alt="Image"
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </a>
    </div>
  );
};

export default OneProduct;
