import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import Exercise from "../Exercise/Exercise";
import "./Home.css";
import gym from '../../images/gym-logo-template-design-04d583c8ca3558ea0ea21763a57e7ba6_screen.jpg'
import Portfolio from "../Portfolio/Portfolio";

const Home = () => {
  const notify = () => toast("Wow so easy!");
  const [datas, setdatas] = useState([]);
  const [cart, setcart] = useState([])
  
  

  const SentTocart=(data)=>{
    const newCart=[...cart,data]
    setcart(newCart)
  }

  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setdatas(data));
  }, []);

  return (
    <div>
      <div className="home-container">

        <div className="practice-container">

        <div className="header">
        <img src={gym} alt="" />
        <h1>Daily-exercise</h1>
        </div>
        <h1>Select Exercise List: </h1>
          <div className="practice">
          {datas.map((data) => (
            <Exercise 
            data={data} 
            key={data.id}
            SentTocart={SentTocart}
            ></Exercise>
          ))}
          </div>

        </div>

        <div className="cart">
          <Portfolio></Portfolio>
          
          <Cart  cart={cart}></Cart>
          <div>

          <button onClick={notify} className="cartbutton">Activity Completed</button>
          <ToastContainer />
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Home;
