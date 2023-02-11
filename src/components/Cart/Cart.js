import React from "react";
import Button from "./../Button/Button";
import "./Cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  let totalPrice = 0;
  for (let product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = total + product.quantity;
    totalPrice = totalPrice + product.quantity * product.price;
  }

  return (
    cart.length > 0 && (
      <div className="cart">
        <h2>Cart:</h2>
        <br />
        <h3>Total Product: {total}</h3>
        <h3>Total Price: {totalPrice.toFixed(2)} $</h3>
        <p>Tax: {(totalPrice*0.1).toFixed(2)} $</p>
        <hr />
        <h3>Total: {(totalPrice+totalPrice*0.1).toFixed(2)} $</h3>
        <Button font={{ fontWeight: "bold" }}>{"Proceed To Pay"}</Button>
      </div>
    )
  );
};

export default Cart;
