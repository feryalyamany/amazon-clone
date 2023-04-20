import React from "react";
import { useAuth } from "../../context/GlobalState";
import adImg from "../../imgs/checkoutAd.jpg";
import CartItems from "./CartItems";
import Subtotal from "./Subtotal";
const Checkout = () => {
  const { user, cart } = useAuth();
  return (
    <>
      <div className="p-3">
        <div className="row">
          <div className="col-md-9 col-12">
            <img src={adImg} className=" img-fluid mb-1" />
            <h5 className="mb-2 mt-3">Hello {user?.email} </h5>
            <h4 className=" fw-bold">Your Shopping Cart</h4>
            <hr />
          </div>
          <Subtotal />
          {cart.length >0 ? <>
          
            {cart.map((item) => (
            <CartItems
              key={item.id}
              id={item.id}
              image={item.image}
              rating={item.rating}
              price={item.price}
              title={item.title}
            />
          ))}
          </> : <>
      <p className="fw-bold h4">You have No Items!</p>
          
          </> }
        
        </div>
      </div>
    </>
  );
};

export default Checkout;
