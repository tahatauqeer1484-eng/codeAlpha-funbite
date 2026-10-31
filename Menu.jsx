
import "./App.css";

function Menu({addToCart}) {
 

  return (
    <div className="menu-page">
      <h1>Our Delicious Menu</h1>
      <h1>Big Deals</h1>
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
      <div className="burger-container">
      <div className= "deal1">
        <img src="burger2.png" alt="burger" className="deal-image"/>
        <h3>burger deal</h3>
       
<button
  className="carts-button"
  onClick={() => addToCart({
    id: 4,
    name: "burger deal",
    price: 900
  })}
>
  Add to Cart
</button>

      </div>
      <div className= "deal2">
        <img src="burger5.png" alt="burger" className="deal-image"/>
        <h3>Pizza+Burger</h3>
       
<button
  className="carts-button"
  onClick={() => addToCart({
    id: 5,
    name: "Pizza+Burger",
    price: 1800
  })}
>
  Add to Cart
</button>

      </div>
      
       <div className="deal3">
        <img src="burger4.png" alt="boneless Chicken" className="deal-image" />
        <h3>pizza</h3>
       
<button
  className="carts-button"
  onClick={() => addToCart({
    id: 6,
    name: "pizza",
    price: 1600
  })}
>
  Add to Cart
</button>

       </div>
       <div className="deal4">
       <img src="dealburger1.png" alt="boneless Chicken" className="deal-image" />
        <h3>burger</h3>
       <button
  className="carts-button"
  onClick={() => addToCart({
    id: 7,
    name: "burger",
    price: 600
  })}
>
  Add to Cart
</button> </div>
      </div>
    
    <div className="deal8">
      <div className="drink">
       <img src="cocdrink.jpeg" alt="coco" className="coco"/>
        <h2>Regular Drink</h2>
        <button
  className="carts-button"
  onClick={() => addToCart({
    id: 8,
    name: "drink",
    price: 300
  })}
>
  Add to Cart
</button>
</div>
 <div className="drink2">
       <img src="cocdrink.jpeg" alt="coco" className="coco"/>
        <h2>Zero Drink</h2>
        <button
  className="carts-button"
  onClick={() => addToCart({
    id: 8,
    name: "drink",
    price: 300
  })}
>
  Add to Cart
</button>
</div>
<div className="drinkss">
       <img src="icecold.jpeg" alt="ice" className="ice"/>
        <h2>Float / splash</h2>
        <button
  className="carts-button"
  onClick={() => addToCart({
    id: 8,
    name: "drinkss",
    price: 300
  })}
>
  Add to Cart
</button>
</div>
</div>
<br></br>
<div className="deal5">
 <div className="beefburger">
       <img src="beefburger.jpeg" alt="beef-burger" className="beef-burger"/>
        <h2>Beef Burgers</h2>
         <button
  className="carts-button"
  onClick={() => addToCart({
    id: 9,
    name: "Beef-burgers",
    price: 1200
  })}
>
  Add to Cart
</button>
        </div>
        <div className="big-breakfast">
       <img src="big breakfast.jpeg" alt="big-brakfast" className="big-breakfast"/>
        <h2>Big Breakfast</h2>
         <button
  className="carts-button"
  onClick={() => addToCart({
    id: 10,
    name: "Big-breakfast",
    price: 1000
  })}
>
  Add to Cart
</button>
</div>
<div className="breakfast">
       <img src="breakfast.jpeg" alt="brakfast" className="breakfast"/>
        <h2>Breakfast</h2>
          <button
  className="carts-button"
  onClick={() => addToCart({
    id: 11,
    name: "breakfast",
    price: 850
  })}
>
  Add to Cart
</button>
        </div>
        </div>
        <div className="deal6">
          <div className="biscoff">
       <img src="biscoff.jpeg" alt="biscoff" className="biscoff"/>
        <h2>Biscoff</h2>
         <button
         className="carts-button"
  onClick={() => addToCart({
    id: 12,
    name: "biscoff",
    price: 1000
  })}
>
  Add to Cart
</button>
</div>
<div className="chocalatecream">
       <img src="chocalateice.jpeg" alt="ice-cream" className="ice-cream"/>
        <h2>chocalate ice-cream</h2>
         <button
  className="carts-button"
  onClick={() => addToCart({
    id: 13,
    name: "ice-cream",
    price: 500
  })}
>
  Add to Cart
</button>
</div>
<div className="vanillacream">
       <img src="icreaamvanilla.jpeg" alt="ice-cream2" className="ice-cream2"/>
        <h2>Vanilla ice-cream</h2>
         <button
  className="carts-button"
  onClick={() => addToCart({
    id: 14,
    name: "ice-cream",
    price: 500
  })}
>
  Add to Cart
</button>
</div>
      </div>
      <div className="deal7">
        <div className="rotti-deal">
       <img src="dealroti.jpeg" alt="rotti" className="rotti"/>
        <h2>Dasi Pakkwan</h2>
        <button
  className="carts-button"
  onClick={() => addToCart({
    id: 15,
    name: "rotti",
    price: 3500
  })}
>
  Add to Cart
</button>
      </div>
       <div className="kababdeal">
       <img src="deealkabab.jpeg" alt="kabab" className="kabab"/>
        <h2>Kabab Deal</h2>
        <button
  className="carts-button"
  onClick={() => addToCart({
    id: 16,
    name: "kabab",
    price: 1350
  })}
>
  Add to Cart
</button>
      </div>
       </div>
       
<div className="deal9">
  <div className="Donts">
       <img src="vanilladnt.jpeg" alt="donts" className="donts"/>
        <h2>Vanilla Donts</h2>
        <button
  className="carts-button"
  onClick={() => addToCart({
    id: 8,
    name: "Donts",
    price: 500
  })}
>
  Add to Cart
</button>
</div>
<div className="chocalateDonts">
       <img src="choclatedhonat.jpeg" alt="choc-donts" className="choc-donts"/>
        <h2>Chocalate Donts</h2>
        <button
  className="carts-button"
  onClick={() => addToCart({
    id: 8,
    name: "Donts",
    price: 500
  })}
>
  Add to Cart
</button>
</div>
</div>
        <div className="maindeal">
       <img src="1600gealburger.png" alt="big deal" className="big-deal"/>
        <h2>Big Burgers deal</h2>
        <button
  className="carts-button"
  onClick={() => addToCart({
    id: 8,
    name: "big burgers deal",
    price: 1600
  })}
>
  Add to Cart
</button>
</div>
       </div>


  );
}

export default Menu;
