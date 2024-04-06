import React,{useContext} from 'react'
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from '../../img/heartemoji.png'
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <div className='services'>
        {/* left side */}
     <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span>As a skilled and passionate web developer, I offer a range of services that combine technical proficiency with creative problem-solving.
          <br />
          <ul>
            <li>Responsive Web Design</li>
            <li>Front-End Development</li>
            <li>Collaborative Problem-Solving</li>
            <li>Continuous Learning</li>
          </ul>
        </span>
        {/* <br />
        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, quos!</span> */}
        <a href={Resume} download>
        <button className='button s-button'>
            Download CV
        </button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>

        {/* right part*/}

        <div className="cards">
            <motion.div initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}>
           <Card 
           emoji = {HeartEmoji}
           heading = {'Web Development'}
           detail = {"MongoDb, React,Express ,NodeJs"}
           />
           </motion.div>
   {/* card 2 */}
           <motion.div  initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}>
           <Card 
           emoji = {Glasses}
           heading = {'Competative Programming'}
           detail = {"Data Structures and Algorithms"}
           />
           </motion.div>


          
            <motion.div  initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}>
           <Card 
           emoji = {Humble}
           heading = {'Web Development'}
           detail = {"MongoDb, React,Express ,NodeJs"}
           />
           </motion.div>


           <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
        </div>
        
      
     
      
    </div>
  )
}

export default Services
