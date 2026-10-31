import Checkout from "./checkout.jsx";
import Cart from "./cart.jsx";
import { useState } from "react";
import { Routes, Route, } from "react-router-dom";
import Navbar, { Footer } from "./Navbar.jsx";
import Menu from "./Menu.jsx";
import "./App.css";
import Login from "./login.jsx";
import Signup from "./Signup.jsx" 

function Home({addToCart}) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
 <img src="backgroundburger.png" alt="Background" className="background"/>

 <div className="text-image">
 <h1 className="text-white" style={{ color: '#fff' }}>Food Fresh</h1>
 <h2 className="text-white" style={{ color: '#fff' }}> Delivered to Your Door</h2>
  <p className="text-white" style={{ color: '#fff' }}>Delicious meals made with quality ingridents
    <br></br> order now and enjoy tast at home</p>  
  <img src="burger11.png" alt="Burger" className="burger-image" />
  <br></br>
  <button className="order-button">Order Now</button>

</div>
<h2 className="point">Popular Menu</h2>
<div className="menu-container">
  <div className="menu-item1">
    <img src="burger11.png" alt="Zinger Burger" className="menu-image" />
    <h3>Zinger Burger</h3>
    <p>Price: 300RS</p>
<button
  className="carts-button"
  onClick={() => addToCart({
    id: 1,
    name: "Zinger Burger",
    price: 300
  })}
>
  Add to Cart
</button>
  </div>
  <div className="menu-item2">
    <img src="pizza.png" alt="Chicken Pizza" className="menu-image" />
    <h3>Chicken Pizza</h3>
    <p>Price: 1800RS</p>
   
<button
  className="carts-button"
  onClick={() => addToCart({
    id: 2,
    name: "Chicken Pizza",
    price: 1800
  })}
>
  Add to Cart
</button>
  </div>
  <div className="menu-item3">
    <img src="friees.png" alt="Loaded Fries" className="menu-image" />
    <h3>Loaded Fries</h3>
    <p>Price: 200RS</p>
   
<button
  className="carts-button"
  onClick={() => addToCart({
    id: 3,
    name: "Loaded Fries",
    price: 200
  })}
>
  Add to Cart
</button>

  </div>
  </div>
  <img src="jjburger.jpg" alt="burger" className="jj-burger"/> 
   <hr className="line"></hr>


<div className="funbite-wrapper">
  <img
    src="/funbite.png"
    alt="FunBite"
    className="funbite"
  />

  <button
    className="explore-overlay"
    onClick={() => setShowMenu(!showMenu)}
  >
    Explore Menu →
  </button>

  {showMenu && (
    <div className="funbite-popup">
      <h2>FunBite Menu</h2>
      <p>Zinger Burger — Rs. 300</p>
      <p>Chicken Pizza — Rs. 1800</p>
      <p>Loaded Fries — Rs. 200</p>

      <button onClick={() => setShowMenu(false)}>
        Close
      </button>
    </div>
  )}
  </div>
  <br></br>
  <div className="story" style={{ color: "black" }}>

  <h2>The Journey of FunBite 🍔</h2>
<br></br>
  <p>
    FunBite began with a simple idea: to make delicious,
    fresh, and affordable food available to everyone.
    Our journey started with a passion for cooking and
    a dream of bringing families and friends together
    through great food. What began as a small kitchen
    with a few special burger recipes gradually grew
    into a food delivery brand.
  </p>

  <p>
    Over time, FunBite expanded its menu by introducing
    crispy zinger burgers, cheesy chicken pizzas,
    loaded fries, and exciting family deals.
    Every recipe was created with a focus on fresh
    ingredients, rich flavors, and customer satisfaction.
  </p>

  <p>
    <strong>Today, FunBite is more than just a food delivery service.</strong>
    {" "}It is a place where traditional flavors meet modern tastes.
    We believe that every bite should bring happiness,
    comfort, and a memorable experience.
  </p>
<br></br>
  <h3>FunBite – Fresh Food, Great Taste, Happy Moments!</h3>
</div>

</div>
  )
}

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product) => {
    console.log("Adding product:", product);
    setCart((previousCart) => {
      const existing = previousCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return previousCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previousCart, { ...product, quantity: 1 }];
    });

    setCartOpen(true);
  };
  return(
    <>
      <Navbar
        cart={cart}
        openCart={() => setCartOpen(true)}
      />
  
<Routes>
  <Route
    path="/"
    element={<Home addToCart={addToCart} />}
  />

  <Route
    path="/menu"
    element={<Menu addToCart={addToCart} />}
  />

  <Route
    path="/checkout"
    element={<Checkout cart={cart} />}
  />

  

  <Route
    path="/login"
    element={<Login />}
  />
  <Route path="/signup" element={<Signup />} />
</Routes>

<Footer />

{cartOpen && (
  <Cart
    cart={cart}
    setCart={setCart}
    closeCart={() => setCartOpen(false)}
  />
)}

    </>

  );
}

export default App;

