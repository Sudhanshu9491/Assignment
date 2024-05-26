import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";
import Instagram from "../../assets/instagram.svg";
import Linkedin from "../../assets/linkedin.svg";
import Twitter from "../../assets/twitter.svg";
import Facebook from "../../assets/facebook.svg";
import Footer from "../../assets/footer.svg";

const footer = () => {
  return (
    <>
      <div className="footer">
        <img id="footer-img" src={Footer} alt="footer" />
      <div className="footer-left">
        <img  src={logo} alt="logo" />
        <p>TRASAVE travel fund is a good way to track your travel money. </p>
        <img className="footer-left-img" src={Instagram} alt="images" />
        <img className="footer-left-img" src={Linkedin} alt="images" />
        <img className="footer-left-img" src={Facebook} alt="images" />
        <img className="footer-left-img" src={Twitter} alt="images" />
      </div>
      <div className="footer-2">
        <ul>
            <td><span className="span">About</span></td>
            <li className="pp">Technical Info</li>
            <li>Other Products</li>
        </ul>
      </div>
      <div className="footer-3">
        <p><span className="span">Contact Us</span></p>
        <p className="pp">Bangaluru,India</p>
        <p className="pp">1234567891</p>
        <p className="pp">abc@gmail.com</p>
      </div>
      <div className="footer-4">
        <p className="span" style={{color:"white",fontWeight:"800"}}>Subscribe <span className="span">NewsLetter</span></p>
        <input type="email" placeholder="Enter your email " /><span id="span">Subscribe</span>
      </div>
    </div>
      <p className="end">Copright  2022 Curlistic. All right reserved.</p>
    </>
  );
};

export default footer;
