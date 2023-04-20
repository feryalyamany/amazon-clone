import React from 'react'
import homeImg from '../../imgs/home.jpg';
import img1 from '../../imgs/products/1.png';
import img2 from '../../imgs/products/2.png';
import img3 from '../../imgs/products/3.png';
import img4 from '../../imgs/products/4.png';
import img5 from '../../imgs/products/5.png';
import img6 from '../../imgs/products/6.png';
import Product from './Product';
import styles from './Product.module.css';
import shortid from 'shortid';
const Home = () => {
  return (
   <>
   <div className="home">
   <div className="header">
    <img src={homeImg} className={styles.homeImg} />
   </div>
   <div className="container-fluid mb-5">
    <div className="row gx-3 gy-1">
      <div className="col-md-6 col-12">
      <Product
      id={shortid.generate()}
      image={img1}
      price={64}
      title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
      rating={5}
      />
      </div>
      <div className="col-md-6 col-12">
      <Product
        id={shortid.generate()}
        image={img2}
        price={900.95}
        title="Lenovo - 2021 - IdeaPad 3 - Gaming Laptop - AMD Ryzen 5 5600H - 8GB RAM - 256GB Storage - NVIDIA GeForce GTX 1650-15.6 FHD Display - Windows 11 Home"
        rating={5}
      />
      </div>
      <div className="col-md-4 col-12">
      <Product
       id={shortid.generate()}
        image={img3}
        price={333}
        title="Fujitsu ScanSnap iX1600 Wireless or USB High-Speed Cloud Enabled Document, Photo & Receipt Scanner with Large Touchscreen and Auto Document Feeder for Mac or PC, White"
        rating={4}
      />
      </div>
      <div className="col-md-4 col-12">
      <Product
        id={shortid.generate()}
        image={img4}
        price={64.75}
        title="Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB"
        rating={3}
      />
      </div>
      <div className="col-md-4 col-12">
      <Product
        id={shortid.generate()}
        image={img5}
        price={71}
        title="MeLE PCG02 Fanless Mini PC Stick Windows 11 Pro J4125 8GB/128GB Portable Mini Desktop Computer Stick Business & Home Video Support HDMI 4K 60Hz, BT4.2, 2.4G/5.8G Dual Band Wi-Fi, USB..."
        rating={3}
      />
      </div>
      <div className="col-12">
      <Product
        id={shortid.generate()}
        image={img6}
        price={743}
        title="SAMSUNG Galaxy S22 Ultra Cell Phone, Factory Unlocked Android Smartphone, 128GB, 8K Camera & Video, Brightest Display Screen, S Pen, Long Battery Life, Fast 4nm Processor, US Version, Phantom Black"
        rating={5}
      />
      </div>
    </div>
  
   </div>
   </div>
   </>
  )
}

export default Home