import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function OrderForm() {
  const location = useLocation();
  const history = useNavigate();
  const { id } = location.state;

  const [orderId, setOrderID] = useState("");
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [quantity, setQuantity] = useState("");
  const [address, setAddress] = useState("");
  const [transporter, setTransporter] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to send the order form data to the server
       await axios.post("http://localhost:3001/messages", {
        orderId,
        to,
        from,
        quantity,
        address,
        transporter,
      }).then(res=>{
        if(res.data==="submitted"){
          history("/home",{state:{id:orderId}});
          alert("submitted");
        }
      
    })
    .catch(e=>{
        alert("wrong details")
        console.log(e);
    })
  }
  catch(e){
      console.log(e);

  }
}
     

  return (
    <div className="order-form">
      <h1>Order Form</h1>
      <p>Welcome, {id}!</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderID(e.target.value)}
          placeholder="Order ID"
          required
        />
        <input
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="To"
          required
        />
        <input
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="From"
          required
        />
        <input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
          required
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
          required
        />
        <input
          type="text"
          value={transporter}
          onChange={(e) => setTransporter(e.target.value)}
          placeholder="Transporter"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default OrderForm;
