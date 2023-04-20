import React from 'react'
import { useAuth } from '../../context/GlobalState';
import starIcon from "../../imgs/icons/star.png";
const CartItems = ({image, rating, price, title, id}) => {
const {dispatch} = useAuth()
  const removeHandler= ()=>{
   dispatch({
    type:"REMOVE_FROM_CART",
    id:id,
   })
  }
 
  return (
    <>
       <div className="col-md-2 col-12 d-flex align-items-center">
            <div className="wrapper p-3">
                <div>
                    <img src={image} className="w-100"/>
                </div>
            </div>
           
          </div>
          <div className="col-md-7 col-12 d-flex align-items-center">
            <div className="wrapper p-3">
            <h6 className="fw-bold">{title}</h6>
           <p>
            <small className='h4'>$</small>
            <strong className='h3'>{price}</strong>
           </p>
           <div className="rating d-flex">
           {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>
              <img src={starIcon} className="me-1" style={{ height: 20, objectFit:"contain" }}/>
            </p>
          ))}
          </div>
          <button onClick={removeHandler} className="btn mb-3 py-1 fw-semibold" style={{backgroundColor:"#F79B34"}}>Remove from Cart</button>
            </div>
     
          
          </div>
          <div className="col-md-3"></div>
    </>
  )
}

export default CartItems