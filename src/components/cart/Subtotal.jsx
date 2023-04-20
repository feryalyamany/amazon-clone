import React from 'react';
import {getCartTotal} from '../../context/AppReducer';
import {useAuth} from '../../context/GlobalState';
import CurrencyFormat from 'react-currency-format';
import { useNavigate } from 'react-router-dom';
const Subtotal = () => {
  const navigate= useNavigate()
  const {cart}= useAuth();
  return (
    <>
     <div className="col-md-3 col-12">
            <div className="bg-light p-3">
              
                <CurrencyFormat renderText={(value)=>(
                 
                    <h5>Subtotal ({cart.length} {cart.length>1 ? "items":"item"}): <strong>{value}</strong></h5>
                  
                )}
                
                decimalScale={2}
                prefix={"$"}
                displayType={"text"}
                thousandSeparator={true}
                value={getCartTotal(cart)}
                
                
                />
              
            
            
             
             <small>
                <input type="checkbox" className="me-2 p-1"/>
                This Order Contains A Gift
             </small>
             <button onClick={()=> navigate("/payment")} className="btn w-100 py-1 mt-3 fw-semibold" style={{backgroundColor:"#F79B34"}}>Proceed to checkout</button>
            </div>
          </div>
    </>
  )
}

export default Subtotal