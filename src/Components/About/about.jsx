import React from 'react'
import "./about.css";
import money from "../../assets/money.svg";
const about = () => {
  return (
    <div className='about'>
      <img className='about-img' src={money} alt="Money photo" />
      <div className="message">
        <div className="message1">
          <p>Save your travel money in Trasave and get top grade security with us</p>
        </div>
        <div className="message2">
            <p>There are so many benefits of travelling with Trasave. Not only do we provide you with an awesome digital travel solution , an awesome travel app, but we also make it super easy and fun for you to store, save and move your travel money.</p>
            <p>As well as saving money, the TRASAVE travel fund is a good way to track your travel money. Tracking Expenses is important when travelling as you don’t want to be stuck in the middle of your journey budgeting your travel. We created the travel fund so you can store all your travel money and then track your money from your travel fund expense tracker. </p>
        </div>
      </div>
    </div>
  )
}

export default about