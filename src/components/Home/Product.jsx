import React from "react";
import starIcon from "../../imgs/icons/star.png";
import styles from './Product.module.css';
import {useAuth} from '../../context/GlobalState'
const Product = ({id, title, price, image, rating}) => {
  const {dispatch} = useAuth();
  const addToCart= ()=>{
        dispatch({
          type: "ADD_TO_CART",
          item:{
            id:id,
            title:title,
            price:price,
            image:image,
            rating:rating,
          }
        })
  }

  return (
    <div className={styles['product-wrapper']} >
      <div className="product-info">
        <p className="fw-semibold h6" style={{minHeight:"80px"}}>{title}</p>
        <p className="price">
          <span className="h5">$</span>
          <strong className="h3">{price}</strong>
        </p>
      </div>
      <div className="rating d-flex">
      {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>
              <img src={starIcon} className="me-1" style={{ height: 20, objectFit:"contain" }}/>
            </p>
          ))}
      </div>
      <div className="text-center" style={{height:"300px", width:"100%", }}>
      <img src={image} className={styles.productImg}/>
      </div>
      
      <button onClick={addToCart} className="btn py-1 px-5 fw-semibold text-black-90 d-block mx-auto" style={{backgroundColor:"#F79B34"}}>Add To Cart</button>
      
     
    </div>
  );
};

export default Product;
