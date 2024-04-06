import React, { useContext } from "react";
import { themeContext } from "../../Context";
import './Experience.css'

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='experience'>
        {/* <div className="achievement">
            <div className="circle" style={{color: darkMode?'var(--orange)':''}}>1.5+</div>
            <span style={{color: darkMode?'white':''}}>years</span>
            <span>experience</span>
        </div> */}
        <div className="achievement">
            <div className="circle"  style={{color: darkMode?'var(--orange)':''}}>2+</div>
            <span style={{color: darkMode?'white':''}}>completed</span>
            <span>projects</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{color: darkMode?'var(--orange)':''}}>1.5+</div>
            <span style={{color: darkMode?'white':''}}>years</span>
            <span>experience</span>
        </div>
      
    </div>
  )
}

export default Experience
