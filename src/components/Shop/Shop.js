import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import Products from "../Products/Products";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [count,setCount]=useState(0)

  const handleSearch = (e) => {
    const searchText = e.target.value;
    const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
    setDisplayProducts(matchedProducts);
  };

  const [page,setPage]=useState(0)

  const handlePage=(e)=>{
    console.log("page no "+e)
    setPage(e)
  }

  useEffect(() => {
    fetch(`http://localhost:2020?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.result);
        setCount(data.count)
        setDisplayProducts(data.result);
        window.scrollTo(0, 0)
      });
  }, [page]);

  const pageGap=10
  const totalPage=Math.ceil(count / pageGap)

  useEffect(() => {
    const savedCart = getStoredCart();
    const storedCart = [];

    for (const key in savedCart) {
      if (products.length) {
        const addedProducts = products.find((product) => product.key === key);
        if (addedProducts) {
          const quantity = savedCart[key];
          addedProducts.quantity = quantity;
          storedCart.push(addedProducts);
        }
      }
    }
    setCart(storedCart);
  }, [products]);

  const addItem = (product) => {
    const exists = cart.find((pd) => pd.key === product.key);
    let newCart = [];

    if (exists) {
      const rest = cart.filter((pd) => pd.key !== product.key);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDb(product.key);
  };

  return (
    <div>
      <div style={{background:"black"}}>
      <input
          type="text"
          placeholder="Search Product"
          onChange={(e) => handleSearch(e)}
          style={{width:"50%"}}
        />
      </div>

      <div className="shop">
        <div>
          {displayProducts.map((product) => (
            <Products
              product={product}
              star={product.star}
              key={product.key}
              name={product.name}
              img={product.img}
              price={product.price}
              shipping={product.shipping}
              text="Add Item"
              addItem={addItem}
            />
          ))}
        </div>
        <Cart cart={cart}></Cart>

      </div>

      <Footer handlePage={handlePage} selectedPage={page} totalPage={totalPage}></Footer>
    </div>
  );
};

export default Shop;
