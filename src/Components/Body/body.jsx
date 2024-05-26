import React from 'react'
import "./body.css";
import girl from "../../assets/girl.svg";
const body = () => {
  return (
    <div>
        <div className="body">
            <div className="body-left">
                <p className='body-left-p1'><span>SAVING</span> YOUR MONEY FOR TRAVEL THROUGH TRAVEL FUND</p>
                <p className="body-left-p2">Save your money for travel securely and explore the whole world with trasave, we provide you the best travel services.</p>
                <div className="buttons">
                <div className='body-left-button'>Save now</div>
                <div className='body-left-button'>UI/UX Case Study</div>
                </div>
            </div>
            <div className="body-right">
                <img className='body-right-img' src={girl} alt="girl" />
                {/* <div className='ellipse-1'></div> */}
            </div>
        </div>
    </div>
  )
}

export default body;