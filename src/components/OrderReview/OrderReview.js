import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";


const OrderReview = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const removeItem = (product) => {
    removeFromDb(product.key);
    const newCart = cart.filter(pro => pro.key !== product.key);
    setCart(newCart);
  };

  return (
    <div>
      <div className="shop">
      <div>
        {cart.length > 0 &&
          cart.map((product) => (
            <Products
              product={product}
              addItem={removeItem}
              key={product.key}
              name={product.name}
              text="Remove Item"
              price={product.price}
            ></Products>
          ))}
      </div>

      <div>{cart.length > 0 && <Cart cart={cart} />}</div>
    </div>
    </div>
    
  );
};

export default OrderReview;
