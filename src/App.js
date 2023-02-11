import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import OrderReview from "./components/OrderReview/OrderReview";
import Shop from "./components/Shop/Shop";
import Login from "./Login/Login";

function App() {
  return (
    <div className="App container">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/inventory" element={<Inventory/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/review" element={<OrderReview/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>

    </div>
  );
}

export default App;
