import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactStars from "react-rating-stars-component";
import Button from "./../Button/Button";
import "./Products.css";
const Products = ({
  name,
  img,
  price,
  star,
  shipping,
  addItem,
  product,
  text,
}) => {
  return (
    <div className="products">
      <div>
        <h3>{name}</h3>
        <h4>Price: {price}$</h4>
        {star && (
          <div className="star">
            <ReactStars
              style={{ display: "flex" }}
              count={5}
              size={24}
              value={star}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#fcba03"
              edit={false}
            />
          </div>
        )}
        {shipping && <p>Shipping fee: {shipping}$</p>}

        <Button onClick={() => addItem(product)}>
          {text} <FontAwesomeIcon icon={faCartShopping} />
        </Button>
      </div>
      <img src={img} alt="" />
    </div>
  );
};

export default Products;
