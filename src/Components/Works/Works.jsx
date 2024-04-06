import React,{useContext} from 'react'
import './Works.css'
// import Resume '../'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import GambitoR from "../../img/GambitoR.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'

const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  
  return (
    <div className='works'>
       <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>Works</span>
        <span>services</span>
        <span>I am currently the Head of 
            Web Development team of GambitoR , IIT Roorkee and i have also worked at the Cognizance event at IIT Roorkee,
        </span>
        {/* <br />
        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, quos!</span> */}
        <a href='' download>
        <button className='button s-button'>
            Checkout My Github
        </button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
        {/* right side */}
        <div className="w-right">
            <motion.div 
            initial={{ rotate: 90 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            className="w-mainCircle">
                <div className="w-secCircle">
                    <img  alt="" />
                </div>
                <div className="w-secCircle">
                    <img  alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={GambitoR} alt="" />
                </div>
                <div className="w-secCircle">
                    <img  alt="" />
                </div>
                <div className="w-secCircle">
                    <img alt="" />
                </div>
            </motion.div>

            {/* background circles */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Works
