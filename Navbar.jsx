import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import {
  FaUtensils,
  FaInstagram,
  FaFacebook,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";
import "./App.css";

function Navbar({ cart, openCart }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaUtensils className="food-icon" />
        <h1>Fun<span>Bite</span></h1>
      </div>

      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/login">Login</Link>

      <button
        type="button"
        className="cart-button"
        onClick={openCart}
      >
        <ShoppingCart size={24} />
        <span>
          Cart ({cart.reduce(
            (sum, item) => sum + item.quantity, 0
          )})
        </span>
      </button>
    </nav>
  );
}

function Footer() {
  return (
  
    <footer className="footer">
      
<hr className="line-footer"></hr>
     
      <h1>FunBite</h1>
      <br></br>
      <div className="phon-icons">
       <h2>contact us</h2> ## 033244455599
        <FaPhone/></div>
    <div className="Email-icon">
        support@codealpha.tech
        <br></br>
        <FaEnvelope />

        </div>
       
      <p>Follow us on social media</p>
      
      <div className="social-icons">
        <a href="https://www.instagram.com/"
           target="_blank"
           rel="noopener noreferrer">
          <FaInstagram />
        </a>

        <a href="https://www.facebook.com/"
           target="_blank"
           rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>

      <p>© 2026 FunBite. All Rights Reserved.</p>
    </footer>
  );
}

export { Footer };
export default Navbar;

