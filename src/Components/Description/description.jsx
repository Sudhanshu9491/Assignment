import React from 'react'
import "./description.css";
import saveMoney from "../../assets/save-money.svg";
import EarnReward from "../../assets/earnReward.svg";
import Travel from "../../assets/travel.svg";

const description = () => {
  return (
    <>
    <div className='description'>
        <div className="heading">
            <p className='heding-p'>Why to <span>travel</span> with us?</p>
            <p className='heading-p2'>Ambitious about your next adventure but sick of saving money? End up sneaking into those savings because well. You’re bored? Lost motivation? You don’t feel the funds are growing fast enough? Saving just sucks? Trasave has introduced an epic new way to reward you for your savings for travel</p>
        </div>
    </div>
    <div className="boxes">
        <div className="box">
            <img src={saveMoney} alt="img" />
            <p className='box-p1'>Save <span>Money</span></p>
            <p className='box-p2'>Invest in trasave securily for future</p>
        </div>
        <div className="box">
            <img src={EarnReward}  alt="img" />
            <p className='box-p1'>Earn <span>Reward</span></p>
            <p className='box-p2'>Earn rewards and track your money</p>
        </div>
        <div className="box">
            <img src={Travel} alt="img" />
            <p className='box-p1'>Travel <span>Global</span></p>
            <p className='box-p2'>Use this money for your travelling</p>
        </div>
    </div>
    </>
  )
}

export default description