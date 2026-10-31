
import { useState } from "react";
import "./App.css";

function Checkout({ cart = [] }) {
  const [form, setForm] = useState({

    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    postalCode: "",
    phone: "",
    newsEmail: false,
    saveInfo: false,
    newsSMS: false,
    shipping: "cod",
    payment: "cod",
    billing: "same"
  });
const [orderConfirmed, setOrderConfirmed] = useState(false);
  const cities = [
    "Lahore",
    "Karachi",
    "Islamabad",
    "Rawalpindi",
    "Faisalabad",
    "Multan",
    "Gujranwala",
    "Sialkot"
  ];

  const update = (e) => {
    const { name, value, type, checked } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shippingCost =
    form.shipping === "prepaid" || subtotal >= 4000
      ? 0
      : 99;

  const total = subtotal + shippingCost;

  
const handleSubmit = (e) => {
  e.preventDefault();

  if (cart.length === 0) {
    alert("Please add products to your cart first.");
    return;
  }

  if (form.payment === "cod") {
    setOrderConfirmed(true);
  } else {
    alert("Online payment gateway is not connected yet.");
  }
};


if (orderConfirmed) {
  return (
    <div className="checkout-page">
      <div className="checkout-form">
        <h1>FunBite</h1>
        <h2>Order Details Confirmed!</h2>

        <p>Customer: {form.firstName} {form.lastName}</p>
        <p>Address: {form.address}, {form.city}</p>
        <p>Payment Method: Cash on Delivery</p>

        <h2>Total: Rs. {total}</h2>

        <p>
          This is a demo confirmation.
          Your order has not been sent to the restaurant yet.
        </p>
      </div>
    </div>
  );
}

  return (

    <div className="checkout-page">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h1>FunBite Checkout</h1>

        <h2>Contact</h2>
        <p>Sign in</p>

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={update}
          placeholder="Email address"
          required
        />

        <small>
          Used for order confirmation and cart reminders
        </small>

        <label>
          <input
            type="checkbox"
            name="newsEmail"
            checked={form.newsEmail}
            onChange={update}
          />
          Email me with news and offers
        </label>

        <h2>Delivery</h2>

        <label>Country</label>
        <select defaultValue="Pakistan">
          <option value="Pakistan">Pakistan</option>
        </select>

        <label>Select City</label>
        <select
          name="city"
          value={form.city}
          onChange={update}
          required
        >
          <option value="">Select City</option>
          {cities.map(city => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <div className="checkout-row">
          <input
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={update}
            required
          />

          <input
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={update}
            required
          />
        </div>

        <input
          name="address"
          placeholder="Full Delivery Address"
          value={form.address}
          onChange={update}
          required
        />

        <input
          name="apartment"
          placeholder="Apartment, suite, etc. (optional)"
          value={form.apartment}
          onChange={update}
        />

        <input
          name="postalCode"
          placeholder="Postal Code (optional)"
          value={form.postalCode}
          onChange={update}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={update}
          required
        />

        <small>
          In case we need to contact you about your order
        </small>

        <label>
          <input
            type="checkbox"
            name="saveInfo"
            checked={form.saveInfo}
            onChange={update}
          />
          Save this information for next time
        </label>

        <label>
          <input
            type="checkbox"
            name="newsSMS"
            checked={form.newsSMS}
            onChange={update}
          />
          Text me with news and offers
        </label>

        <h2>Shipping Method</h2>

        <label>
          <input
            type="radio"
            name="shipping"
            value="prepaid"
            checked={form.shipping === "prepaid"}
            onChange={update}
          />
          Prepaid — Free Shipping + Priority Dispatch
        </label>

        <label>
          <input
            type="radio"
            name="shipping"
            value="cod"
            checked={form.shipping === "cod"}
            onChange={update}
          />
          COD — Rs. 99 (Free for orders Rs. 4,000+)
        </label>

        <h2>Payment</h2>
        <p>All transactions should be secure and encrypted.</p>

        <label>
          <input
            type="radio"
            name="payment"
            value="card"
            checked={form.payment === "card"}
            onChange={update}
          />
          Debit / Credit Card
        </label>

        <label>
          <input
            type="radio"
            name="payment"
            value="baadmay"
            checked={form.payment === "baadmay"}
            onChange={update}
          />
          BaadMay — Buy Now, Pay Later
        </label>

        <label>
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={form.payment === "cod"}
            onChange={update}
          />
          Cash on Delivery
        </label>

        <h2>Billing Address</h2>

        <label>
          <input
            type="radio"
            name="billing"
            value="same"
            checked={form.billing === "same"}
            onChange={update}
          />
          Same as shipping address
        </label>

        <label>
          <input
            type="radio"
            name="billing"
            value="different"
            checked={form.billing === "different"}
            onChange={update}
          />
          Use a different billing address
        </label>

        {form.billing === "different" && (
          <p>
            Separate billing address fields will be added
            before enabling real payments.
          </p>
        )}

        <h2>Order Summary</h2>

        {cart.map(item => (
          <p key={item.id}>
            {item.name} × {item.quantity} —
            Rs. {item.price * item.quantity}
          </p>
        ))}

        <p>Subtotal: Rs. {subtotal}</p>
        <p>Shipping: Rs. {shippingCost}</p>

        <h2>Total: Rs. {total}</h2>

        <h2>Finalize Order</h2>

        
<button type="submit" className="pay-now-button">
  {form.payment === "cod" ? "Continue" : "Pay Now"}
</button>
      </form>
    </div>
  );
}

export default Checkout;
