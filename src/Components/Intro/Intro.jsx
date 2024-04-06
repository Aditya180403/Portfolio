import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
// import girl from "../../img/girl.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv.jsx";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from 'framer-motion'
import { Link } from "react-scroll";

 

function Intro() {

    const transition = {duration: 2 , type:'spring'};

    const theme = useContext(themeContext)
    const darkMode  =theme.state.darkMode
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color:darkMode?"white" : " "}}>Hyy!! I Am </span>
                <span>Aditya Deshmukh</span>
                <span>Aspiring web developer with decent experience in web development and producing Quality work </span>
            </div>
            <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
            <div className="i-icons">
                <img src={Github} alt="" />
                <img src={Instagram} alt="" />
                <img src={LinkedIn} alt="" />
            </div>

        </div>


        <div className="i-right">
        
         <img src={Vector1} alt="" />
        <img src={Vector2} alt="" /> 
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}

        
        
        src={glassesimoji} alt="" />

        <motion.div style={{top:'-4%' , left:'68%'}}
         initial={{ top: "-4%", left: "74%" }}
         whileInView={{ left: "68%" }}
         transition={transition}>
            <FloatingDiv image={crown} txt1 ='Web'txt2 ='Developer' />
        </motion.div>

        
        <motion.div style={{top:'18rem' , left:'0rem'}}
         whileInView={{ left: "-18%" }}
         transition={transition}>
            <FloatingDiv image={thumbup} txt1 ='Competitive'txt2 ='Programmer' />
        </motion.div>
        {/* blur part */}
        <div className="blur" style={{background:"rgb(238 210 255"}}>

        </div>
        <div className="blur" style={{background:'#C1F5FF',
    top:'17rem',
    width:'21rem',
    height:'11rem',
    left:'-9rem'}}>

        </div>
        </div>
    </div>
  );
};

export default Intro
