import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/GlobalState";
import CurrencyFormat from "react-currency-format";
import CartItems from "./CartItems";
import { getCartTotal } from "../../context/AppReducer";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "../axios";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
const Payment = () => {
  const { cart, user, dispatch } = useAuth();
  const [clientSecret, setClientSecret] = useState();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate()
  console.log(user)
  const submitHandler = async (e) => {
    e.preventDefault();
    
    setProcessing(true);
    const payload = await stripe
    .confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
      })
      .then(({ paymentIntent }) => {
        const ref = doc(db, "users", user?.uid, "orders", paymentIntent.id);
        setDoc(ref, {
          cart: cart,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: "EMPTY_CART",
        });
        navigate("/orders", { replace: true });
      });
  };
  const changeHandler = (e) => {
    setDisabled(e.empty);
    setError(error? error.message : "");
  };

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getCartTotal(cart) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
       return response;
    };
    getClientSecret();
  }, [cart]);

  return (
    <>
      <div className="sec-title bg-light py-3 text-center">
        <h3>
          Checkout
          <Link className="link" to="/checkout">
            {" "}
            ({cart.length} {cart.length >1  ? "items":"item"})
          </Link>
        </h3>
      </div>

      <div className="container-fluid">
        <div className="address-sec py-4 px-3">
          <div className="row">
            <div className="col-md-3 col-12">
              <h5 className="fw-bold">Delivery Address</h5>
            </div>
            <div className="col-md-9 col-12">
              <div className=" text-black-50">
                <p className="mb-1 h6">{user?.email}</p>
                <p className="h5 mb-0">Cairo, Egypt</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="review-sec px-3 py-4">
          <div className="row">
            <div className="col-md-3 col-12">
              <h4 className="h5 fw-bold">Review Items and Delivery</h4>
            </div>
            <div className="col-md-9 col-12">
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
            </div>
          </div>
        </div>
        <hr />
        <div className="payment-sec px-3 py-4">
          <div className="row">
            <div className="col-md-3 col-12">
              <h4 className="h5 fw-bold">Payment Method</h4>
            </div>

            <div className="col-md-9 col-12">
              <form onSubmit={submitHandler}>
                <CardElement onChange={changeHandler} />
                <CurrencyFormat
                  renderText={(value) => (
                    <h5 className="mt-3">
                      Total : <strong>{value}</strong>
                    </h5>
                  )}
                  decimalScale={2}
                  prefix={"$"}
                  displayType={"text"}
                  thousandSeparator={true}
                  value={getCartTotal(cart)}
                />
                <button
                  type="submit"
                  className="btn w-100 py-1 mt-3 fw-semibold"
                  style={{ backgroundColor: "#F79B34" }}
                  disabled={processing || disabled || succeeded}
                >
                  
                  {processing? "Processing" : "Buy Now"}
                </button>
              </form>
              {error && <div>{error}</div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
